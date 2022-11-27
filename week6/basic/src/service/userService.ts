import { UserCreateDTO } from './../interfaces/UserCreateDTO';
import { UserSignInDTO } from '../interfaces/UserSigninDTO';
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs"
import { sc } from '../constants';
const prisma = new PrismaClient();

//! 프리즈마 풀 받고 generate 해야 제대로 사용할 수 있음

//* 유저 생성
const createUser = async ( userCreateDto: UserCreateDTO) => { //이 순서 중요하지 않음
  const salt = await bcrypt.genSalt(10); //^ 매우 작은 임의의 랜덤 텍스트 salt
  const password = await bcrypt.hash(userCreateDto.password, salt); //^ 위에서 랜덤을 생성한 salt를 이용해 암호화

  const data = await prisma.user.create({ //DB 풀 받아서 스키마에 넣어놓은 그 유저 모델
    data: {
      userName: userCreateDto?.name, //userName에 받아온 name 넣을거
      age: userCreateDto?.age,
      email: userCreateDto.email,
      password,
    },
  }); 
  //프리즈마 이용해서 유저 테이블에 create 할거다 라는 뜻
  return data;
};

//* 유저 전체 조회
const getAllUser = async () => {
  const data = await prisma.user.findMany();

  return data;
};

//* 유저 정보 업데이트
const updateUser = async ( userId: number, name: string ) => {
  const data = await prisma.user.update({
    where: {
      id: userId
    },
    data: {
      userName: name
    },
  })
  return data;
};

//* 유저 삭제
const deleteUser = async ( userId: number ) => {
  await prisma.user.delete({
    where: {
      id: userId,
    },
  })
};

//* userId로 유저 조회
const getUserById = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: { //필터 거는거
      id: userId,
    },
  });

  return user;
};

//* 로그인
const signIn = async (userSignInDto: UserSignInDTO) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: userSignInDto.email,
      },
    });
    if (!user) return null;

    //? bcrypt가 DB에 저장된 기존 password와 넘겨 받은 password를 대조하고,
    //? match false시 401을 리턴
    const isMatch = await bcrypt.compare(userSignInDto.password, user.password);
    if (!isMatch) return sc.UNAUTHORIZED;

    return user.id;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const userService = {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
  getUserById,
  signIn,
};

export default userService;

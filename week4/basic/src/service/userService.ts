import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//! 프리즈마 풀 받고 generate 해야 제대로 사용할 수 있음

//* 유저 생성
const createUser = async ( name: string, email: string, age: number ) => { //이 순서 중요하지 않음
  const data = await prisma.user.create({ //DB 풀 받아서 스키마에 넣어놓은 그 유저 모델
    data: {
      userName: name, //userName에 받아온 name 넣을거
      age,
      email,
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

const userService = {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
  getUserById,
};

export default userService;

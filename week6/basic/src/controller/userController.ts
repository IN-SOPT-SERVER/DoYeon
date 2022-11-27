import { Request, Response } from "express";
import { userService } from "../service";
import { validationResult } from "express-validator";
import { fail, success } from "../constants/response";
import { UserCreateDTO } from "../interfaces/UserCreateDTO";
import { UserSignInDTO } from "../interfaces/UserSigninDTO";
import { rm } from "../constants";
import jwtHandler from "../modules/jwtHandler";
import sc from "../constants/statusCode"

//* 유저 생성
const createUser = async (req: Request, res: Response) => { //클라이언트한테 요청 받기 + 응답 보내기
  // const name = req.body.name; 
  // const email = req.body.email; 이렇게 받으면 바보

  //비구조화 할당으로 요청 데이터 받아오기
  // const { userName, email, age } = req.body //req.body에 저 이름이랑 똑같은 필드 꺼내서 할당시켜라
  
  // const data = await userService.createUser(userName, email, age);

  // if (!data) { //데이터 왔는지 NULL인지 체크
  //   return res.status(404).json({ status: 400, message: "유저 생성 실패" }); //데이터 없으면 400
  // }
  // return res.status(200).json({ status: 200, message: "유저 생성 성공", data });

  //? validation의 결과를 바탕으로 분기 처리
  const error = validationResult(req);
  if(!error.isEmpty()) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST))
  }
  //? 기존 비구조화 할당 방식 -> DTO의 형태
  const userCreateDto: UserCreateDTO = req.body;
  const data = await userService.createUser(userCreateDto);

  if (!data) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.SIGNUP_FAIL))
  }

  const accessToken = jwtHandler.sign(data.id);

  const result = {
    id: data.id,
    name: data.userName,
    accessToken,
  };

  return res.status(sc.CREATED).send(success(sc.CREATED, rm.SIGNUP_SUCCESS, result));

};

//* 유저 전체 조회
const getAllUser = async (req: Request, res: Response) => {
  const data = await userService.getAllUser();

  return res.status(200).json({ status: 200, message: "유저 조회 성공", data }); 
};

//* 유저 정보 업데이트
const updateUser = async (req: Request, res: Response) => {
  const { userId } = req.params //파라미터 이렇게 받아오기
  const { name } = req.body.name;
  if(!name) return res.status(404).json({ status: 400, message: "유저 업데이트 실패" }); 

  const updateUser = await userService.updateUser(+userId, name); //path param되면 string 됨 앞에 + 붙여서 해결 가능
};

//* 유저 삭제
const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;

  await userService.deleteUser(+userId);
  return res.status(200).json({ status: 200, message: "유저 삭제 성공" });
};

const getUserById = async (req: Request, res: Response) => {
  const { userId } = req.params; //파라미터로 유저 아이디 받아옴

  const data = await userService.getUserById(+userId);

  if (!data) {
    return res.status(404).json({ status: 404, message: "NOT_FOUND" });
  }
  return res.status(200).json({ status: 200, message: "유저 조회 성공", data });
};

const signInUser = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));
  }

  const userSignInDto: UserSignInDTO = req.body;

  try {
    const data = await userService.signIn(userSignInDto);

    if (!data) return res.status(sc.NOT_FOUND).send(fail(sc.NOT_FOUND, rm.NOT_FOUND));
    else if (data === sc.UNAUTHORIZED)
      return res.status(sc.UNAUTHORIZED).send(fail(sc.UNAUTHORIZED, rm.INVALID_PASSWORD));

    const accessToken = jwtHandler.sign(data);

    const result = {
      id: data,
      accessToken,
    };

    res.status(sc.OK).send(success(sc.OK, rm.SIGNIN_SUCCESS, result));
  } catch (e) {
    console.log(error);
    //? 서버 내부에서 오류 발생
    res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

const userController = {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
  getUserById,
  signInUser,
};

export default userController;

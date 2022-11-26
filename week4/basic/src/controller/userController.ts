import { Request, Response } from "express";
import { userService } from "../service";

//* 유저 생성
const createUser = async (req: Request, res: Response) => { //클라이언트한테 요청 받기 + 응답 보내기
  // const name = req.body.name; 
  // const email = req.body.email; 이렇게 받으면 바보

  //비구조화 할당으로 요청 데이터 받아오기
  const { userName, email, age } = req.body //req.body에 저 이름이랑 똑같은 필드 꺼내서 할당시켜라
  
  const data = await userService.createUser(userName, email, age);

  if (!data) { //데이터 왔는지 NULL인지 체크
    return res.status(404).json({ status: 400, message: "유저 생성 실패" }); //데이터 없으면 400
  }
  return res.status(200).json({ status: 200, message: "유저 생성 성공", data });
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

const userController = {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
  getUserById,
};

export default userController;

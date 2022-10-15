import express, { Router } from "express";

const router: Router = express.Router()
//라우터 메소드 지정한게 없으니까 ~/api 접속해도 아무것도 안뜸
router.use("/user", require("./user")); //이 줄 실행하면 user.ts로 들어감

module.exports = router; //모듈로 반환
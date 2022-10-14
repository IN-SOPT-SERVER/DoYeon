import express, { Request, Response, Router } from "express";
// express 모듈에서 express, (request, response, router) -> 타입 정의를 위해 불러옴!

const router: Router = express.Router();

// ~localhost/api/user
router.get("/", (req: Request, res: Response) => { //GET 요청 들어오면
    const user = "나";

    return res.status(200).json({ //JSON 반환
    status: 200,
    message: "유저 조회 성공",
    data: user,
    });
});

module.exports = router; //생성한 라우터 객체 어디서든 쓸 수 있도록 모듈화
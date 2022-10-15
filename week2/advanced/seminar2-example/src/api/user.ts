import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => { //GET 요청 들어오면
    return res.status(200).json({ //JSON 반환
    status: 200,
    message: "유저 조회 성공",
    });
});

module.exports = router;
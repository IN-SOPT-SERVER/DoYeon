import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

interface Server {
    name: string;
    age: number;
    location: string;
    mbti: string;
    favorite: string;
    hobby: string;
    isYB: boolean;
}

const members: Server[] = [
    {
        name: '김도연',
        age: 23,
        location: '경복궁역',
        mbti: 'ISTP',
        favorite: '된장찌개',
        hobby: '배드민턴',
        isYB: true
    },
    {
        name: '김경린',
        age: 24,
        location: '백마역',
        mbti: 'ISFJ',
        favorite: '초밥',
        hobby: '산책',
        isYB: false
    },
    {
        name: '정준서',
        age: 23,
        location: '잠실새내역',
        mbti: 'ENFP',
        favorite: '쌀국수',
        hobby: '승마',
        isYB: true
    }
]

router.get("/", (req: Request, res: Response) => { //GET 요청 들어오면
    return res.status(200).json({ //JSON 반환
    status: 200,
    message: "멤버 조회 성공",
    data: members,
    });
});

module.exports = router;
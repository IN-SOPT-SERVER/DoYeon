const members: Server[] = [
    {
        name: '소예원',
        age: 24,
        location: '야탑역',
        mbti: 'INFP',
        favorite: '김치볶음밥',
        alcohol: 1,
        isYB: true,
        study: '노션'
    },
    {
        name: '김예린',
        age: 25,
        location: '강남구청역',
        mbti: 'ISTJ',
        favorite: '고기',
        alcohol: 1,
        isYB: true,
        study: '볼링, 알고리즘'
    },
    {
        name: '최윤한',
        age: 26,
        location: '신림역',
        mbti: 'ENFP',
        favorite: '고기',
        alcohol: 3,
        isYB: true,
        study: '풋살, 전통주, 깃, 피그마, 노션'
    }
]

interface Server {
    name: string;
    age: number;
    location: string;
    mbti: string;
    favorite: string;
    alcohol: number;
    isYB: boolean;
    study?: string;
}

members.map((item) => console.log(`이름 ${item.name} ${item.age}세 사는 곳 ${item.location} MBTI ${item.mbti}
좋아하는 음식 ${item.favorite} 주량 ${item.alcohol}병 참여하는 스터디 ${item.study}`));
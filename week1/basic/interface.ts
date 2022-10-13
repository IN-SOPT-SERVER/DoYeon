interface SOPT {
    name: string;
    age: number;
    isSOPT?: boolean; //선택적 프로퍼티는 ?
}

const array: SOPT[] = [{
        name: '김도연',
        age: 23,
        isSOPT: true
    }, {
        name: '김도연',
        age: 24,
        isSOPT: false
    }, {
        name: '김도연',
        age: 25
    }
]

console.log(array)
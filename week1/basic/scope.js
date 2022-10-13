if (true) {
    var test = 'var'
    console.log(test)
}
console.log(test) 
//var로 선언한 변수는 if 문 밖에서 찍어도 잘 나옴

if (true) {
    let test2 = 'let'
    console.log(test2)
}
// console.log(test2) 
// let으로 선언한 변수는 if 문 밖에서 안 찍힘 const도 동일

//var 사용 지양, let const 사용할 것
//var
var myName = '도연';
console.log(myName);

var myName = '도연킴';
console.log(myName); //재선언 가능

myName = '킴도연';
console.log(myName); //재할당 가능


//let
let hello = '하이';
console.log(`${myName} ${hello}`);

// let hello = '안농' 재선언 불가능

hello = '바이';
console.log(`${myName} ${hello}`); //재할당 가능


//const
const fruit = '포도';
console.log(fruit);

// const fruit = '딸기'; 재선언 불가능
// fruit = '사과'; 재할당 불가능

var foo1 = function (a) {
    console.log(a);
};
var foo2 = function (a) {
    console.log(a);
};
foo1();

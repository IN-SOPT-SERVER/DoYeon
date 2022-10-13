const newName: string ='연도';
console.log(newName);

const foo3 = (a: Object) => {
    console.log(a)
}
const foo4 = (a: object) => {
    console.log(a)
}
foo3('hello');
foo4([1,2]); //object는 문자, 숫자, 불린, 심볼, null, undefined 아닌 것만 가능

const hello = (name: string): void => { //아무것도 리턴 안하니까
    console.log(`${name} 안녕`);
}
hello('도연');

const sum = (a: number, b: number): number => {
    return a+b;
}
console.log(sum(2,3));

const testName: any = '김도연'
const nameLength = (testName as string).length
console.log(nameLength)

const testName2: any = '김도연도김'
const nameLength2 = (<string>testName2).length
console.log(nameLength2)
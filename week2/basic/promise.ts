const condition: boolean = false;

//프로미스 생성
const promise = new Promise((resolve, reject) => { //resolve 잘된거 reject 실패
    if (condition) {
        resolve("성공성공"); //프로미스에서 비동기 처리 성공하면 저 문자열 전달해줌
    } else {
        reject(new Error("실패실패"));
    }
}); 

//비동기 처리
promise
.then((resolvedData): void => console.log(resolvedData)) //비동기 처리 성공하면 then으로 받기
.catch((error) =>  console.log(error.message)); //실패하면 catch로 받기
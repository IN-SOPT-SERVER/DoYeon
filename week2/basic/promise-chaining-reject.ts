Promise.resolve(true) //true지만
  .then((response) => {
    throw new Error("비동기 처리 중 에러 발생!"); //여기서 에러 발생하면
  })
  .then((response) => {
    console.log(response);
    return Promise.resolve(true);
  })
  .catch((error) => { //예기 처리
    console.log(error.message);
  });
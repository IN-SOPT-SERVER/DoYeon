//프로미스 체이닝 (then, catch 이용해 연결)

const me = (callback: () => void, time: number) => {
    setTimeout(callback, time); //time만큼 대기하다 callback 실행
};

const wakeUp = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        me(() => {
            console.log("일어남");
            resolve("기상"); //성공했을 때 기상 문자열 전달
        }, 1000); //(callback 함수, time) 인자로 전달
    })
}

const goBathRoom = (now: string): Promise<string> => { //기상 여기로
    return new Promise((resolve, reject) => {
      me(() => {
        console.log("[현재] 화장실로 이동함");
        resolve(`${now} -> 화장실로 이동함`); //성공하면 기상+화장실 문자열 전달
      }, 1000);
    });
  };

const ready = (now: string): Promise<string> => { //기상+화장실 여기로
    return new Promise((resolve, reject) => {
        me(() => {
        console.log("[현재] 칫솔과 치약을 준비함");
        resolve(`${now} -> 칫솔과 치약을 준비함`); //성공하면 화장실+칫솔치약 문자열 전달
        }, 1000);
    });
};

const startChikaChika = (now: string): Promise<string> => { //화징실+칫솔치약 문자열 여기로
    return new Promise((resolve, reject) => {
      me(() => {
        console.log("[현재] 양치함"); 
        resolve(`${now} -> 양치함`); //성공하면 칫솔치약+양치 문자열 전달
      }, 1000);
    });
};

const goodJob = (now: string): Promise<string> => { //칫솔치약+양치 여기로
    return new Promise((resolve, reject) => {
        me(() => {
        console.log("[현재] 나 자신에게 칭찬중");
        resolve(`${now} -> 칭찬중`); //성공하면 양치+칭찬 전달
        }, 1000);
    });
};
  
wakeUp()
  .then((now) => goBathRoom(now))
  .then((now) => ready(now))
  .then((now) => startChikaChika(now))
  .then((now) => goodJob(now))
  .then((now) => console.log(`\n${now}`));
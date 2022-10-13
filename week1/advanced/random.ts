/* 

도전 과제 조건
1. Member, Dinner interface 만들고 타입 지정하기
2. organize 내부 로직 채우기

*/

interface Member {
    name: string;
    group: string;
}

interface Dinner {
    member: Member[];
    menu: string[];
    shuffle(array: Member[]): Member[];
    organize(array: Member[]): void;
}

const dinner : Dinner = {
    member: [
      {
        name: "김경린",
        group: "OB",
      },
      {
        name: "김도연",
        group: "YB",
      },
      {
        name: "정준서",
        group: "YB"
      },
      {
        name: "임채영",
        group: "YB"
      },
    ],
    menu: ['된장찌개', '김치볶음밥', '샌드위치', '떡볶이'],
    shuffle(array: Member[]) {
      array.sort(() => Math.random() - 0.5);
      return array;
    },
    organize(array: Member[]) {
      this.shuffle(array);
      const dinnerMember = array.map(member => member.name);
      const dinnerMenu = this.menu.sort(() => Math.random() - 0.5)[0];
      console.log(`${dinnerMember[0]} ${dinnerMember[1]} ${dinnerMenu} 먹기`);
    },
  };
  
  dinner.organize(dinner.member);

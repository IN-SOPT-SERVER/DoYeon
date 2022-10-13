const user = {
    //key: value
    part: "서버",
    name: "도연",
    favorite: ["밥", "법", "봅"],
    introduce: function () { //함수 function()
        console.log(`${this.part} ${this.name}`);
    },
    getFavoriteFoods: function () {
        this.favorite.forEach((food) => {
            console.log(`${food} 맛 있 어`);
        });
    },
};

user.introduce();
user.getFavoriteFoods();

const arr1 = ['김도연', '밥', 3, true]
const arr2 = Array()

arr1.map((item) => console.log(item)) //map은 배열 안 아이템 순회함
arr1.map((item) => console.log(`${item} 용`)) 

// 배열 속성 엄청 다양함 그때그때 찾아서 쓰자


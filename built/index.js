/*Обьекты*/
/*type User = {name: string, age: number, logName:()=>void};
let user: User = {
    name: 'Anna',
    age: 20,
    logName():void {
        console.log(this.name)
    }
};*/
/*Компилятор и конфигурация*/
/*type user = {name: string, age: number};

const User:user = {
    name: 'Anna',
    age: 20
};

function logUser (User:user) : void {
    console.log(User.name + '' + User.age);
}

logUser(User);*/
/*Классы*/
class User {
    //но наследники класса могут воспользоваться данной переменной
    constructor(name, fristName, anna2) {
        this.name = name;
        this.fristName = fristName;
        this.anna2 = anna2;
        this.age = 25; //protected - экземпляр класса не может обратиться к данной переменной,
    }
    /*работа с private*/
    seTitle(title) {
        this.isTeach = title;
        console.log(this.isTeach);
    }
}
const user = new User('Anna', 'Eliseeva', 34);
user.seTitle(true);
//# sourceMappingURL=index.js.map
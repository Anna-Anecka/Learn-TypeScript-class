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
    //public - доступен всем,за классом,наследникам
    private isTeach: boolean;//private - переменная доступна только внутри класса
    protected age: number = 25;//protected - экземпляр класса не может обратиться к данной переменной,
                        //но наследники класса могут воспользоваться данной переменной
    constructor(public name : string, public fristName : string, public anna2:number) {

    }

    /*работа с private*/
    public seTitle(title: boolean){
        this.isTeach = title;
        console.log(this.isTeach);
    }
}

const user = new User('Anna', 'Eliseeva',34);
user.seTitle(true);








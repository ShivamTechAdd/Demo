// Functions

function add(a,b){
    return a+b;
}
const result = add(2,3);
console.log(`The result is: ${result}`);

function loginUser(username){
    return `${username} Just loged in`;
}

const info = loginUser("Adarsh");
console.log(info);

const price = function calculatePrice(...num1){ //rest operator.
    return num1;
}

// console.log(calculatePrice(10,20,30));
console.log(price(10,20,30));

const user = {
    username:"hitesh",
    price:199
}

function handleObj(anyObject){
    console.log(`UserName is ${anyObject.username} and price is ${anyObject.price}.`);
}

handleObj(user);

const myNewArray = [1,2,3,4,5];

function handleArray(getArr){
    console.log(getArr);
    return getArr[2];
}

console.log(handleArray(myNewArray));

// scope { }
//And closer

function one(){
    const userName="Hitesh";
    
    function two(){
        const website="Youtube";
        console.log(userName);
    }
    // console.log(website);

    two();
}

one();

// Arrow function eh6->2015

const users = {
    userName:"Hitesh Sir",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.userName} welcome to website`);
        console.log(this);
    }

}

//current context.

users.welcomeMessage();
users.userName="sam";
users.welcomeMessage();

console.log(this);

// function chai(){
//     let name="Adarsh";
//     // console.log(this.userName); fun ke ander this use nahi kerte
// }

// chai();

const coffee = () => {
    console.log("Coffee coffee !!!!!");
    // console.log(this);
}

coffee();

// const a = ()=>{ }

const addTwo = (num1,num2) => (num1+num2);  //defoult return.
console.log(addTwo(2,3));

//with currly braces must wirte return stmt and without curley braces we do not have to write return stmt;

const arr = [" ", 1,2,3,4];

arr.forEach(ele => console.log(ele));

// IIFEE

(function churi(){
    console.log(`Db connected`);
})();                   // imedietly invoked function.

// churi();
// ()()

( ()=>{
    console.log(`Iffi executed.`);
})();








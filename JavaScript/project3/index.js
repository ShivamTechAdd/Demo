//template literals;

// let name = "Adarsh";
// let greeting = `Hello ${name}`;
// console.log(greeting);

console.log("Hello world");
console.log("Name","Alice","Age",+25);
console.error("This is an error");
console.warn("This is warning");
console.info("This is warning");

let person={
    name:"Adarsh",
    age:20,
    course:"Btech",
    branch:"cse"
}
// console table
console.table(person);


// Functions

function greet(name) {
    console.log(`Hello:- ${name}`);
}

greet("Adarsh");
greet("Ojha");
greet("Shivam");

function greetPerson(name = "Guest"){
    // name="Guest";
    console.log(`Hello , ${name}`);
}

greetPerson();
greetPerson("Ram");

function calcSum(...numbers){
    let sum =0;
    for(let number of numbers){
        sum+=number;
    }
    console.log(sum);
}

calcSum(2,4,5,7,8,9);

function obj({street,city,name}){
    console.log(street);
    console.log(city);
    console.log(name);
}

obj({street:"ojha", city:"Amethi", name:"Adarsh"}); //object to functions

//Arrays

function printNu(number){

}

printNu([1,2,3,4,5]);

function getSq(number){
    let res = number*number;
    return res;
}

let ans = getSq(4);
console.log(ans);

let operation = function sayHello(){
    console.log("Hello");
}

operation(); // func exp


//func are Objects
function sayRam(){
    console.log("Ram Ram");
}

sayRam();
let a = sayRam;
a();

// Arraow function

let greeted = function(){
    console.log("Hi");
}

let greetArraow = ()=>{
    console.log("Hi");
}

greeted();
greetArraow();


let sum = (a,b) => a+b;

console.log(sum(2,4));


let details={
    name:"Adarsh",
    age:20,
    greet:function(){
        console.log("Hi.."+this.name);
    }
}


let johnDetails={
    name:"Adarsh",
    age:20,
    greet:()=>{
        console.log("Hi.."+this.name);
    }
}

details.greet();
console.log(`Name is ${details.name} and age is ${details.age}`);


let counter={
    value:0,
    increment:function(){
        this.value+=1;
        return this.value;
    }
}

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());



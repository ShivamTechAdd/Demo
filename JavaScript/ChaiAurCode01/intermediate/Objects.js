//Objects 1: literal and 2: Constructor / Singlton
// Object.create();

const sym = Symbol("key1");

const user = {
    name:"Adarsh",
    "full name":"Adarsh ojha",
    [sym]:"mykey1",
    roll:2220837,
    age:20,
    course:"Btech",
    barnch:"Cse",
    isLogedIn:false,
    lastLoginDays:["Monday","Tuesday","Saturday"]
};

console.log(user.name);

//Another Way
console.log(user["roll"]);
console.log(user["full name"]);
console.log(user[sym]);

user.email = "Shivamojha1946@gmail.com";
console.log(user);

// Object.freeze(user);

user.greeting = function(){
    console.log("Hello Mitra");
}

console.log(user);
console.log(user.greeting());

user.greeting2 = function(){
    console.log(`Hello ${this.name}`);
}

console.log(user.greeting2());

const tinder = new Object();
console.log(tinder);

const regularUser = {
    email:"shivamojha1946@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Adarsh",
            lastName:"Ojha"
        }
    }
}

console.log(regularUser.fullName?.userFullName.firstName);


const obj1 = {1:"a",2:"b"};
const obj2 = {3:"a",4:"b"};
const obj3 = {5:"a",6:"b"};

const obj4 = Object.assign({} , obj1 , obj2 , obj3);
console.log(obj3);


const obj5 = {...obj1,...obj2,...obj3};

const users = [
    {
        id:1,
        email:"shia8933@gmail.com"
    },
    {
        id:2,
        email:"shia8933@gmail.com"
    },
    {
        id:3,
        email:"shia8933@gmail.com"
    }
];

console.log(tinder);
users[1].email;
console.log(Object.keys(user));
console.log(Object.values(user));


// json
// Destructuring of Object;

const course = {
    courseName:"Js in hindi",
    coursePrice:10000,
    courseInstructure:"Hitesh"
}

// course.courseInstructure;

const {courseName:cName,coursePrice:cPrice} = course;
console.log(cName);
console.log(cPrice);


















// for of
// mdn is the documentation of the html css and js.

const arr = [1,2,3,4,5];

for (const ele of arr) {
    console.log(ele);
}

// for in

// for (const key in object) {
//     if (!Object.hasOwn(object, key)) continue;
    
//     const element = object[key];
    
// }

// map 

const mp = new Map(); //unique value
mp.set('In','India');
mp.set('Us','Uniated states of america');
mp.set('Fr','france');

console.log(mp);

for (const [key,value] of mp) {
    console.log(key,':-',value);
}

const game = {
    name:"Cricket",
    score:300,
    wicket:2
}

// for (const [key,value] of game) {           //not working
//     console.log(key,':-',value);
// }
console.log("     ");

const game2 = {
    name:"Cricket",
    score:300,
    wicket:2
}
 
// for in used for Object
for (const key in game) {  
    console.log(game[key]);
}

console.log("   ");

const arr2 = [1,2,3,4];
for (const key in arr2) {
    console.log(arr2[key]);
}

console.log("   ");
// for each
const cooding = ["java","c","c++",".net"];

cooding.forEach( ele => console.log(ele) );

console.log("   ");

cooding.forEach( printMe );


function printMe(item){
    console.log(item);
}

console.log("   ");   


cooding.forEach( (item,index,arr) => {
    console.log(item,index,arr);
});

const coding2 = [
    {
        lName:"javascript",
        lFile:"Js"
    },
    {
        lName:"c++",
        lFile:"cpp"
    },
    {
        lName:"java",
        lFile:"class"
    }
];

console.log("   ");   

coding2.forEach((item)=>{
    console.log(item);  //item is ref to an object  item,flName;
});

console.log("   ");   

coding2.forEach((item)=>{
    console.log(item.lName);  //item is ref to an object  item,flName;
});

console.log("   ");   

coding2.forEach((item)=>{  //do not return anything
    console.log(item.lFile);  //item is ref to an object  item,flName;
    // return item;
});



// filter map and reduce;
const myNum=[1,2,3,4,5,6,7,8,9,10];
const res1 = myNum.filter((ele)=>ele>5); //implicit return without curly braces.
const res2 = myNum.filter((ele) => { //explicit return with curly braces or scope {}.
   return ele>5;
}); //implicit return .

console.log(res1);
console.log(res2);

const users = [
    { id: 1, name: "User1", age: 20, city: "Delhi" },
    { id: 2, name: "User2", age: 21, city: "Mumbai" },
    { id: 3, name: "User3", age: 22, city: "Bangalore" },
    { id: 4, name: "User4", age: 23, city: "Chennai" },
    { id: 5, name: "User5", age: 24, city: "Hyderabad" },
    { id: 6, name: "User6", age: 25, city: "Pune" },
    { id: 7, name: "User7", age: 26, city: "Kolkata" },
    { id: 8, name: "User8", age: 27, city: "Jaipur" },
    { id: 9, name: "User9", age: 28, city: "Ahmedabad" },
    { id: 10, name: "User10", age: 29, city: "Indore" },
    { id: 11, name: "User11", age: 30, city: "Bhopal" },
    { id: 12, name: "User12", age: 31, city: "Patna" },
    { id: 13, name: "User13", age: 32, city: "Lucknow" },
    { id: 14, name: "User14", age: 33, city: "Kanpur" },
    { id: 15, name: "User15", age: 34, city: "Agra" },
    { id: 16, name: "User16", age: 35, city: "Noida" },
    { id: 17, name: "User17", age: 36, city: "Gurgaon" },
    { id: 18, name: "User18", age: 37, city: "Faridabad" },
    { id: 19, name: "User19", age: 38, city: "Ghaziabad" },
    { id: 20, name: "User20", age: 39, city: "Meerut" }
  ];

const userRes = users.filter((item)=>item.id>10);

console.log(users);
console.log("");
console.log(userRes);

// map

console.log(myNum);
const res3 = myNum.map((num)=>num+10);
console.log("");
console.log(res3+"\n");

const newRes = myNum.map((num)=>num*10)
                .map(num => num+10)
                .filter(num=>num%2==0);

console.log(newRes+"\n");

//reduce
const red = [1,2,3,4,5,6];

const mytotal = myNum.reduce(function(acc,currVal){
    console.log(`Acc: ${acc} and currVal: ${currVal}`);
    return acc+currVal;
},0);

console.log(mytotal+"\n");

const mytotal2 = myNum.reduce((acc,currVal)=>{
    return acc+currVal;
},0);

console.log(mytotal2+"\n");

const mytotal3 = myNum.reduce((acc,currVal) => acc+currVal,0);

console.log(mytotal3);

















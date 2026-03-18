// fetch("httds://something.com").then().catch().finally();
//promise is an object in js

const promiseOne  = new Promise(function(resolve,reject){
    // Do an async task
    // Db calls,crypto,network.
    setTimeout(function(){
        console.log("Async task is complete.");
        resolve();
    },1000);
});

promiseOne.then(function(){
    console.log("Promise consumed.");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task two is completed.");
        resolve();
        
    },1000);
}).then(function(){
    console.log("Assync two resolved");
});

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Adarsh",email:"chai@chai.com"});
    },1000);
});

promiseThree.then(function(user){
    console.log(user);
});

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"Adarsh",password:"1245"});
        }else{
            reject('Eroor SOmething went wrong');
        }
    },1000);
});
promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>console.log("Finally the promise is either resolved or rejected."));

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"javascript",password:"1234"});
        }else{
            reject('Eroor js went wrong');
        }
    },1000);
});

async function consumedPromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

consumedPromiseFive();


async function getAllUsers() {
   try{
    const response = await  fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
   }catch(error){
    console.log("error ocurred in promise five");
   }
}

getAllUsers();

// using then and catch. fetch ka response ek promise ;

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
});












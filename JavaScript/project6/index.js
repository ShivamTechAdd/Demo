let temp = 30;
if(temp > 50){
    console.log("Jai shree Ram");
}else{
    console.log("Hay Garmi.");
}

// switch
const fruitType = "Apple";
switch (fruitType) {
    case "Apple": console.log("Apple");
        break;
    default: console.log("Fruit Not Apple");
        break;
}

// CallBacks;
//Api call         //timeOut func

// console.log("immediate");

// setTimeout(function name() {
//     console.log("Delay ...")
// },2000);

function fetchData(){
    setTimeout(()=>{
        console.log('data fetched from server');
        return "Sample data";
    },2000);
}

function processData(){
   let data = fetchData();
   console.log(data);
}

processData();

// callbacks;

function fetchDataWithCallback(callback){
    setTimeout(()=>{
        let data = "Sample data";
        callback(data);
    },2000);
}

function processDataWithCallback(data){
   console.log('With callback', data);
}

fetchDataWithCallback(processDataWithCallback);


// 



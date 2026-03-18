const parent = document.querySelector('.parent');
console.log(parent);
console.log(parent.children);

console.log(parent.children[2].innerHTML);

for (let i = 0;i < parent.children.length;i++) {
    console.log(parent.children[i].innerHTML);
    parent.children[i].style.color="red";
}

parent.children[1].style.color="orange";
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

const day1 = document.querySelector('.day');
console.log(day1);
console.log(day1.parentElement);

console.log("Nodes: ",parent.childNodes);

// create element
const ele = document.createElement('div');
console.log(ele);

ele.className = "main";
ele.id=Math.round(Math.random()*10 + 1);

ele.setAttribute("title","genrated title");
ele.style.backgroundColor="green";
ele.style.padding='10px';

// ele.innerText = "Chai Aur code";
const addText = document.createTextNode("chai aur code");
ele.appendChild(addText);

document.body.appendChild(ele);























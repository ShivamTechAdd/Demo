function addLanguage(langname){
    const ele = document.createElement('li');
    ele.innerHTML = `${langname}`;
    document.querySelector('.language').appendChild(ele);
}

addLanguage("python");
addLanguage("Java");

function addOptLanguage(language){
    const list = document.createElement('li');
    list.appendChild(document.createTextNode(language));
    document.querySelector('.language').appendChild(list);
}

addOptLanguage("c++");

// edit 
const secondLang = document.querySelector('li:nth-child(2)');
// secondLang.innerHTML="Mojo";
const newLi = document.createElement('li');
// newLi.appendChild(document.createTextNode("Maven"));
newLi.textContent = "Mojo";
secondLang.replaceWith(newLi);

// const firstLang = document.querySelector("li:first-child");
// firstLang.outerHTML = "<li>Typescript<li/>";

//remove
const lastLang = document.querySelector("li:last-child");
lastLang.remove();

















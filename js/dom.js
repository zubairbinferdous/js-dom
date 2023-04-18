// getElementsByTagName 

let element = document.getElementsByTagName('li');
for (const data of element) {
    data.style.color = 'black';
    data.style.backgroundColor  ='yellow';
    data.style.fontSize = '20px';
    data.style.padding = '5px 0px';
    data.style.margin = '10px';
    data.style.listStyle = 'none';
}


let heading  = document.getElementsByTagName('h1');
for( let h1 of heading){
    console.log(h1.innerText);
};


// getElementById ****

document.getElementById('btn').addEventListener('click', function(){
   document.getElementById('body').style.backgroundColor = 'red';
   console.log('hello world click me for background color');
});

document.getElementById('body').addEventListener('mouseover', function(){
   document.getElementById('body').style.backgroundColor = 'white';
   console.log('hello world click me for background color');
});

// getElementsByClassName ****

let palces = document.getElementsByClassName('important');
for (const key in palces) {
    console.log(key);
}

let change =  document.getElementById('useId');
change.innerText = 'this text use as javascript';
change.style.fontSize = '60px';
let att = change.getAttribute('id');
console.log(att);

for (const item of palces) {
    console.log(item.innerText);
}


// querySelector / all

const query = document.querySelectorAll(".li li");
console.log(query);

for (const li of query) {
    let liList = li.innerText;
    console.log(liList);
}

let hello = document.querySelector(".li li");
console.log(hello);

////// google browers ///////////

const title = document.getElementById("headerr");

title.getAttribute('class')

// 'hello ok main sub-place'


title.classList

// DOMTokenList(4) ['hello', 'ok', 'main', 'sub-place', value: 'hello ok main sub-place'];

title.classList.add('helloTo')

title.classList
// DOMTokenList(5) ['hello', 'ok', 'main', 'sub-place', 'helloTo', value: 'hello ok main sub-place helloTo']

title.classList.remove('main');

title.classList;
// DOMTokenList(4) ['hello', 'ok', 'sub-place', 'helloTo', value: 'hello ok sub-place helloTo']
title.classList.add('amiToMoreJabo');

title.setAttribute('title' , ' hello world to me ');

let data = document.getElementById("headerr");
console.log(data.innerHTML);
console.log(data.innerText); 

const style = document.querySelector('section');
style.style.border = '2px solid red';
style.style.padding = '30px';
style.style.fontSize = "20px";
style.style.borderRadius = "10px";
style.classList.add('text-center');


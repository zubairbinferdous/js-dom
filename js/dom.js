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






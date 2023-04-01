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

document.getElementById('btn').addEventListener('mouseenter', function(){
   document.getElementById('body').style.backgroundColor = 'red';
   console.log('hello world click me for background color');
});

document.getElementById('body').addEventListener('mouseover', function(){
   document.getElementById('body').style.backgroundColor = 'white';
   console.log('hello world click me for background color');
});


let palces = document.getElementsByClassName('important');
for (const key in palces) {
    console.log(key);
}

for (const item of palces) {
    console.log(item.innerText);
}






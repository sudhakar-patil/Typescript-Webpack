import { name, numbers } from "./sample";

console.log(`hello ${name}`);

const ele = document.getElementById('show');
ele!.innerText = name;

const div = document.createElement('div');
div.id = 'div1';
div.style.height = '500px';
div.style.width ='600px';
div.style.border = 'solid 1px black';

numbers.forEach((number)=>{
    let btn = document.createElement('button');
    btn.id = `btn-${number}`;
    btn.innerText = `Button ${number}`;
    div.append(btn);
});

document.body.append(div);





(function(){

const container = document.getElementById("captcha-container");

let stage = 0;

container.innerHTML = `
<div class="captcha-card">

<div id="progress">Stage 1 / 4</div>

<h2 id="question"></h2>

<div id="options"></div>

<p id="message"></p>

</div>
`;

function randomNumbers(count,min,max){
let arr=[];

while(arr.length<count){
let n=Math.floor(Math.random()*(max-min+1))+min;
if(!arr.includes(n)) arr.push(n);
}

return arr;
}

function digitSum(n){
return n.toString().split("").reduce((a,b)=>a+Number(b),0);
}

function loadStage(){

const question=document.getElementById("question");
const options=document.getElementById("options");
const progress=document.getElementById("progress");
const message=document.getElementById("message");

message.innerText="";

progress.innerText=`Stage ${stage+1} / 4`;

options.innerHTML="";

let numbers=randomNumbers(4,1,20);

if(stage===0){

question.innerText="Select the biggest number";

let correct=Math.max(...numbers);

numbers.forEach(n=>{

let btn=document.createElement("button");
btn.innerText=n;

btn.onclick=()=>check(n===correct);

options.appendChild(btn);

});

}

if(stage===1){

question.innerText="Select the biggest value";

options.className="floating";

let correctIndex=Math.floor(Math.random()*4);

numbers.forEach((n,i)=>{

let span=document.createElement("span");
span.className="float-number";
span.innerText=n;

let size;

if(i===correctIndex) size=80;
else if(i===(correctIndex+1)%4) size=74;
else size=25+Math.random()*10;

span.style.fontSize=size+"px";
span.style.left=Math.random()*300+"px";
span.style.top=Math.random()*150+"px";

span.onclick=()=>check(i===correctIndex);

options.appendChild(span);

});

}

if(stage===2){

question.innerText="Select the smallest number";

let sums=numbers.map(n=>digitSum(n));
let min=Math.min(...sums);

numbers.forEach(n=>{

let btn=document.createElement("button");
btn.innerText=n;

btn.onclick=()=>check(digitSum(n)===min);

options.appendChild(btn);

});

}

if(stage===3){

question.innerText="Select the smallest number";

options.className="floating";

let correctIndex=Math.floor(Math.random()*4);

numbers.forEach((n,i)=>{

let span=document.createElement("span");
span.className="float-number";
span.innerText=n;

let size;

if(i===correctIndex) size=10;
else if(i===(correctIndex+1)%4) size=14;
else size=35+Math.random()*10;

span.style.fontSize=size+"px";
span.style.left=Math.random()*300+"px";
span.style.top=Math.random()*150+"px";

span.onclick=()=>check(i===correctIndex);

options.appendChild(span);

});

}

}

function check(correct){

const message=document.getElementById("message");

if(correct){

stage++;

if(stage<4){
loadStage();
}
else{

document.getElementById("question").innerText=
"Verification Passed. Proceeding to next challenge.";

setTimeout(()=>{
nextLevel();
},1500);

}

}
else{
message.innerText="Wrong. Try again human.";
}

}

loadStage();

})();
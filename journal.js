let seconds = 0;

const heartbeat = document.getElementById("heartbeat");
const aliveBtn = document.getElementById("aliveBtn");
const logContainer = document.getElementById("logContainer");
const input = document.getElementById("entryInput");
const addBtn = document.getElementById("addBtn");

/* timer */

setInterval(()=>{

seconds++;

heartbeat.innerText = 60 - seconds;

if(seconds >= 60){

aliveBtn.style.display = "block";
moveButton();

seconds = 0;

}

},1000);

/* move button */

function moveButton(){

let x = Math.random()*80;
let y = Math.random()*80;

aliveBtn.style.left = x + "%";
aliveBtn.style.top = y + "%";

}

/* alive click */

aliveBtn.onclick = ()=>{

aliveBtn.style.display = "none";

addLog("User proved they are alive","STATUS");

};

/* add entry */

addBtn.onclick = ()=>{

let text = input.value.trim();

if(text==="") return;

addLog(text,"DEV");

input.value="";

};

/* add log */

function addLog(text,tag){

let time = new Date().toLocaleTimeString([],{
hour:'2-digit',
minute:'2-digit'
});

let log = document.createElement("div");

log.className="log";

log.innerHTML=`
<div><b>${tag}</b> <span class="time">[${time}]</span></div>
<p>${text}</p>
`;

logContainer.prepend(log);

}
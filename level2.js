(function(){

const container=document.getElementById("captcha-container");

container.innerHTML=`
<div class="captcha-card">

<h2>Click the unclickable button</h2>

<div class="button-area">

<button id="continueBtn" class="verify">Continue</button>
<button id="submitBtn" class="verify">Submit</button>
<button id="nextBtn" class="verify">Next</button>
<button id="cancelBtn" class="verify">Cancel</button>

</div>

<p id="msg"></p>

</div>
`;

const continueBtn=document.getElementById("continueBtn");
const submitBtn=document.getElementById("submitBtn");
const nextBtn=document.getElementById("nextBtn");
const cancelBtn=document.getElementById("cancelBtn");

continueBtn.onmouseenter=()=>{
continueBtn.style.left=Math.random()*250+"px";
continueBtn.style.top=Math.random()*150+"px";
};

submitBtn.onmouseover=()=>{
submitBtn.style.transform=
"translateX("+(Math.random()*10-5)+"px)";
};

nextBtn.onclick=()=>{
document.getElementById("msg").innerText="Wrong button.";
};

cancelBtn.onclick=()=>{

document.getElementById("msg").innerText=
"Correct. Human detected.";

setTimeout(()=>{
nextLevel();
},1500);

};

})();
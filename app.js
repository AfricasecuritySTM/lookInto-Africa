
const slides = [

{

title:"Welcome Builders 👋",

message:
"Welcome to lookInto-Africa.\n\nA home for African creators, engineers and innovators."

},

{

title:"Our Mission",

message:
"Document.\n\nValidate.\n\nCollaborate.\n\nSolve real-world African challenges."

},

{

title:"Community Awareness",

message:
"Respect creators.\n\nStay on topic.\n\nSupport innovation.\n\nShare constructive feedback."

},

{

title:"Creator Philosophy",

message:
"Research.\n\nDevelop.\n\nPrototype.\n\nDeploy.\n\nEvery solution starts somewhere."

}

];


let current = 0;

const title =
document.getElementById("title");

const message =
document.getElementById("message");

const accountButtons =
document.getElementById("accountButtons");


function showSlide(){

title.innerText =
slides[current].title;

message.innerText =
slides[current].message;

}


showSlide();


const autoSlide = setInterval(()=>{

current++;

if(current < slides.length){

showSlide();

}

else{

clearInterval(autoSlide);

title.innerText =
"Ready To Join?";

message.innerText =
"Welcome to the next generation of African engineering collaboration.";

accountButtons.style.display =
"block";

}

},6000);



document
.getElementById("createBtn")
.addEventListener("click",()=>{

alert(
"Create Account feature coming soon."
);

});



document
.getElementById("loginBtn")
.addEventListener("click",()=>{

alert(
"Login feature coming soon."
);

});



document
.getElementById("soundBtn")
.addEventListener("click",()=>{

if(
document
.getElementById("soundBtn")
.innerText=="🔊"
){

document
.getElementById("soundBtn")
.innerText="🔇";

}

else{

document
.getElementById("soundBtn")
.innerText="🔊";

}

});



document
.getElementById("bellBtn")
.addEventListener("click",()=>{

alert(
"No new notifications."
);

});



document
.getElementById("menuBtn")
.addEventListener("click",()=>{

alert(
"Navigation menu coming soon."
);

});

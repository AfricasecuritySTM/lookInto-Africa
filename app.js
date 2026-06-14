
const pages=[

{

title:"WELCOME",

message:
"Welcome to lookInto-Africa.\n\nA collaborative home for African engineers,\nresearchers and innovators."

},


{

title:"OUR MISSION",

message:
"Document.\n\nValidate.\n\nCollaborate.\n\nBuild African solutions."

},


{

title:"AWARENESS",

message:
"Respect creators.\n\nSupport innovation.\n\nStay relevant.\n\nShare constructive ideas."

},


{

title:"USER GUIDE",

message:
"Creators build.\n\nObservers learn.\n\nCollaborators improve projects."

},


{

title:"WARNING",

message:
"Unrelated activities and disruptive behaviour may result in restrictions.\n\nProtect innovation."

}

];



const title=
document.getElementById(
"title"
);


const message=
document.getElementById(
"message"
);


const account=
document.getElementById(
"accountArea"
);



let current=0;



function showPage(){

title.innerText=
pages[current].title;

message.innerText=
pages[current].message;

}



showPage();



const timer=
setInterval(function(){

current++;


if(current<pages.length){

showPage();

}


else{

clearInterval(timer);

title.innerText=
"READY TO JOIN";

message.innerText=
"Welcome to the next generation of African engineering collaboration.";


account.style.display=
"block";

}

},6000);




document
.getElementById(
"create"
)
.addEventListener(
"click",
function(){

alert(
"Create Account coming soon."
);

}
);




document
.getElementById(
"login"
)
.addEventListener(
"click",
function(){

alert(
"Login coming soon."
);

}
);




document
.getElementById(
"sound"
)
.addEventListener(
"click",

function(){

if(this.innerText=="🔊"){

this.innerText="🔇";

}

else{

this.innerText="🔊";

}

}
);

const pages = [

{
title:"Introduction to lookInto-Africa",

message:
"A collaborative home for African engineers, researchers, developers and innovators working to solve real-world challenges through technology and engineering.\n\nEvery solution begins with an idea."
},

{
title:"Our Mission",

message:
"lookInto-Africa exists to help creators document, validate and discuss engineering projects from research through development, prototype and deployment.\n\nWe believe collaboration turns ideas into solutions."
},

{
title:"Community Awareness",

message:
"Respect fellow creators.\n\nSupport innovation.\n\nShare constructive observations.\n\nStay relevant to project discussions."
},

{
title:"User Guide",

message:
"Creators can upload projects, research, diagrams and journals.\n\nObservers can view projects, comment and collaborate."
},

{
title:"Warning",

message:
"Protect creators.\n\nAvoid unrelated discussions.\n\nSupport engineering growth and collaboration."
}

];

const title = document.getElementById("title");
const message = document.getElementById("message");
const stage = document.getElementById("stage");
const progress = document.getElementById("progress");

let current = 0;

function showPage(){

    title.innerText = pages[current].title;

    message.innerText = pages[current].message;

    stage.innerText =
    `Stage ${current + 1} of ${pages.length}`;

    let dots = "";

    for(let i=0;i<pages.length;i++){

        dots += i <= current ? "● " : "○ ";

    }

    progress.innerText = dots;
}

showPage();

setInterval(() => {

    current++;

    if(current < pages.length){

        showPage();

    }

},6000);

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {

    if(menu.style.display === "block"){

        menu.style.display = "none";

    }else{

        menu.style.display = "block";

    }

});

const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", () => {

    alert(
        "Welcome to lookInto-Africa.\n\nBuild. Document. Collaborate."
    );

});

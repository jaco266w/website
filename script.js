let lW;
let lImg;
let lT1;
let lT2;

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("Siden Vises");

    lW = document.querySelector("#load_wrapper");
    lImg = document.querySelector("#load_img");
    lT1 = document.querySelector("#load_text1");
    lT2 = document.querySelector("#load_text2");

    lImg.classList.add("load_roter");

    lImg.addEventListener("animationiteration", rotation);

}

function rotation() {
    console.log("Rotation");

    lImg.removeEventListener("animationiteration", rotation);

    lT1.classList = " ";

    lT1.classList.add("load_frem");

    lImg.addEventListener("animationiteration", rotation2);

}

function rotation2() {
    console.log("Rotation 2");

    lImg.removeEventListener("animationiteration", rotation);

    lT2.classList = " ";

    lT2.classList.add("load_frem");

    lT2.addEventListener("animationend", forsvind);

}

function forsvind() {
    console.log("Forsvind");

    lT2.removeEventListener("animationend", forsvind);

    lImg.classList = " ";
    lT1.classList = " ";
    lT2.classList = " ";

    lImg.classList.add("load_tilbage");
    lT1.classList.add("load_tilbage");
    lT2.classList.add("load_tilbage");

    lT2.addEventListener("animationend", skjulDisplay);
    
}

function skjulDisplay() {
    console.log("Skjul Display");

    lT2.removeEventListener("animationend", skjulDisplay);

    lW.classList.add("skjul_wrapper");

    lW.addEventListener("animationend", done);

}

function done() {
    console.log("Done");

    lW.removeEventListener("animationend", done);


    lW.classList.add("skjul");

    lW.addEventListener("animationend", remove);

}

function remove() {
    console.log("Remove");

    lW.removeEventListener("animationend", remove);

    lW.remove();

}

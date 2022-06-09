const nav = id("nav").children;
const body = id("body").children;
let state = false;

function change(z, a) {
    getClass(a).innerHTML = id(z).files[0].name;
    getClass(a).classList.add("green");
}

bienvenue();
visibility(0, [0, 1]);
visibility(1, [1, 0]);
close();

function visibility(index, states) {
    const state = ["visible", "hidden"];
    nav[index + 1].addEventListener("click", () => {
        let position = states.indexOf(0);
        nav[position + 1].classList.add("selected");
        for (let i = 0; i < 2; i++) {
            body[i + 1].style.visibility = state[states[i]];
            if (i != position) {
                nav[i + 1].classList.remove("selected");
            }
        }
    })
}

function bienvenue() {
    const bienvenueClick = id("bienvenue");
    bienvenueClick.addEventListener("click", () => {
        if (!state) {
            state = true;
            id("arrow").classList.remove("arrow1");
            id("arrow").classList.add("arrow2");
            id("bieContainer").classList.remove("h0");
        } else {
            state = false;
            id("arrow").classList.remove("arrow2");
            id("arrow").classList.add("arrow1");
            id("bieContainer").classList.add("h0");
        }
    });
}

function id(className) {
    return document.getElementById(className);
}

function getClass(className) {
    return document.querySelector(className);
}

function close() {
    let tab = [getClass(".x1"), getClass(".x2")]
    for (let j = 0; j < 2; j++) {
        tab[j].addEventListener("click", () => {
            for (let i = 1; i < 3; i++) {
                body[i].style.visibility = "hidden";
                nav[i].classList.remove("selected");
            }
        })
    }
}

// ajax request to server.php

id("btn-txt").addEventListener("click", () => {
    let texte = id("texte");
    if (texte.length != 0) {
        id("cover").classList.add("notTouche");
        id("cover").innerHTML = "<div class='wait'></div>";
        $.post("server.php", {
            type: "txt",
            txt: texte.value
        }, () => {
            id("cover").innerHTML = "<h3 class='popup'>Isaorana be dia be ianao nizara fahalalàna taminay :)</h3>";
            setTimeout(() => {
                id("cover").className = "";
                id("cover").innerHTML = "";
            }, 3000)
        })
    }
    texte.value = "";
})
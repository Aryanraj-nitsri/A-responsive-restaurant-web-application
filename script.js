const Hamburger = document.getElementById("hamburger");
const bar1 = document.getElementById("bar1")
const bar2 = document.getElementById("bar2")
const bar3 = document.getElementById("bar3")
const menu = document.querySelector(".menu")

Hamburger.addEventListener("click", (e) => {
    bar2.classList.toggle("op")
    bar1.classList.toggle("rot-clock")
    bar3.classList.toggle("rot-anti")
    menu.classList.toggle("show")
})
// script for image slider
const NextArrow = document.querySelector(".next-arrow");
const PreArrow = document.querySelector(".pre-arrow");
const Images = document.querySelectorAll(".box>img");
const SlideButton = document.querySelectorAll(".radio-button");
// for Image slider
let flag = 0;
let count = 0;
function AutoSlider(item) {
    Images.forEach((element) => {
        element.style.display = "none";
    })
    if (item >= 3) {
        item = 0;
    }
    if (item < 0) {
        item = 3
    }
    Images[item].style.display = "block";
}


setInterval(() => {
    AutoSlider(count);
    count++;
    if (count >= 3) {
        count = 0;
    }

}, 2000)
NextArrow.addEventListener("click", () => {
    onclick(1);
})
PreArrow.addEventListener("click", () => {
    onclick(-1)
})
function onclick(x) {
    flag = flag + x;
    NextElement(flag);

}
function NextElement(num) {
    Images.forEach((element) => {
        element.style.display = "none";
    })
    if (num >= 3) {
        num = 0;
    }
    if (num < 0) {
        num = 3;
    }
    Images[num].style.display = "block"
}
// services
const readmore = document.querySelector("#extra>button")
const paraTohidden = document.querySelector("#extra>p")
const readmore2 = document.querySelector("#extra-cust-para>button")
const paraTohidden2 = document.querySelector("#extra-cust-para>p")
readmore.addEventListener("click", () => {
    if (paraTohidden.style.display != "none") {
        paraTohidden.style.display = "none";
    }
    else {
        paraTohidden.style.display = "block"
    }

})
readmore2.addEventListener("click", () => {
    if (paraTohidden2.style.display != "none") {
        paraTohidden2.style.display = "none";
    }
    else {
        paraTohidden2.style.display = "block"
    }

})
const input = document.getElementById("nameInput")
const lab1 = document.getElementsByTagName("label")

input.addEventListener("click", () => {
    if (input.value === "") {

        lab1[0].classList.toggle("pos");
    }

    input.addEventListener("input", () => {
        
            lab1[0].classList.add("pos")
        
    })
})
const input2 = document.getElementById("emailInput")
const lab2 = document.getElementById("Email")
input2.addEventListener("click", () => {
    if (input2.value === "") {

        lab2.classList.toggle("posEmail")
    }
})
input2.addEventListener("input", () => {
    
        lab2.classList.add("posEmail")
    
})
const input3 = document.getElementById("passInput")
const lab3 = document.getElementById("passLabel")
function change(){
    console.log("working")
        lab3.classList.toggle("posPass")
}
input3.addEventListener("click", () => {
    if (input3.value === "") {

        lab3.classList.toggle("posPass")
    }
})
input3.addEventListener("input", () => {
    
        lab3.classList.add("posPass")
    
})

// form validation
const form = document.getElementById("form")
form.addEventListener("submit", (e) => {
    e.preventDefault();
})
function clearErrror() {
    const element = document.querySelectorAll(".formerror");
    element.forEach((user) => {
        user.innerHTML = "";
    })

}
function setError(id, error) {
    const requiredElement = document.getElementById(`${id}`);
    requiredElement.innerText = `${error}`;
}

function validation() {
    let temp = true;
    clearErrror();
    if (input.value.length < 4) {
        setError("nameerror", "length of name is too short");
        temp = false;
    }

    if (input3.value.length < 6) {
        setError("passerror", "length of password should be greater than 6")
        temp = false;
    }
    return temp;
}


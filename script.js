let callMe = document.getElementById("callMe")
let callMeButton = document.getElementById("callMeButton")
let modal = document.getElementsByClassName("modal")[0]

let slideLeft = document.getElementById("slideLeft")
let slideRight = document.getElementById("slideRight")
let slider = document.getElementsByClassName("slider")[0]

let commentLeft = document.getElementById("commentLeft")
let commentRight = document.getElementById("commentRight")
let pairs = document.getElementsByClassName("pair")

let sliderDistance = 0

slideLeft.onclick = function () {
    console.log("слайд на лево")
    sliderDistance -= 100;
    console.log(sliderDistance)

    if (sliderDistance < 0) {
        console.log("слайдер начало в конец");
        sliderDistance = slider.children.length * 100 - 100;
    }
    slider.style.transform = `translateX(-${sliderDistance}%)`
}

slideRight.onclick = function () {
    console.log("слайд на право");
    sliderDistance += 100;
    console.log(sliderDistance);

    if (sliderDistance == (slider.children.length * 100)) {
        console.log("слайдер конец в начало");
        sliderDistance = 0;
    }
    slider.style.transform = `translateX(-${sliderDistance}%)`
}


callMe.onclick = function () {
    console.log("call me open")
    modal.style.transform = "scale(1)"
}

callMeButton.onclick = function () {
    console.log("call me confirm")
    modal.style.transform = "scale(0)"
}

modal.onclick = function () {
    console.log("call me close")
    modal.style.transform = "scale(0)"
}

modal.children[0].onclick = function (event) {
    event.stopPropagation();
}


commentRight.onclick = function () {
    console.log("comment right")
    let activePair = document.getElementsByClassName("activePair")[0]
    activePair.classList.remove("activePair")
    let nextPair;
    if (activePair.nextElementSibling) {
        nextPair = activePair.nextElementSibling
    }
    else {
        nextPair = pairs[0]
    }
    setTimeout(function () {
        nextPair.classList.add("activePair")
    }, 300)
}

commentLeft.onclick = function () {
    console.log("comment left");
    let activePair = document.getElementsByClassName("activePair")[0]
    activePair.classList.remove("activePair")
    let previousPair;
    if (activePair.previousElementSibling) {
        previousPair = activePair.previousElementSibling
    }
    else {
        previousPair = pairs[pairs.length - 1]
    }
    setTimeout(function () {
        previousPair.classList.add("activePair")
    }, 300);
}
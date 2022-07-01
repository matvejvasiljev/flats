let callMe = document.getElementById("callMe")
let callMeButton = document.getElementById("callMeButton")

let slideLeft = document.getElementById("slideLeft")
let slideRight = document.getElementById("slideRight")
let modal = document.getElementsByClassName("modal")[0]
let slider = document.getElementsByClassName("slider")[0]

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
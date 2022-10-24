let callMe = document.getElementById("callMe")
let callMeButton = document.getElementById("callMeButton")
let modal = document.getElementsByClassName("modal")[0]


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


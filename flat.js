let map = document.getElementById("map")

let gallery = document.getElementsByClassName("flatGallery")[0]
let flatInfo = document.getElementsByClassName("flatInfo")[0]

map.style.height = gallery.offsetHeight - flatInfo.offsetHeight - 25 + "px"
"use strict";
const INTENSITY = 10;
let mousex = 0;
let mousey = 0;
let pictures = [
    "000773250004",
    "000773250006",
    "000773250017",
    "000773250020",
    "000773250022",
    "000773250025",
    "000773250029",
    "000773250035",
    "000773250036"
];
for (var i = 0; i < pictures.length; i++) {
    newPictureTile("pictures/" + pictures[i] + ".jpg");
}
function newPictureTile(imgsrc) {
    let pictureTileGridContainer = document.getElementById("pictureTileGridContainer");
    if (!pictureTileGridContainer)
        return;
    //create elements
    let pictureTileContainer = document.createElement("div");
    pictureTileContainer.classList.add("pictureTile", "h-full", "w-full", "overflow-hidden", "aspect-square", "scale-100", "hover:scale-[102%]", "border-[1px]", "border-zinc-800", "rounded-md");
    let pictureTileImage = document.createElement("img");
    pictureTileImage.classList.add("transition-all", "object-cover", "w-full", "h-full");
    pictureTileImage.style.imageRendering = "optimizeQuality";
    pictureTileImage.src = imgsrc;
    //append to page
    pictureTileContainer.appendChild(pictureTileImage);
    pictureTileGridContainer.appendChild(pictureTileContainer);
    //set up events
    pictureTileContainer.addEventListener("mouseenter", () => { mouseOn(pictureTileContainer); });
    pictureTileContainer.addEventListener("mousemove", (e) => { skewEffect(e, pictureTileContainer); });
    pictureTileContainer.addEventListener("mouseleave", () => { mouseOff(pictureTileContainer); });
    pictureTileContainer.addEventListener("mouseup", () => { showBigPicture(imgsrc); });
    mouseOff(pictureTileContainer);
}
function mouseOn(element) {
    element.classList.remove("border-zinc-800");
    element.classList.add("border-zinc-50");
    element.classList.remove("transition-all");
}
function mouseOff(element) {
    element.classList.remove("border-zinc-50");
    element.classList.add("border-zinc-800");
    element.classList.add("transition-all");
    element.style.filter = "brightness(75%)";
    element.style.transform = "scale(100%)";
}
function skewEffect(event, element) {
    let elementBounds = element.getBoundingClientRect();
    let elementCenterX = elementBounds.x + elementBounds.width / 2;
    let elementCenterY = elementBounds.y + elementBounds.height / 2;
    let newSkewX = ((event.clientX - elementCenterX) / elementBounds.width) * -INTENSITY;
    let newSkewY = ((event.clientY - elementCenterY) / elementBounds.height) * INTENSITY;
    element.style.filter = "brightness(" + (100 - (newSkewY * 2 + newSkewX)) + "%)";
    element.style.transform = "scale(102%) rotateY(" + newSkewX + "deg)" + " " + "rotateX(" + newSkewY + "deg)";
}
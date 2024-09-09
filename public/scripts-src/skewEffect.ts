const INTENSITY = 10
let mousex = 0
let mousey = 0

let pictures = [
    "000773250004",
    "000773250006",
    "000773250017",
    "000773250020",
    "000773250022",
    "000773250025",
    "000773250035"
]

for(var i = 0; i < pictures.length; i++) {
    newPictureTile("../pictures/" + pictures[i] + ".jpg")
}

if(document.getElementsByClassName("pictureTile")){
    let pictureTiles = document.getElementsByClassName("pictureTile")
    for(let i = 0; i < pictureTiles.length; i++) {
        let pictureTile = <HTMLElement> pictureTiles[i];

        pictureTile.addEventListener("mouseenter", () => {mouseOn(pictureTile)})
        pictureTile.addEventListener("mousemove", (e) => {skewEffect(e, pictureTile)})
        pictureTile.addEventListener("mouseleave", () => {mouseOff(pictureTile)})

        mouseOff(pictureTile)
    }
}

function mouseOn(element : HTMLElement) {
    element.classList.remove("border-zinc-800")
    element.classList.add("border-zinc-50")
    element.classList.remove("transition-all")
}

function mouseOff(element : HTMLElement) {
    element.classList.remove("border-zinc-50")
    element.classList.add("border-zinc-800")
    element.classList.add("transition-all")
    
    element.style.filter = "brightness(75%)"
    element.style.transform = "scale(100%)"
}

function skewEffect(event : MouseEvent, element : HTMLElement) {
    let elementBounds = element.getBoundingClientRect()
    let elementCenterX = elementBounds.x + elementBounds.width/2
    let elementCenterY = elementBounds.y + elementBounds.height/2

    let newSkewX = ((event.clientX - elementCenterX) / elementBounds.width) * -INTENSITY
    let newSkewY = ((event.clientY - elementCenterY) / elementBounds.height) * INTENSITY

    element.style.filter = "brightness(" + (100 - (newSkewY*2 + newSkewX)) + "%)"
    element.style.transform = "scale(102%) rotateY(" + newSkewX + "deg)" + " " + "rotateX(" + newSkewY + "deg)"
}

function newPictureTile(imgsrc : string) {
    let pictureTileGridContainer = document.getElementById("pictureTileGridContainer")

    if(!pictureTileGridContainer) return

    let pictureTileContainer = document.createElement("div")
    pictureTileContainer.classList.add("pictureTile", "min-h-0", "min-w-0", "overflow-hidden", "aspect-square", "scale-100", "hover:scale-[102%]", "border-[1px]", "border-zinc-800", "rounded-md")
    
    let pictureTileImage = document.createElement("img")
    pictureTileImage.classList.add("transition-all", "object-cover", "w-full", "h-full")
    pictureTileImage.style.imageRendering = "optimizeQuality"
    pictureTileImage.src = imgsrc

    pictureTileContainer.appendChild(pictureTileImage)
    pictureTileGridContainer.appendChild(pictureTileContainer)
}

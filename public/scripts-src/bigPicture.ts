let bigPictureContainer = document.getElementById("bigPictureContainer")
let bigPictureExitButton = <HTMLElement>bigPictureContainer?.getElementsByClassName("close")[0]
bigPictureContainer?.addEventListener("mouseup", () => {hideBigPicture()})
bigPictureExitButton.addEventListener("mouseup", () => {hideBigPicture()})
let bigPictureImage = <HTMLImageElement>document.getElementById("bigPictureImage")

function showBigPicture(imgsrc : string) {
    bigPictureContainer?.classList.remove("hidden")
    bigPictureContainer?.classList.add("flex")

    bigPictureImage.src = imgsrc
}

function hideBigPicture() {
    bigPictureContainer?.classList.remove("flex")
    bigPictureContainer?.classList.add("hidden")

    bigPictureImage.src = ""
}
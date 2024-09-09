"use strict";
let bigPictureContainer = document.getElementById("bigPictureContainer");
let bigPictureExitButton = bigPictureContainer === null || bigPictureContainer === void 0 ? void 0 : bigPictureContainer.getElementsByClassName("close")[0];
bigPictureExitButton.addEventListener("mouseup", () => { hideBigPicture(); });
let bigPictureImage = document.getElementById("bigPictureImage");
function showBigPicture(imgsrc) {
    bigPictureContainer === null || bigPictureContainer === void 0 ? void 0 : bigPictureContainer.classList.remove("hidden");
    bigPictureContainer === null || bigPictureContainer === void 0 ? void 0 : bigPictureContainer.classList.add("flex");
    bigPictureImage.src = imgsrc;
}
function hideBigPicture() {
    bigPictureContainer === null || bigPictureContainer === void 0 ? void 0 : bigPictureContainer.classList.remove("flex");
    bigPictureContainer === null || bigPictureContainer === void 0 ? void 0 : bigPictureContainer.classList.add("hidden");
}

let dropdownButton = document.getElementById("dropdownButton");
let dropdownMenu = document.getElementById("dropdownMenu");

let imageVeiwerOpen = false;

checkRatio();
dropdownButton.addEventListener("click", dropdown);

function checkRatio () {
    if (window.innerWidth / window.innerHeight < 0.9) {
        dropdownMenu.classList.add('m');
        dropdownButton.classList.add('m');
    } else {
        dropdownMenu.classList.remove('m');
        dropdownButton.classList.remove('m');
    }
}

function dropdown () {
    checkRatio();

    dropdownMenu.classList.toggle('active');
    dropdownButton.classList.toggle('active');

    if (dropdownButton.classList.contains('active')) {
        dropdownButton.firstElementChild.src = 'Images/icons/close.svg'
    } else {
        dropdownButton.firstElementChild.src = 'Images/icons/dropdown.svg'
    }
}

function viewImage () {
    if (!imageVeiwerOpen) {
        dropdownButton.removeEventListener("click", dropdown);
        dropdownButton.addEventListener("click", viewImage);
        dropdownButton.firstElementChild.src = 'Images/icons/close.svg'

        document.getElementById("ImageViewer").classList.add('active');

        imageVeiwerOpen = true;
    } else {
        dropdownButton.removeEventListener("click", viewImage);
        dropdownButton.addEventListener("click", dropdown);
        dropdownButton.firstElementChild.src = 'Images/icons/dropdown.svg'

        document.getElementById("ImageViewer").classList.remove('active');

        imageVeiwerOpen = false;
    }

    console.log(imageVeiwerOpen);
}
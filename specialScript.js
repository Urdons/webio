checkRatio();

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

    let dropdownButton = document.getElementById("dropdownButton");
    let dropdownMenu = document.getElementById("dropdownMenu");

    dropdownMenu.classList.toggle('active');
    dropdownButton.classList.toggle('active');

    if (dropdownButton.classList.contains('active')) {
        dropdownButton.firstElementChild.src = 'Images/icons/close.svg'
    } else {
        dropdownButton.firstElementChild.src = 'Images/icons/dropdown.svg'
    }
}

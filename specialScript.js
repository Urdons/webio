let dropdownButton = document.getElementById("dropdownButton");
let dropdownMenu = document.getElementById("dropdownMenu");

function dropdown () {
    if (window.innerWidth / window.innerHeight < 0.9) {
        dropdownMenu.classList.add('m');
        dropdownButton.classList.add('m');
    } else {
        dropdownMenu.classList.remove('m');
        dropdownButton.classList.remove('m');
    }

    dropdownMenu.classList.toggle('active');
    dropdownButton.classList.toggle('active');

    if (dropdownButton.classList.contains('active')) {
        dropdownButton.firstElementChild.src = 'Images/icons/close.svg'
    } else {
        dropdownButton.firstElementChild.src = 'Images/icons/dropdown.svg'
    }
}

let dropdownMenuOpen = false;
let onMobile = false;

let dropdownGroup = document.getElementById("dropdown");
let dropdownButton = document.getElementById("dropdownButton");
let dropdownMenu = document.getElementById("dropdownMenu");

if (document.body.offsetWidth / document.body.offsetHeight < 40) {
	onMobile = true;
	dropdownMenu.style.top = '3.5em';
	dropdownMenu.style.width = document.body.offsetWidth + 'px';
	dropdownMenu.style.left = '-' + dropdownMenu.style.width;
} else {
	onMobile = false;
	dropdownMenu.style.top = '0em';
	dropdownMenu.style.width = '25em';
	dropdownMenu.style.left = '-25em';
}

function dropdown () {
    if (dropdownMenuOpen) {
		if (onMobile) { dropdownButton.style.left = 0}
        dropdownGroup.style.left = '0em';
		
        dropdownButton.firstElementChild.src = 'Images/icons/dropdown.svg';
        dropdownButton.firstElementChild.alt = 'dropdown';

        dropdownMenuOpen = false;
    } else {
		if (onMobile) { dropdownButton.style.left = -(document.body.offsetWidth/2 + dropdownButton.offsetWidth/2) + 'px'}
        dropdownGroup.style.left = dropdownMenu.offsetWidth + 'px';

        dropdownButton.firstElementChild.src = 'Images/icons/close.svg'
        dropdownButton.firstElementChild.alt = 'close';

        dropdownMenuOpen = true;
    }
}

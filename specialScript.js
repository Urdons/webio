let dropdownMenuOpen = false;

function dropdown () {
    let dropdown = document.getElementById("dropdown");
    let dropdownButton= document.getElementById("dropdownButton");
    console.log("hi");
    if (dropdownMenuOpen) {
        dropdown.style.left = '0em';
        dropdownButton.firstElementChild.src = 'Images/icons/dropdown.svg';
        dropdownButton.firstElementChild.alt = 'dropdown';
        dropdownMenuOpen = false;
    } else {
        dropdown.style.left = '20em';
        dropdownButton.firstElementChild.src = 'Images/icons/close.svg'
        dropdownButton.firstElementChild.alt = 'close';
        dropdownMenuOpen = true;
    }
}

function color () { 
	let root = document.querySelector(':root');

	//random hex color
	var letters = '0123456789ABCDEF';
  	var color = '#';
  	for (var i = 0; i < 6; i++) {
    	color += letters[Math.floor(Math.random() * 16)];
  	}

  	//convert hex to rgb
	var r = parseInt(color.substring(1,3),16);
    var g = parseInt(color.substring(3,5),16);
    var b = parseInt(color.substring(5,7),16);
    var brightness = ((r*299)+(g*587)+(b*114))/1000;

    //apply it
	root.style.setProperty('--special-color', color);
	if (brightness > 128) {
		root.style.setProperty('--fg-c', 'black');
		root.style.setProperty('--b-n-fg-c', 'black');
		root.style.setProperty('--s-bg-c', 'black');
		//root.style.setProperty('--s-fg-c', 'white');
		root.style.setProperty('--b-h-bg-c', 'white');
		root.style.setProperty('--b-h-fg-c', 'black');
	} else {
		root.style.setProperty('--fg-c', 'white');
		root.style.setProperty('--b-n-fg-c', 'white');
		root.style.setProperty('--s-bg-c', 'white');
		//root.style.setProperty('--s-fg-c', 'black');
		root.style.setProperty('--b-h-fg-c', 'white');
		root.style.setProperty('--b-h-bg-c', 'black');
	}
}

function theme () {
	let root = document.querySelector(':root');

	if (getComputedStyle(root).getPropertyValue('--s-bg-c') == 'white') {
		root.style.setProperty('--s-bg-c', 'black');
		//root.style.setProperty('--s-fg-c', 'white');
		root.style.setProperty('--b-h-bg-c', 'white');
		root.style.setProperty('--b-h-fg-c', 'black');
	} else {
		root.style.setProperty('--s-bg-c', 'white');
		//root.style.setProperty('--s-fg-c', 'black');
		root.style.setProperty('--b-h-fg-c', 'white');
		root.style.setProperty('--b-h-bg-c', 'black');
	}
}
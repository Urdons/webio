
{ //SETUP
	let group = ["ShoppingCenterLot_25", "RecordPlayer_24", "TheaterSeats_23", "BusParkedOutBusWindow_20", "SchoolFood_20", "FoliageOutABusWindow_20", "DewOnBlueCar_20", "WeezerRecord_14", "Piano_10", "BoatOnWater_06", "LeafCubeMastered_04", "BarnShed_04", "CautionTape_04"]

	const imageSection = document.getElementById("ImageGroupContainer");

	for (let i of group) {
		const imageContainer = document.createElement("DIV");
		imageContainer.className = "ImageContainer";

		const link = document.createElement("a");
		link.href = "Images/pictures/" + i + ".jpg";
		link.target="_blank";

		const image = document.createElement("IMG");
		image.src = "Images/pictures/" + i + ".jpg";

		const name = document.createElement("p");
		const text = document.createTextNode(i);
		name.appendChild(text);

		link.appendChild(image);
		imageContainer.appendChild(link);
		imageContainer.appendChild(name);
		imageSection.appendChild(imageContainer);
	}

	color();
}

//BUTTONS
function emptyPage () { window.location.href = "page.htm" }

function youtube () { window.location.href = "https://www.youtube.com/channel/UCW4Ba6Mu-nRZII6kg2eEGzA" }

function writing () { window.location.href = "writing.htm" }

function special () { window.location.href = "specialpage.htm" }

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
let actualPhoto = 0;
let maxPhotos = 5;
let idName = "carouselPhoto";

function initialCarousel() {
	let stringToActivate = idName + actualPhoto;

	let element = document.getElementById(stringToActivate);

	element.style.opacity = 1;
	element.style.position = "relative";
	element.style.zIndex = 9;
}

function onNext() {
	// primero oculto la que estaba visible
	let stringToActivate = idName + actualPhoto;
	let element = document.getElementById(stringToActivate);

	element.style.opacity = 0;
	element.style.position = "absolute";
	element.style.zIndex = 1;

	//muestro la nueva foto
	actualPhoto = (actualPhoto + 1) % maxPhotos;
	stringToActivate = idName + actualPhoto;

	element = document.getElementById(stringToActivate);

	element.style.opacity = 1;
	element.style.position = "relative";
	element.style.zIndex = 9;
}

function onBack() {
	// primero oculto la que estaba visible
	let stringToActivate = idName + actualPhoto;
	let element = document.getElementById(stringToActivate);

	element.style.opacity = 0;
	element.style.position = "absolute";
	element.style.zIndex = 1;

	//muestro la nueva foto
	if (actualPhoto === 0) {
		actualPhoto = maxPhotos - 1;
	} else {
		actualPhoto = (actualPhoto - 1) % maxPhotos;
	}
	stringToActivate = idName + actualPhoto;

	element = document.getElementById(stringToActivate);

	element.style.opacity = 1;
	element.style.position = "relative";
	element.style.zIndex = 9;
}

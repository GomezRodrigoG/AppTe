function sendForm(e) {
	e.preventDefault();

	if (!validation()) return;

	const name = document.getElementById("nameId").value;
	const email = document.getElementById("emailId").value;
	const edad = document.getElementById("edadId").value;
	console.log(name);

	localStorage.setItem("user-name", name);
	localStorage.setItem("user-email", email);
	localStorage.setItem("user-age", edad);

	// ocultar el form
	const form = document.getElementById("formId");

	form.style.display = "none";

	const backToHome = document.getElementById("backToHome");

	backToHome.style.display = "block";

	const title = document.getElementById("loginTitle");

	title.innerHTML = "Datos registrados con exito!";
}

function validation() {
	const validationName = validarNombre();

	const validationEmail = validarEmail();

	const validationAge = validarEdad();
	return validationName && validationEmail && validationAge;
}

function validarNombre() {
	let name = document.getElementById("nameId");

	if (name.value === "") {
		name.style.border = "2px solid red";
		name.style.boxShadow = "1px 1px 5px red";
		document.getElementById("nameValidation").innerHTML = "Nombre requerido";
		return false;
	}

	if (name.value.length > 30) {
		name.style.border = "2px solid red";
		name.style.boxShadow = "1px 1px 5px red";
		document.getElementById("nameValidation").innerHTML =
			"Maximo 30 caracteres";
		return false;
	}

	name.style.border = "2px solid lightgray";
	name.style.boxShadow = "none";
	document.getElementById("nameValidation").innerHTML = "";

	return true;
}

function validarEmail() {
	const emailRegex = /\S+@\S+\.\S+/;

	let email = document.getElementById("emailId");

	if (email.value === "") {
		email.style.border = "2px solid lightgray";
		email.style.boxShadow = "none";
		document.getElementById("emailValidation").innerHTML = "";
		return true;
	}

	if (!emailRegex.test(email.value)) {
		email.style.border = "2px solid red";
		email.style.boxShadow = "1px 1px 5px red";
		document.getElementById("emailValidation").innerHTML = "Email invalido";
		return false;
	}

	if (email.value.length > 25) {
		email.style.border = "2px solid red";
		email.style.boxShadow = "1px 1px 5px red";
		document.getElementById("emailValidation").innerHTML =
			"Maximo 25 caracteres";
		return false;
	}

	email.style.border = "2px solid lightgray";
	email.style.boxShadow = "none";
	document.getElementById("emailValidation").innerHTML = "";

	return true;
}

function validarEdad() {
	let edad = document.getElementById("edadId");

	if (edad.value === "") {
		edad.style.border = "2px solid red";
		edad.style.boxShadow = "1px 1px 5px red";
		document.getElementById("edadValidation").innerHTML = "Edad requerida";
		return false;
	}

	if (edad.value > 100) {
		edad.style.border = "2px solid red";
		edad.style.boxShadow = "1px 1px 5px red";
		document.getElementById("edadValidation").innerHTML =
			"Supera el maximo de edad";
		return false;
	}

	if (edad.value < 17) {
		edad.style.border = "2px solid red";
		edad.style.boxShadow = "1px 1px 5px red";
		document.getElementById("edadValidation").innerHTML =
			"Debe ser mayor de edad";
		return false;
	}

	edad.style.border = "2px solid lightgray";
	edad.style.boxShadow = "none";
	document.getElementById("edadValidation").innerHTML = "";

	return true;
}

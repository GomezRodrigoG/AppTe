const teaList = [
	"Te Verde",
	"Te Blanco",
	"Te Amarillo",
	"Te Azul",
	"Te con sabor a Frutas Rojas",
	"Te con sabor a Durazno",
	"Te con sabor a Frutilla",
	"Te con sabor a Mandarina, Naranja y Pomelo",
	"Te con sabor a Maracuya",
	"Te con sabor a Canela",
	"Te con sabor a Manzana y Canela",
	"Te con sabor a Limon",
	"Te con Rosa Mosqueta y Manzanilla",
];

const randomChallenge = () => {
	let ol = document.getElementById("olChallenge");

	for (let i = 0; i < 30; i++) {
		let element = document.createElement("li");

		element.innerHTML = teaList[Math.floor(Math.random() * 13)];

		element.setAttribute("id", `li${i}`);

		ol.appendChild(element);
	}
};

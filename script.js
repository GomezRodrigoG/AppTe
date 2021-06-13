const teaList = [
	{
		name: "Te Verde",
		group: ["Sin saborizantes"],
		description:
			"El té verde proviene de la planta Camellia sinensis; es el tipo de té no fermentado. Se lo considera favorecedor de la recuperación muscular después de la actividad corporal y como una ayuda para quemar grasas. En el primer caso, por ser un potente antioxidante que refuerza y regula el sistema inmunológico y, en el segundo, por su poder termogénico; es decir, por generar calor corporal, lo que puede provocar desintegración de grasas al convertirlas en energía.",
		src: "te-verde.jpg",
		sortDescription: "Favorecedor de la recuperación muscular.",
	},
	{
		name: "Te Negro",
		group: ["Sin saborizantes"],
		description:
			"El té negro es un té que se encuentra oxidado en mayor grado que las variedades de té verde, té oolong y té blanco. Las cuatro variedades indicadas se preparan con hojas de Camellia sinensis. El té negro generalmente posee un aroma más fuerte y contiene más cafeína que otros tés con menores niveles de oxidación.",
		src: "té-negro.jpg",
		sortDescription: "Aroma fuerte y más cafeína.",
	},
	{
		name: "Te Blanco",
		group: ["Sin saborizantes"],
		description:
			"El té blanco, original de China, es un té mínimamente procesado. El té blanco viene de delicadas yemas y hojas jóvenes de la planta Camellia sinensis, proveniente de la provincia china de Fujian.​ Estas yemas y hojas se dejan marchitar ligeramente en primer lugar, después se secan a los rayos del sol y son ligeramente procesadas para prevenir la oxidación. Esto preserva las características de su sabor. A pesar de su nombre, el té blanco elaborado es de color amarillo pálido. Su nombre deriva de los finos pelos de color blanco plateado en los brotes sin abrir de la planta del té, que le dan a la planta un aspecto blanquecino.",
		src: "te-blanco.jpg",
		sortDescription: "Té que simplemente se seca sin procesamiento adicional.",
	},
	{
		name: "Te Amarillo",
		group: ["Sin saborizantes"],
		description:
			"El té amarillo suele ser un té especial procesado de forma parecida al té verde, pero con una fase de producción añadida. Tras la fijación, el proceso que permite parar la oxidación del té, se procede a cubrir la hoja con una tela húmeda. Esto da lugar a una oxidación no enzimática, y es lo que realmente caracteriza este té. Después la hoja se seca y se repite el proceso una segunda vez. Este té tiene por lo general una apariencia y olor diferentes a los del té blanco o verde. El aroma se confunde a veces con el del té negro si se cura con otras hierbas, pero su sabor sigue siendo un punto medio entre el té blanco y el verde.",
		src: "te-amarillo.jpg",
		sortDescription: "Te de alta calidad.",
	},
	{
		name: "Te Azul",
		group: ["Sin saborizantes"],
		description:
			"El oolong (Chino simplificado: 乌龙; Chino Tradicional: 烏龍; Pinyin: wūlóng; también conocido como té azul) es un té chino tradicional (Camellia sinensis) que queda entre el verde y el negro en oxidación, lo cual le da un característico tono azulado.1​ Está entre los tipos de té más populares servidos en los restaurantes chinos típicos. En la cultura china del té, los tés oolong semioxidados se agrupan colectivamente como qīngchá (en chino, 清茶; literalmente, «té claro»).2​ El oolong tiene un sabor más parecido al té verde que al negro: no tiene el aroma dulce y rosáceo del té negro ni las fuertes notas herbales que caracterizan al té verde. Suele cocerse de forma que quede fuerte, dejando en el amargor un regusto dulce. Diversas variedades de oolong, incluyendo las producidas en el monte Wuyi del norte de Fujian y en las montañas del centro de Taiwán, están entre los tés chinos más famosos.",
		src: "te-azul.jpg",
		sortDescription:
			"Entre los tipos de té más populares servidos en los restaurantes chinos típicos.",
	},
	{
		name: "Te con sabor a Frutas Rojas",
		group: ["Frutos Rojos"],
		description:
			"El té negro es un té que se encuentra oxidado en mayor grado que las variedades de té verde, té oolong y té blanco. Las cuatro variedades indicadas se preparan con hojas de Camellia sinensis. El té negro generalmente posee un aroma más fuerte y contiene más cafeína que otros tés con menores niveles de oxidación.",
		src: "te-frutos-rojos.jpg",
		sortDescription: "Te negro con sabor a Frutas Rojas.",
	},
	{
		name: "Te con sabor a Durazno",
		group: ["Otras Frutas"],
		description:
			"El té negro es un té que se encuentra oxidado en mayor grado que las variedades de té verde, té oolong y té blanco. Las cuatro variedades indicadas se preparan con hojas de Camellia sinensis. El té negro generalmente posee un aroma más fuerte y contiene más cafeína que otros tés con menores niveles de oxidación.",
		src: "te-durazno.jpg",
		sortDescription: "Te negro con sabor a Durazno.",
	},
	{
		name: "Te con sabor a Frutilla",
		group: ["Frutos Rojos"],
		description:
			"El té negro es un té que se encuentra oxidado en mayor grado que las variedades de té verde, té oolong y té blanco. Las cuatro variedades indicadas se preparan con hojas de Camellia sinensis. El té negro generalmente posee un aroma más fuerte y contiene más cafeína que otros tés con menores niveles de oxidación.",
		src: "te-frutilla.jpg",
		sortDescription: "Te negro con sabor a Frutilla.",
	},
	{
		name: "Te con sabor a Maracuya",
		group: ["Citricos"],
		description:
			"El té negro es un té que se encuentra oxidado en mayor grado que las variedades de té verde, té oolong y té blanco. Las cuatro variedades indicadas se preparan con hojas de Camellia sinensis. El té negro generalmente posee un aroma más fuerte y contiene más cafeína que otros tés con menores niveles de oxidación.",
		src: "te-maracuya.jpg",
		sortDescription: "Te negro con sabor a Maracuya.",
	},
	{
		name: "Te con sabor a Canela",
		group: ["aromatizantes"],
		description:
			"El té negro es un té que se encuentra oxidado en mayor grado que las variedades de té verde, té oolong y té blanco. Las cuatro variedades indicadas se preparan con hojas de Camellia sinensis. El té negro generalmente posee un aroma más fuerte y contiene más cafeína que otros tés con menores niveles de oxidación.",
		src: "te-canela.jpg",
		sortDescription: "Te negro con sabor a Canela.",
	},
	{
		name: "Te con sabor a Manzana y Canela",
		group: ["Sin saborizantes", "Otras Frutas"],
		description:
			"El té negro es un té que se encuentra oxidado en mayor grado que las variedades de té verde, té oolong y té blanco. Las cuatro variedades indicadas se preparan con hojas de Camellia sinensis. El té negro generalmente posee un aroma más fuerte y contiene más cafeína que otros tés con menores niveles de oxidación.",
		src: "te-manzana-con-canela.jpg",
		sortDescription: "Te negro con sabor a Manzana y Canela.",
	},
	{
		name: "Te con sabor a Limon",
		group: ["Citricos"],
		description:
			"El té negro es un té que se encuentra oxidado en mayor grado que las variedades de té verde, té oolong y té blanco. Las cuatro variedades indicadas se preparan con hojas de Camellia sinensis. El té negro generalmente posee un aroma más fuerte y contiene más cafeína que otros tés con menores niveles de oxidación.",
		src: "te-limon.jpg",
		sortDescription: "Te con sabor a Limon.",
	},
	{
		name: "Te con Rosa Mosqueta y Manzanilla",
		group: ["Otras Frutas"],
		description:
			"El té negro es un té que se encuentra oxidado en mayor grado que las variedades de té verde, té oolong y té blanco. Las cuatro variedades indicadas se preparan con hojas de Camellia sinensis. El té negro generalmente posee un aroma más fuerte y contiene más cafeína que otros tés con menores niveles de oxidación.",
		src: "te-rosa-mosqueta-manzanilla.jpg",
		sortDescription: "Te con Rosa Mosqueta y Manzanilla.",
	},
];

function verifiedUserLogin() {
	console.log(teaList[0].name);
	const name = localStorage.getItem("user-name");

	const userNameText = document.getElementById("userNameText");
	const registerButton = document.getElementById("register");

	if (name === null) {
		userNameText.style.display = "none";
		registerButton.style.display = "block";
		return;
	}

	registerButton.style.display = "none";
	userNameText.style.display = "block";
	userNameText.innerHTML = "Hola, " + name.toUpperCase();
}

function seeModal(teName) {
	let actualTea = teaList.find((te) => te.name === teName);
	let modal = document.getElementById("myModal");

	modal.style.display = "block";

	document.getElementById("modalTitle").innerHTML = actualTea.name;
	document.getElementById("modalText").innerHTML = actualTea.description;
}

// Cerrar el modal cuando se hace click fuera de el
window.onclick = function (event) {
	let modal = document.getElementById("myModal");

	if (event.target == modal) {
		modal.style.display = "none";
	}
};

function loadVarietyCards(assetsSrc) {
	const cardsContainer = document.getElementById("cardsContainer");

	teaList.map((tea) => {
		const divCard = document.createElement("div");
		divCard.className = "card";

		const img = document.createElement("img");
		img.src = assetsSrc + tea.src;
		img.alt = tea.name;
		img.className = "cardImg";

		const cardBodyContainer = document.createElement("div");
		cardBodyContainer.className = "cardBodyContainer";

		const divParaLosTextos = document.createElement("div");

		const pTitle = document.createElement("p");
		pTitle.className = "cardTitle";
		pTitle.innerHTML = tea.name;
		divParaLosTextos.appendChild(pTitle);

		const pDescription = document.createElement("p");
		pDescription.className = "cardSubtitle";
		pDescription.innerHTML = tea.sortDescription;
		divParaLosTextos.appendChild(pDescription);

		const button = document.createElement("button");
		button.type = "button";
		button.className = "cardButton";
		button.onclick = () => {
			seeModal(tea.name);
		};
		button.innerHTML = "Ver Detalle";

		cardBodyContainer.appendChild(divParaLosTextos);
		cardBodyContainer.appendChild(button);

		divCard.appendChild(img);
		divCard.appendChild(cardBodyContainer);

		cardsContainer.appendChild(divCard);
	});
}

function selectFunc(assetsSrc) {
	const cardsContainer = document.getElementById("cardsContainer");
	// limpio todos los hijos cargados previamente
	while (cardsContainer.firstChild) {
		cardsContainer.removeChild(cardsContainer.lastChild);
	}

	const select = document.getElementById("selectUserPrefs");

	const filterArray = teaList.filter((tea) => tea.group.includes(select.value));

	filterArray.map((tea) => {
		const divCard = document.createElement("div");
		divCard.className = "card";

		const img = document.createElement("img");
		img.src = assetsSrc + tea.src;
		img.alt = tea.name;
		img.className = "cardImg";

		const cardBodyContainer = document.createElement("div");
		cardBodyContainer.className = "cardBodyContainer";

		const divParaLosTextos = document.createElement("div");

		const pTitle = document.createElement("p");
		pTitle.className = "cardTitle";
		pTitle.innerHTML = tea.name;
		divParaLosTextos.appendChild(pTitle);

		const pDescription = document.createElement("p");
		pDescription.className = "cardSubtitle";
		pDescription.innerHTML = tea.sortDescription;
		divParaLosTextos.appendChild(pDescription);

		const button = document.createElement("button");
		button.type = "button";
		button.className = "cardButton";
		button.onclick = () => {
			seeModal(tea.name);
		};
		button.innerHTML = "Ver Detalle";

		cardBodyContainer.appendChild(divParaLosTextos);
		cardBodyContainer.appendChild(button);

		divCard.appendChild(img);
		divCard.appendChild(cardBodyContainer);

		cardsContainer.appendChild(divCard);
	});
}

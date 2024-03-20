const criptografar = document.getElementById("button__criptografar");
const descritografar = document.getElementById("button__descritografar");
const copy = document.getElementById("button__copiar");
const textoInicial = document.getElementById("textoInput");
const textFinal = document.getElementById("textoFinal");
const munheco = document.getElementById("munheco");
const textInfo = document.getElementById("textoInfo");
const rigth = document.getElementById("right");
	
const remplace = (newvalue) => {
	textFinal.innerHTML = newvalue;
	textFinal.classList.add("ajustar");
	rigth.classList.add("ajuste");
	textoInicial.value = "";
	textoInicial.style.height = "auto";
	textoInicial.placeholder = "Digite seu texto";
	munheco.classList.add("ocultar");
	textInfo.classList.add("ocultar");
	copy.classList.remove("bn_ocultar");
};

const reset = () => {
	textoInicial.value = "";
    textoInicial.style.height = "auto";
	textFinal.innerHTML = "";
	rigth.classList.remove("ajuste");
	textFinal.classList.remove("ajustar");
	munheco.classList.remove("ocultar");
	textFinal.placeholder = "Nenhuma mensagem encontrada";
	textInfo.classList.remove("ocultar");
	copy.classList.add("bn_ocultar");
	textoInicial.focus();
};

let remplazar = [
	["e", "enter"],
	["o", "ober"],
	["i", "imes"],
	["a", "ai"],
	["u", "ufat"]
];

criptografar.addEventListener('click', () => {

	const texto = textoInicial.value.toLowerCase();

	if (texto != "") {
		function encript(newtext) {
			for (let i = 0; i < remplazar.length; i++) {
				if (newtext.includes(remplazar[i][0])) {
					newtext = newtext.replaceAll(remplazar[i][0], remplazar[i][1]);
				};
			};
			return newtext;
		};
		remplace(encript(texto));
	} else {
		alert("Digite um texto que você deseja criptografar ou descriptografar.");
		reset();
	};
});

descritografar.addEventListener('click', () => {

	const texto = textoInicial.value.toLowerCase();

	if (texto != "") {
		function desencript(newtext) {
			for (let i = 0; i < remplazar.length; i++) {
				if (newtext.includes(remplazar[i][1])) {
					newtext = newtext.replaceAll(remplazar[i][1], remplazar[i][0]);
				};
			};
			return newtext;
		};
		remplace(desencript(texto));
	} else {
		alert("Digite seu texto");
		reset();
	};
});

copy.addEventListener("click", () => {
	let texto = textFinal;
	texto.select();
	document.execCommand('copy');
	alert("Texto Copiado");
	reset();
});
textoInicial.addEventListener("change", e => {
	textoInicial.style.height = "auto";
	let scHeight = e.target.scrollHeight;
	textoInicial.style.height = `${scHeight}px`;
});
textoInicial.addEventListener("keyup", e => {
	textoInicial.style.height = "auto";
	let scHeight = e.target.scrollHeight;
	textoInicial.style.height = `${scHeight}px`;
});

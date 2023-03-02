function verificarSeOChutePossuiUmValorValido(chute) {
	const numero = +chute;

	//Condição caso o número falado esteja inválido
	if(chuteEhInvalido(numero)) {
		elementoChute.innerHTML += '<div>Valor inválido</div>'
	}

	if(numeroEhMaiorOuMenorQueOValorPermitido(numero)) {
		elementoChute.innerHTML += `<div>Valor inválido: Fale 
		um número entre ${menorValor} e ${maiorValor}</div>`
	}

	//Condição caso o número falado seja válido
	if(numero === numeroAleatorio) {
		document.body.innerHTML = `
		<h2>Você acertou 🎉</h2>
		<h3>O número secreto era ${numeroAleatorio}</h3>
		`
	}
}

function chuteEhInvalido(numero) {
	return Number.isNaN(numero);
}
function numeroEhMaiorOuMenorQueOValorPermitido(numero) {
	return numero > maiorValor || numero < menorValor;
}
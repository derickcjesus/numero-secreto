function verificarSeOChutePossuiUmValorValido(chute) {
	const numero = +chute;

	if(chuteEhInvalido(numero)) {
		elementoChute.innerHTML += '<div>Valor inválido</div>'
	}

	if(numeroEhMaiorOuMenorQueOValorPermitido(numero)) {
		elementoChute.innerHTML += `<div>Valor inválido: Fale 
		um número entre ${menorValor} e ${maiorValor}</div>`
	}
}

function chuteEhInvalido(numero) {
	return Number.isNaN(numero);
}
function numeroEhMaiorOuMenorQueOValorPermitido(numero) {
	return numero > maiorValor || numero < menorValor;
}
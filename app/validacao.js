function verificarSeOChutePossuiUmValorValido(chute) {
	const numero = +chute;

	if(chuteEhInvalido(numero)) {
		console.log("Valor inválido")
	}

	if(numeroEhMaiorOuMenorQueOValorPermitido(numero)) {
		console.log(`Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}`);
	}
}

function chuteEhInvalido(numero) {
	return Number.isNaN(numero);
}
function numeroEhMaiorOuMenorQueOValorPermitido(numero) {
	return numero > maiorValor || numero < menorValor;
}
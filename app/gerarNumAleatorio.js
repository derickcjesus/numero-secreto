const menorValor = 5;
const maiorValor = 110;

function gerarNumeroAleatorio() {
	return parseInt(Math.random() * maiorValor + 1);
}

const numeroAleatorio = gerarNumeroAleatorio();
console.log(numeroAleatorio);

const elementoMenorValor = document.getElementById("menor-valor");
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById("maior-valor");
elementoMaiorValor.innerHTML = maiorValor;
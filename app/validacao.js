function verificarSeOChutePossuiUmValorValido(chute) {
  const numero = +chute;

  //Condição caso o número falado esteja inválido
  if (chuteEhInvalido(numero)) {
    elementoChute.innerHTML += "<div>Valor inválido</div>";
    return;
  }

  if (numeroEhMaiorOuMenorQueOValorPermitido(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido: Fale 
		um número entre ${menorValor} e ${maiorValor}</div>`;
    return;
  }

  //Condição caso o número falado seja válido
  if (numero === numeroAleatorio) {
    document.body.innerHTML = `
		<h2>Você acertou 🎉</h2>
		<h3>O número secreto era ${numeroAleatorio}</h3>

		<button id="jogar-novamente" class="btn-jogar" onclick="btnJogarNovamente()">
			Jogar novamente
		</button>
		`;

    console.log(`Você acertou o número em ${quantidadeDeNumerosChutados} tentativas`);
  } else if (numero > numeroAleatorio) {
    elementoChute.innerHTML = `
		<div>O número secreto é menor 👇</div>`;
  } else {
    elementoChute.innerHTML = `
		<div>O número secreto é maior ☝</div>`;
  }
}

function chuteEhInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroEhMaiorOuMenorQueOValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}

function btnJogarNovamente() {
  window.location.reload();
}

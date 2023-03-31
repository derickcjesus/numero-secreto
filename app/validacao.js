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

  //Condição quando o número de tentativas de chutes esgotar
  if (numeroDeTentativas == 0) {
    document.body.innerHTML = `<h1>GAMER OVER!</h1>
    <button id="jogar-novamente" class="btn-jogar" onclick="btnJogarNovamente()">
			Jogar novamente
		</button>`;
  }

  //Condição caso o número falado seja válido
  if (numero === numeroAleatorio) {
    document.body.innerHTML = `
		<h2>Você acertou 🎉</h2>
		<h3>O número secreto era ${numeroAleatorio}</h3>

    <h3>Você acertou o número secreto em ${quantidadeDeNumerosChutados} tentativas</h3>

		<button id="jogar-novamente" class="btn-jogar" onclick="btnJogarNovamente()">
			Jogar novamente
		</button>
		`;
  } else if (numero > numeroAleatorio) {
    elementoChute.innerHTML += `
		<div>O número secreto é menor 👇</div>`;
  } else {
    elementoChute.innerHTML += `
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

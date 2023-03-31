const elementoChute = document.getElementById("chute");

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(e) {
  const chute = e.results[0][0].transcript;
  contadorDeChutes();
  removerTentativasChutadas();
  exibeChuteNaTela(chute);
  verificarSeOChutePossuiUmValorValido(chute);
}

function exibeChuteNaTela(chute) {
  elementoChute.innerHTML = `
		<div>Você disse</div>
		<span class="box">${chute}</span>

    <div class="tentativas-chutes">E só tem mais ${numeroDeTentativas} tentativas de chute</div>
	`;
}

recognition.addEventListener("end", () => recognition.start());

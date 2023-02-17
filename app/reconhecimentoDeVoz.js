const elementoChute = document.getElementById("chute");

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
	const chute = e.results[0][0].transcript;
	console.log(chute);
	exibeChuteNaTela(chute);
}

function exibeChuteNaTela(chute) {
	elementoChute.innerHTML = `
		<p>Você disse</p>
		<span class="box">${chute}</span>
	`;
}
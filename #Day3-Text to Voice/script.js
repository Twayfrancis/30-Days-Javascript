function textToAudio() {
    let msg = document.querySelector('.text').value;
    let speech = new SpeechSynthesisUtterance();

    speech.lang = 'en-UK';
    speech.text = msg;
    speech.volume = 200;
    speech.rate = 1;
    speech.pitch= 1;

    speechSynthesis.speak(speech);
}
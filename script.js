
class Pad {
    constructor(name, audioPath) {
        this.name = name;
        this.audioPath = audioPath
    }

    playSound() {
        const aud = new Audio(this.audioPath);
        aud.currentTime = 0;
        return aud.play();
    }
}

const a = new Pad('kick', './sounds/kick.mp3');
const s = new Pad('kick', './sounds/snare.mp3');
const d = new Pad('kick', './sounds/clap.mp3');
const f = new Pad('kick', './sounds/tom-1.mp3');
const h = new Pad('kick', './sounds/tom-2.mp3');
const j = new Pad('kick', './sounds/hihat.mp3');
const k = new Pad('kick', './sounds/openhat.mp3');
const l = new Pad('kick', './sounds/crash.mp3');

const drumKit = { a, s, d, f, h, j, k, l }

const drums = document.querySelectorAll('.pad');

// added ev-listener to .drum class
drums.forEach((item) => {
    item.addEventListener('click', () => {
        playPad(item.innerHTML[0].toLowerCase())
    })
})


//add keylistner to the doc
document.addEventListener('keypress', (evt) => {
    playPad(evt.key.toLowerCase())
})


function playPad(padName) {
    if (padName in drumKit) {
        const activeButton = document.querySelector(`.${padName}`)
        drumKit[padName].playSound();

        //activate .pressed class then deactivate after  .2 sec
        activeButton.classList.add('pressed')
        setTimeout(() => {
            activeButton.classList.remove('pressed')
        }, 200)
    }
}


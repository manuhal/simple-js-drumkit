
class Pad {
    constructor(name, key, audioPath) {
        this.name = name;
        this.key = key;
        this.audioPath = audioPath
    }

    playSound() {
        const aud = new Audio(this.audioPath);
        aud.currentTime = 0;
        return aud.play();
    }

}

const a = new Pad('kick', 'a', './sounds/kick.mp3');
const s = new Pad('kick', 'a', './sounds/snare.mp3');
const d = new Pad('kick', 'a', './sounds/clap.mp3');
const f = new Pad('kick', 'a', './sounds/tom-1.mp3');
const g = new Pad('kick', 'a', './sounds/tom-2.mp3');
const j = new Pad('kick', 'a', './sounds/hihat.mp3');
const k = new Pad('kick', 'a', './sounds/openhat.mp3');
const l = new Pad('kick', 'a', './sounds/crash.mp3');

const drumKit = { a, s, d, f, g, j, k, l }

const drums = document.querySelectorAll('.drum');
// console.log(drums)

// added ev-listener to .drum class
drums.forEach((item) => {
    item.addEventListener('click', () => {
        // console.log('clicked', item.innerHTML[0])
        playPad(item.innerHTML[0].toLowerCase())

    })
})

//add keylistner to the doc
document.addEventListener('keypress', (evt) => {
    // console.log('key pressed, evt=', evt)
    playPad(evt.key.toLowerCase())

})


function playPad(padName) {
    if (padName in drumKit) {
        const activeButton = document.querySelector(`.${padName}`)
        // console.log('activeButton', activeButton);

        // console.log('playing pad ', padName);
        drumKit[padName].playSound();

        activeButton.classList.add('pressed')

        setTimeout(() => {
            activeButton.classList.remove('pressed')
        }, 200)

    }
}


// use for..of, but kenapa ga bisa ya? 
// for (item of document.querySelectorAll('.drum')) {
//     item.addEventListener('click', () => {
//         console.log(item)
//     })
//     // console.log('clicked ', item)
// }


// //use classic for loop
// for (let i = 0; i < drums.length; i++) {
//     drums[i].addEventListener('click', () => {
//         console.log('drums[i]', drums[i])
//     })
// }


// test - adding evt listnr
// document.querySelector('button').addEventListener('click', () => {
//     alert('u clicked me')
// })


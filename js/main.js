function playSound(e) {
    let audio = new Audio(data[e.key].sound);
    audio.play();
}

window.addEventListener('keydown', e => {
    if (data[e.key]) {
        playSound(e);
    }
})

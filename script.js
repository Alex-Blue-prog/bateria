document.querySelector("body").addEventListener("keyup", (event)=> {
    playSound(event.code.toLowerCase());
});

document.querySelector(".composer button").addEventListener("click", () => {
    let song = document.querySelector("#input").value;

    if(song !== "") {
        let songArray = song.split("");
        playComposition(songArray);
    }
});

document.querySelector(`input[type="text"]`).addEventListener("keyup", (e)=> {
    let inputValue = e.currentTarget.value;

    if(![" ", "q", "w", "a", "s", "d", "z", "x", "c"].includes(inputValue[inputValue.length - 1])){
        e.currentTarget.value = inputValue.substring(0, inputValue.length - 1);
    } 
});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(` div[data-key="${sound}"] `);

    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement) {
        keyElement.classList.add("active");

        setTimeout(()=> {
            keyElement.classList.remove("active");
        }, 300);
    }

}

function playComposition(songArray){
    let wait = 0;

    for(let songItem of songArray) {

        setTimeout(()=>{
            playSound("key" + songItem);
        }, wait)

        
        wait += 250;
    }
}

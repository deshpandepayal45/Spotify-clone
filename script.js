console.log("Welcome to spotify");

let masterSong = document.getElementById("masterSong");
let songIndex = 1;
let index = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById("masterPlay");
let gif = document.getElementById("gif");
let myProgessBar = document.getElementById("myProgressBar");
const pic = document.querySelector('.picture');
let songItems = Array.from(document.getElementsByClassName("songItems"));
let songs = [
    { songName: "Ek Zindagi", filePath: "1.mp3", coverPath: "ekzindagi.jpg" },
    { songName: "Let me love you", filePath: "2.mp3", coverPath: "bg2.jpg" },
    { songName: "Aise kyun Maa", filePath: "3.mp3", coverPath: "aisekyun.jpeg" },
    { songName: "Jaan nisar", filePath: "4.mp3", coverPath: "jaannisar.jpg" },
    { songName: "dil ko karar aya", filePath: "5.mp3", coverPath: "dilkokarar.jpg" },
    { songName: "baby", filePath: "6.mp3", coverPath: "bg6.jpg" },
    { songName: "sabki barate aayi", filePath: "7.mp3", coverPath: "bg7.jpg" },
    { songName: "Salam-e-ishq", filePath: "1.mp3", coverPath: "bg7.jpg" }
]
songItems.forEach((element, i) => {

    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songListPlay")[0].innertext = songs[i].songName;
});

//audioElement.play();

//handle play/pause
masterPlay.addEventListener('click', () => {

    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        //let chatContent = className === "material-symbols-outlined" ? `<p></p>` : `<span class="material-symbols-outlined">pause_circle</span>`;
        masterPlay.classList.remove("fa-circle-play");

        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        //let chatContent = className === "material-symbols-outlined" ? `<p></p>` : `<span class="material-symbols-outlined">pause_circle</span>`;
        masterPlay.classList.remove("fa-circle-pause");

        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;

    }
});

//listen to event
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    //console.log(progress);
    myProgessBar.value = progress;
});

myProgessBar.addEventListener('change', () => {
    audioElement.currentTime = myProgessBar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songPlay')).forEach((element) => {

        element.classList.add("fa-circle-play");
        element.classList.remove("fa-circle-pause");

    })
}
Array.from(document.getElementsByClassName('songPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        index = parseInt(e.target.id);
        makeAllPlays();
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src = `${index}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterSong.innerText = songs[index - 1].songName;
        masterPlay.classList.remove("fa-circle-play");

        masterPlay.classList.add("fa-circle-pause");
    })
})
document.getElementById('next').addEventListener('click', () => {
    if (index > 8) {
        index = 1;
    }
    else {
        index += 1;
    }
    audioElement.src = `${index}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterSong.innerText = songs[index - 1].songName;
    masterPlay.classList.remove("fa-circle-play");

    masterPlay.classList.add("fa-circle-pause");
})

document.getElementById('previous').addEventListener('click', () => {
    if (index <= 1) {
        index = 1;
    }
    else {
        index -= 1;
    }
    audioElement.src = `${index}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterSong.innerText = songs[index - 1].songName;
    masterPlay.classList.remove("fa-circle-play");

    masterPlay.classList.add("fa-circle-pause");
})
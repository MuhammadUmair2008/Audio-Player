const music = document.querySelector("audio");
const img =document.querySelector("img");
const play = document.getElementById("play");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let progress = document.getElementById("progress");
let total_duration = document.getElementById("duration");
let current_time = document.getElementById("current_time");

const songs = [
    {
        name:"Hasbi-Rabbi-Hafiz-Bilal-Qadri",
        title:"Hasbi Rabbi Jallallah",
        artist:"By Hafiz Bilal Qadri",
    },

    {
        name:"main-to-ummati-hoon",
        title:"Main To Ummati Hoon",
        artist:"By Junaid Jamshed",
    },

 {
        name:"Mere Nabi Piayare Nabi",
        title:"Mere Nabi Pyare Nabi",
        artist:"By Junaid Jamshed",
    },
    
    {
        name:"qaseeda-burda-sharif",
        title:"Maula Ya Salli Wa Sallim",
        artist:"By Junaid Jamshed",
    },

]

let isPlaying = false;
const playMusic= ()=>{
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play" , "fa-pause");
    img.classList.add("anime");
};

const pauseMusic= ()=>{
    isPlaying = false;
    music.pause();
    play.classList.replace( "fa-pause" , "fa-play");
    img.classList.remove("anime");
};

play.addEventListener("click" , ()=>{
  if(isPlaying){
      pauseMusic();}
      else{
          playMusic();}
  
});

const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "audio/" + songs.name + ".mp3";
    img.src = "images/" + songs.name + ".jfif";
};
songIndex = 0;

const nextSong = () =>{
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex])
    playMusic();
};
const prevSong = () =>{
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex])
    playMusic();
};

music.addEventListener("timeupdate" , (event) =>{
    const {currentTime, duration } = event.srcElement;
    let progress_time = (currentTime / duration) * 100;
    progress.style.width = `${progress_time}%` ;

    let min_duration = Math.floor(duration / 60);
    let sec_duration = Math.floor(duration % 60);

   let tot_duration = `${min_duration}:${sec_duration}`

   if(duration){
   total_duration.textContent = `${tot_duration}`;
}

let min_currentTime = Math.floor(currentTime / 60);
let sec_currentTime = Math.floor(currentTime % 60);

if(sec_currentTime < 10){
    sec_currentTime= `0${sec_currentTime}`
}
let tot_currentTime = `${min_currentTime}:${sec_currentTime}`
current_time.textContent = `${tot_currentTime}`;}
);

progress_div.addEventListener("click" , (event) => {
    const {duration } = music;
    let move_progress = 
    (event.offsetX / event.srcElement.clientWidth) * duration;

    music.currentTime = move_progress;
})

music.addEventListener("ended" , nextSong);

next.addEventListener("click" , nextSong);
prev.addEventListener("click" , prevSong);
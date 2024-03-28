/*Contact form*/
function email() {
    let fname = document.getElementById("firstnamex").value;
    let lname = document.getElementById("lastnamex").value;
    let user_email = document.getElementById("emailaddressx").value;
    let message = document.getElementById("usermessagex").value;
    let answer = "Thank you " + fname + " for your message. We will get back to you at " + user_email + " as soon as possible.";
    document.getElementById("answerx").textContent = answer;
}


/*Dropdown menu*/
document.querySelector('.dropdown').addEventListener('mouseover', function() {
    this.children[1].style.display = 'block';
});

document.querySelector('.dropdown').addEventListener('mouseout', function() {
    this.children[1].style.display = 'none';
});


/*Music Player*/ 


let songs = [
    {src: "/songs/Chris Anich - Dime si no.mp3", title: "Dime si no", artist: "Chris Anich"},
    {src: "/songs/Chris Anich - Bienvenidos a la Tierra.mp3", title: "Bienvenidos a la Tierrra", artist: "Chris Anich"},
    {src: "/songs/DSYS - Escalava de nadie.mp3", title: "Esclava de nadie", artist: "De Sombras y Siluetas"},
    {src: "/songs/DSYS - Ladrandole a la luna.mp3", title: "Bienvenidos a la Tierrra", artist: "De Sombras y Siluetas"},
];

let currentSong = 0;
let audio = new Audio(songs[currentSong].src);
let isPlaying = false;

function playPauseSong() {
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
    isPlaying = !isPlaying;
}

function nextSong() {
    audio.pause();
    currentSong++;
    if (currentSong > songs.length - 1) {
        currentSong = 0;
    }
    audio.src = songs[currentSong].src;
    audio.load();
    audio.play();
}

function prevSong() {
    audio.pause();
    currentSong--;
    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }
    audio.src = songs[currentSong].src;
    audio.load();
    audio.play();
}

let playButton = document.getElementById('play_btn');
if (playButton) {
    playButton.addEventListener('click', playPauseSong);
}

let nextButton = document.getElementById('next_btn');
if (nextButton) {
    nextButton.addEventListener('click', nextSong);
}

let prevButton = document.getElementById('prev_btn');
if (prevButton) {
    prevButton.addEventListener('click', prevSong);
}

let playlistSongs = document.querySelectorAll('.p_song');

playlistSongs.forEach((songElement, index) => {
    songElement.querySelector('button').addEventListener('click', () => {
        playSong(index);
    });
});

function playSong(index) {
    if (currentSong === index) {
        // If the song that is being played is the same one that is already playing,
        // toggle the isPlaying variable and either play or pause the song.
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        isPlaying = !isPlaying;
    } else {
        // If the song that is being played is a different one, stop the current song,
        // change the current song to the selected one, and start playing it.
        audio.pause();
        currentSong = index;
        audio.src = songs[currentSong].src;
        audio.load();
        audio.play();
        isPlaying = true;
    }
}
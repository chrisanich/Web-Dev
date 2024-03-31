/***********************************************************************************************************************/
/***********************************************************************************************************************/
/*Contact form*/

//We create this function to be added to the contact form in the html of
//its respective website. We will take the input from the user and display
//a message with the name and email of the user to confirm the submission.
//Every element is taken from the html file and if you can see, they are the
//same as the id of the elements in the html file of the contact html file (all of them 
//finishes with an x. This helps me to identify the elements and not to get confused).
//The idea of this is to collect data from the user and store it.
//In this case we do not store the data, because there is not use of a database like
//MySQL, but that can be implemented in the future.
//To prove that the data is processed, a message is displayed whe the Submit button is pressed
//(answer variable).
function contact_form() {
    let fname = document.getElementById("firstnamex").value; //This line takes the input with id "firtsnamex" from the user to store it in the variable "fname".
    let lname = document.getElementById("lastnamex").value; //This line takes the input with id "lastnamex" from the user to store it in the variable "lname".
    let user_email = document.getElementById("emailaddressx").value; //This line takes the input with id "emailaddressx" from the user to store it in the variable "user_email".
    let user_phone = document.getElementById("phonex").value; //This line takes the input with id "phonex" from the user to store it in the variable "user_phone".
    let message = document.getElementById("usermessagex").value; //This line takes the input with id "usermessagex" from the user to store it in the variable "message".
                                                                 //The message variable is not used by this time , but it can be sent to an email address in the future.
    
//Now, we need to validate every input to be sure that the user is writing what is expected.
//For this, we can create variables to store the conditions of every input
//For first and last name, we can use the same one, because both of them are words, without numbers (a name with numbers might be strange).
let nameCheck = /^[a-zA-Z]+$/ //Only letters (^ to start the string, + is to say that more than one element is allowed, $ to end the string).
let emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._%+-]+\.[a-zA-Z]{2,}$/; //This is a convention to check emails. The first block allows letters, 
                                                                        //numbers, ., %, +, -. +@ is to ask for an @. the next block is to ask for 
                                                                        //the characters after the @, \. this is to add the dot and finally, the 
                                                                        //last block allows only letters. {2,} means that only more than 2 characters are allowed.
let phoneCheck = /^[0-9]{9,10}$/; //Only numbers from 9 to 10 digits are allowed.

//Now, that we already created this new variables, need to create conditions to validate if the inputs are correct.
//Let's check the name.
if (!nameCheck.test(fname) || !nameCheck.test(lname)) { //In this line, we condition that if by testing "fname" and "lname" variables, the conditions from the
                                                        //nameCheck variable are not met, an error message will be displayed as a pop up window (alert function)
                                                        //and the function will finish with the return statement.
                                                        //The next if conditions are the same, but according to their respective variables, email and phone number 
                                                        //(between 9 and 10 digits according to the assignment requierements).
    alert("Please enter a valid name!");
    return;
}

if (!emailCheck.test(user_email)) {
    alert("Please enter a valid email!");
    return;
}

if (!phoneCheck.test(user_phone)) {
    alert("Please enter a valid phone number between 9 and 10 digits!");
    return;
}

//If the user enters the correct asked infdrmation, a message will be displayed. This will be useful to the user to know that the message was properly sent
//and for the teacher to realise that the information is being processed and can be stored in a database in the future.
let answer = "Thank you " + fname + " for your message. We will get back to you at " + user_email + " as soon as possible.";
document.getElementById("answerx").textContent = answer;
}

/***********************************************************************************************************************/
/***********************************************************************************************************************/

/*Dropdown menu*/

//The first line of this function, creates a mouse over event for both options (artists)
//of the dropdown menu (Artists on the navigation bar). We do not have an artist page,
//that is why you cannot press "Artists".
//It is a good practice to keep the menu organised by having the artists in the same category (Artists).
//Most of my favorite record label websites do the same.
document.querySelector('.dropdown').addEventListener('mouseover', function() {
//This line is to display the 2 options or artists, which of them with their respective own
//link to their website (Chris Anich first, De Sombras y Siluetas secondly).
    this.children[1].style.display = 'block';
});
//This line is to take out the options of the dropdown menu when you take the mouse
//out of it.
document.querySelector('.dropdown').addEventListener('mouseout', function() {
//This line allows us to hide the options whe you take out the mouse from de artists links.
    this.children[1].style.display = 'none';
});

/***********************************************************************************************************************/
/***********************************************************************************************************************/

/*Music Player*/ 

let playlist = document.querySelector('.playlist'); //The "playlist" element from the home html file is assigned to he variable with the same name.

//The open_p function is to open the playlist that is hidden and appears when the button on the top-left corner of the music player is pressed.
//By default, the playlist is not visible because of aesthetic reasons. After pressing it, you can see 4 songs from the 2 included artist in the website. 
function open_p() {
    playlist.classList.toggle('active'); //toggle is a function from the classlist object that will display or hide the elements of the playlist when pressed.
}

//Here we create an array of 4 mp3. songs that are store in the songs folder. 2 songs per artist (2 artists no to overload the site, Chris Anich and
//De Sombras y Siluetas).
//We need to add the source (src), that is the location of each song inside the songs folder of the project, the title and the artist.
//title and artist are string that will appear on the music player when the respective song is playing.
let songs = [
    {src: "/songs/Chris Anich - Dime si no.mp3", title: "Dime si no", artist: "Chris Anich"},
    {src: "/songs/Chris Anich - Bienvenidos a la Tierra.mp3", title: "Bienvenidos a la Tierrra", artist: "Chris Anich"},
    {src: "/songs/DSYS - Esclava de nadie.mp3", title: "Esclava de nadie", artist: "De Sombras y Siluetas"},
    {src: "/songs/DSYS - Ladrandole a la luna.mp3", title: "Landrándole a la luna", artist: "De Sombras y Siluetas"},
];

let currentSong = 0; //we create a current song variable and set it to 0, that is the index of 1st element of the songs array (the 1st song to play).
let audio = new Audio(songs[currentSong].src); //This line creates an audio object using the variable current song to store in the variable audio
                                               //the song that will be played according to the index of the array.
let isPlaying = false; //This variable isPlaying keeps track of the song playing but initially is false because there is no music playing when the page is
                        //open. It is very unpleasant to have music playing when opening a website, you might be listening music from another place by the time.

//The function updateSongInfo allow us to update the name of song and artist on the player with the info of the current song according to the names given in our html file.
function updateSongInfo() {
    let songTitleElement = document.querySelector('.song_title p:nth-child(1)');
    let artistNameElement = document.querySelector('.song_title p:nth-child(2)');

    songTitleElement.textContent = songs[currentSong].title;
    artistNameElement.textContent = songs[currentSong].artist;
}

//This function playPauseSong is to play or stop the song by pressing the play button.
//Unfortunatelly I could not find a button with play and pause in on the same icon in "Boxicons" (I should update it in the future).
function playPauseSong() {
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
    isPlaying = !isPlaying;
    updateSongInfo();
}

//This function is created to make the next song button to go to the next song in the list of our playlist or songs array.
function nextSong() {
    audio.pause();
    currentSong++; //The ++ increment the index and goes to the next song.
    if (currentSong > songs.length - 1) { //If the current song number is bigger than the total of songs in the array, the current song
                                          //goes back to "0", the first index of the array songs (the fist song in the list).
        currentSong = 0;
    }
    audio.src = songs[currentSong].src;
    audio.load();
    audio.play();
    updateSongInfo();
}
//This function is created to make the previous song button to go to the previous song in the list.
//It is possible to realise that this function is similar to the previous one, but instead of increasing the current song index, it decreases it
//by one (--).
function prevSong() {
    console.log('prevSong called');
    audio.pause();
    currentSong--;
    console.log('currentSong after decrement:', currentSong); // Add this line
    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }
    console.log('currentSong after adjustment:', currentSong); // Add this line
    audio.src = songs[currentSong].src;
    audio.load();
    audio.play();
    updateSongInfo();
}

//This function is to display the volume slide from 0 to 100% on the control panel.
//The audio.volume is set to value, that is the value initialised in our range input in the home html file.
//In JavaScript the volume value is absolute, 0 is mute and 1 is the maximum. If we  want to have intermediate levels from 0 to 100%,
//we multiply the value by 100.
function adjustVolume(value) {
    audio.volume = value;
    document.getElementById('volumeValue').innerText = Math.round(value * 100) + '%';
}

//This line adjust the volume of the music. It starts in 85% as establish in the home html file (value="0.85").
//It is a descent volume, not to low and not to high. The user can change it.
adjustVolume(document.getElementById('volumeSlider').value);

//1.- This line select the play button from the html file (homepage)
let playButton = document.getElementById('play_btn');
if (playButton) { //This if statement is to add a click event to the play button by calling the function playPauseSong.
    playButton.addEventListener('click', playPauseSong);
}

//2.- This line select the next button from the html file (homepage)
let nextButton = document.getElementById('next_btn');
if (nextButton) { //This if statement is to add a click event to the next button by calling the function nextSong.
    nextButton.addEventListener('click', nextSong);
}

//3.- This line select the previous button from the html file (homepage)
let prevButton = document.getElementById('prev_btn');
if (prevButton) { //This if statement is to add a click event to the previous button by calling the function prevSong.
    console.log('prevButton found');
    prevButton.addEventListener('click', prevSong);
} else {
    console.log('prevButton not found');
}

let playlistSongs = document.querySelectorAll('.p_song'); //This line selects the songs of the playlist from our home html file (where the music player is).

playlistSongs.forEach((songElement, index) => {
    songElement.querySelector('button').addEventListener('click', () => {
        playSong(index);
    });
});

//This function plays the song in the current index of the songs array. It toggles between playing and pausing the song.
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
    updateSongInfo();
}

//This last line updates the information displayed on the music player when the page is loaded (To index 0,
//the first son in the playlist).
updateSongInfo();


/*It is important to highlight that due to the complexity of the music player JS, the information and teaching was
obtain from different sources, mainly from Youtube videos*/
// Get references to the DOM elements
const ExploreButton = document.getElementById('Banner-Button');
const hamburgerMenu = document.querySelector('.hamburger');
const navMenu = document.querySelectorAll('.nav-menu');
const navItems = document.querySelectorAll('.nav-items a');
var backgroundMusic = document.getElementById('background-music');
var musicControlButton = document.getElementById("music-control");

// Add an event listener to the ExploreButton, if it exists
if (ExploreButton) {
  ExploreButton.addEventListener('click', function() {
    window.location.href = '../exercise/explore_page.html';
  });
} else{
  console.log("Explore button not found");
}

// Add an event listener to the hamburgerMenu, if it exists
if (hamburgerMenu === null) {
  console.log("Hamburger menu is null");
} else {
  hamburgerMenu.addEventListener('click', () => {
    console.log("hamburger clicked");
    hamburgerMenu.classList.toggle('active');
    navMenu.forEach(menu => {
      menu.classList.toggle('active');
    });
  });
}

//Background music
if (localStorage.getItem("musicPlaying") === "true") {
  backgroundMusic.volume = 0.2; // Set volume
  backgroundMusic.currentTime = localStorage.getItem("musicCurrentTime") || 0;
  backgroundMusic.play();
  musicControlButton.innerText = "Pause Music";
}

musicControlButton.addEventListener("click", function() {
// Set the volume to 50% when music starts
backgroundMusic.volume = 0.2;

// Toggle play/pause functionality
if (backgroundMusic.paused) {
  backgroundMusic.play(); // Play the music if paused
  musicControlButton.innerText = "Pause Music";
  localStorage.setItem("musicPlaying", "true");
} else {
  backgroundMusic.pause(); // Pause the music if playing
  musicControlButton.innerText = "Play Music";
  localStorage.setItem("musicPlaying", "false");
}
// Save the current time when music is played or paused
localStorage.setItem("musicCurrentTime", backgroundMusic.currentTime);
});

// Save current time when the page unloads
window.addEventListener("beforeunload", function() {
  localStorage.setItem("musicCurrentTime", backgroundMusic.currentTime);
});

/* script.js */
const card = document.querySelector('.card');
const message = document.getElementById('message');
const poem = document.getElementById('poem');
const showLoveBtn = document.getElementById('showLove');
const playMusicBtn = document.getElementById('playMusic');
const makeSparkleBtn = document.getElementById('makeSparkle');
const loveMeterFill = document.querySelector('.love-meter-fill');
const backgroundMusic = document.getElementById('backgroundMusic');
let isOpened = false;

// Ensure audio can play on user interaction
function enableAudio() {
  backgroundMusic.play().catch(() => {
    console.log("User interaction required to play audio.");
  });
  document.removeEventListener('click', enableAudio);
}
document.addEventListener('click', enableAudio);

// Initialize love meter
setTimeout(() => {
  loveMeterFill.style.width = '100%';
}, 1000);

card.addEventListener('click', () => {
  if (!isOpened) {
    card.classList.add('opened');
    isOpened = true;
    setTimeout(() => {
      poem.style.opacity = '1';
    }, 1000);
  }
});

showLoveBtn.addEventListener('click', () => {
  message.classList.add('visible');
  createHearts();
});

playMusicBtn.addEventListener('click', () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    playMusicBtn.textContent = 'Pause Music';
  } else {
    backgroundMusic.pause();
    playMusicBtn.textContent = 'Play Music';
  }
});

function createHearts() {
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.innerHTML = '❤️';
      heart.style.position = 'fixed';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
      heart.style.animation = `float ${Math.random() * 3 + 2}s linear`;
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 4000);
    }, i * 100);
  }
}

makeSparkleBtn.addEventListener('click', createSparkles);

function createSparkles() {
  for (let i = 0; i < 30; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = Math.random() * 100 + 'vh';
    sparkle.style.animation = `sparkle ${Math.random() * 2 + 1}s linear`;
    document.body.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 2000);
  }
}

// Create initial sparkles
setInterval(createSparkles, 3000);

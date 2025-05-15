const container = document.getElementById('container');
let colors = ['#9d00ff', '#b742ff', '#ca73ff', '#d697fc', '#e6bdff'];
const SQUARES = 1000;

const purpleBgColor = '#ff99fd';
const purpleBgGradient = `
  radial-gradient(at 81% 39%, hsla(327, 79%, 79%, 1) 0px, transparent 50%),
  radial-gradient(at 11% 72%, rgb(119, 56, 236) 0px, transparent 50%),
  radial-gradient(at 23% 20%, rgb(215, 65, 245) 0px, transparent 50%)
`;


const blueBgColor = '#99ccff';
const blueBgGradient = `
  radial-gradient(at 80% 40%, hsla(210, 100%, 70%, 1) 0px, transparent 50%),
  radial-gradient(at 15% 65%, hsla(220, 90%, 60%, 1) 0px, transparent 50%),
  radial-gradient(at 25% 25%, hsla(200, 100%, 75%, 1) 0px, transparent 50%)
`;


window.addEventListener('load', () => {
  const loader = document.getElementById('loading-wave');
  const mainContent = document.getElementById('main-content');

  setTimeout(() => {
    loader.style.opacity = '0';
    loader.style.transition = 'opacity 0.5s ease';

    mainContent.style.display = 'block';
    setTimeout(() => {
      mainContent.style.opacity = '1';
    }, 50);

    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }, 1500);
});

const checkbox = document.querySelector('.input__check');
const personalCard = document.querySelector('.personal-card');
const profilePic = document.querySelector('.profile-pic');
const slider = document.querySelector('.slider'); // Add this to control slider gradient

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    colors = ['#006eff', '#339dff', '#66baff', '#99d4ff', '#ccecff'];

    if (personalCard) {
      personalCard.style.borderColor = '#006eff';
      personalCard.style.boxShadow = '0 0 20px rgba(0, 110, 255, 0.4)'; // blue glow
    }
    if (profilePic) {
      profilePic.style.borderColor = '#006eff';
      profilePic.style.boxShadow = '0 0 12px rgba(0, 110, 255, 0.5)'; // blue glow
    }

    // Change switch slider gradient to blue
    if (slider) {
      slider.style.setProperty('--slider-bg-color', blueBgColor);
      slider.style.setProperty('--slider-bg-gradient', blueBgGradient);
    }
  } else {
    colors = ['#9d00ff', '#b742ff', '#ca73ff', '#d697fc', '#e6bdff'];

    if (personalCard) {
      personalCard.style.borderColor = '#9d00ff';
      personalCard.style.boxShadow = '0 0 20px rgba(157, 0, 255, 0.4)'; // purple glow
    }
    if (profilePic) {
      profilePic.style.borderColor = '#9d00ff';
      profilePic.style.boxShadow = '0 0 12px rgba(157, 0, 255, 0.5)'; // purple glow
    }

    // Change switch slider gradient to purple
    if (slider) {
      slider.style.setProperty('--slider-bg-color', purpleBgColor);
      slider.style.setProperty('--slider-bg-gradient', purpleBgGradient);
    }
  }
});


const squares = [];

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  container.appendChild(square);
  squares.push(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

// NEW: Track mouse position globally and light up squares
document.addEventListener('mousemove', (e) => {
  const rect = container.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;

  const columns = Math.floor(Math.sqrt(SQUARES * containerWidth / containerHeight));
  const rows = Math.ceil(SQUARES / columns);
  const squareWidth = containerWidth / columns;
  const squareHeight = containerHeight / rows;

  const col = Math.floor(x / squareWidth);
  const row = Math.floor(y / squareHeight);
  const index = row * columns + col;

  if (squares[index]) {
    setColor(squares[index]);
    setTimeout(() => removeColor(squares[index]), 500); // auto fade after 0.5s
  }
});

// function randomColorCode() {
//   const rgb = new Array(3).fill(null);
//   return `rgb(${rgb.map(item => Math.floor(Math.random() * 256))})`;
// }
function randomNumber() {
  return Math.floor(Math.random() * 256);
}
function randomColorCode() {
  return `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
}

const colorCodeEl = document.querySelector('.color-code');
const boxes = document.querySelectorAll('.box');
const scoreEl = document.querySelector('.score');

let correctAnswer;
let score = 0;
scoreEl.textContent = score;
function newStage () {
  const colorCodes = [randomColorCode(), randomColorCode(), randomColorCode()];

  boxes.forEach((el, index) => {
    el.style.backgroundColor = colorCodes[index];
  });
  
  correctAnswer = Math.floor(Math.random() * 3);
  colorCodeEl.textContent = colorCodes[correctAnswer];
  return correctAnswer;
}

boxes.forEach((el, index) => {
  el.addEventListener('click', () => {
    if(index === correctAnswer) {
      alert('맞았다');
      document.querySelector('.modal.right').classList.add('show');
      score++;
    } else {
      alert('틀렸다');
      document.querySelector('.modal.wrong').classList.add('show');
      score = 0;
    }
    scoreEl.textContent = score;
    el.classList.add('selected');
    newStage();
  })
});

document.querySelector('.modal.right .close').addEventListener('click', () => {
  document.querySelector('.modal.right').classList.remove('show');
  document.querySelector('.box.selected').classList.remove('.selected');
});
document.querySelector('.modal.wrong .close').addEventListener('click', () => {
  document.querySelector('.modal.wrong').classList.remove('show');
  document.querySelector('.box.selected').classList.remove('.selected');
});

newStage();

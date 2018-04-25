// 컬러 코드 구하기
function randomNumber() {
  return Math.floor(Math.random() * 256);
}
function randomColorCode() {
  return `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
}

// 필요한 엘리먼트 객체들
const colorCodeEl = document.querySelector('.color-code');
const boxes = document.querySelectorAll('.box');
const scoreEl = document.querySelector('.score');

// 정답 rgb 값
let correctAnswer;
// 점수
let score = 0;
scoreEl.textContent = score;

// 새로운 스테이지 함수: 정답 rgb랑 박스 컬러 갱신
function newStage () {
  const colorCodes = [randomColorCode(), randomColorCode(), randomColorCode()];

  boxes.forEach((el, index) => {
    el.style.backgroundColor = colorCodes[index];
  });
  
  correctAnswer = Math.floor(Math.random() * 3);
  colorCodeEl.textContent = colorCodes[correctAnswer];
  return correctAnswer;
}

// 컬러 박스 클릭시 이벤트: 컬러 박스 large 클래스 추가, 모달 열기, 스코어 갱신
boxes.forEach((el, index) => {
  el.addEventListener('click', () => {
    el.classList.add('large');
    if(index === correctAnswer) {
      document.querySelector('.modal.right').classList.add('show');
      score++;
    } else {
      document.querySelector('.modal.wrong').classList.add('show');
      document.querySelector('.modal.wrong .score').textContent = score;
      score = 0;
    }
    scoreEl.textContent = score;
  })
});

// document.querySelector('.modal.wrong').addEventListener('click', (e) => {
//   console.log(e.target, e.currentTarget);
//   document.querySelector('.modal.wrong').classList.remove('show');
//   boxes.forEach(el => {
//     el.classList.remove('large');
//   })
//   newStage();
// });

// 모달 박스 닫을 때 이벤트: 모달 닫기, 컬러 박스 large 해제
document.querySelectorAll('.modal').forEach(el => {
  el.addEventListener('click', (e) => {
    if(e.target === el.querySelector('.close')) {
      e.currentTarget.classList.remove('show');
      boxes.forEach(el => {
        el.classList.remove('large');
      });
      newStage();
    }
  });
});

newStage();

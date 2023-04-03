let timeSecond = 45;
const timeH = document.querySelector('h1');

displayTime(timeSecond);

const countDown = setInterval(() => {
  timeSecond--;
  displayTime(timeSecond);
  if (timeSecond == 0 || timeSecond < 1) {
    endCount();
    clearInterval(countDown);

    // modal pop up after timeout
    const modal = document.querySelector('.modal');
    const playAgainBtn = document.querySelector('.play-again');
    const playLevelBtn = document.querySelector('.play-level');

    playAgainBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      location.reload();
    });

    playLevelBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      window.location.href = 'index.html';
    });

    modal.style.display = 'block';
  }
}, 1000);

function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timeH.innerHTML = `
  ${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}
  `;
}

function endCount() {
  timeH.innerHTML = 'Game Over!';
}

const time = document.querySelector('p');
let isFullFormat = true;

let currentTime = function () {
  let now = new Date();
  let hours = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
  let minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
  let seconds = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();
  return isFullFormat ? `${hours} : ${minutes} : ${seconds}` : `${hours} : ${minutes}`;
};

time.addEventListener('click', function () {
  isFullFormat = !isFullFormat;
});

setInterval(() => {
  time.innerText = currentTime();
}, 250);

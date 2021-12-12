class Clock {
  constructor(el) {
    this.el = el;
    this.el.addEventListener('click', () => this.toggleFormat());
    this.isFullFormat = true;
  }

  render() {
    this.el.innerHTML = this.getTime();
  }

  getTime() {
    const now = new Date();
    const hours = this.correctTime(now.getHours());
    const minutes = this.correctTime(now.getMinutes());
    const seconds = this.correctTime(now.getSeconds());
    return this.isFullFormat ? `${hours} : ${minutes} : ${seconds}` : `${hours} : ${minutes}`;
  }

  toggleFormat() {
    this.isFullFormat = !this.isFullFormat;
  }

  correctTime(value) {
    return value < 10 ? '0' + value : value;
  }
}

let time = document.getElementById('clock');
let clock = new Clock(time);

clock.render();
setInterval(() => clock.render(), 250);

// вторые часы
// let time1 = document.getElementById('clock1');
// let clock1 = new Clock(time1);
// setInterval(() => clock1.render(), 250);

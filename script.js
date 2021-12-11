class Clock {
  constructor(el) {
    this.el = el;
    this.el.addEventListener('click', () => this.toggleFormat());
    this.isFullFormat = true;
  }

  render() {
    this.now = new Date();
    this.hours = this.correctTime(this.now.getHours());
    this.minutes = this.correctTime(this.now.getMinutes());
    this.seconds = this.correctTime(this.now.getSeconds());
    this.el.innerHTML = this.isFullFormat
      ? `${this.hours} : ${this.minutes} : ${this.seconds}`
      : `${this.hours} : ${this.minutes}`;
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

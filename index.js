class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.id = null;
    this.element = document.querySelector(selector);
    this.targetDate = targetDate;
    this.startTimer();  
  }

  refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
  };
  
  calc = () => {
    let time = this.targetDate - Date.now();
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    this.refs.secs.textContent = secs < 10 ? `0${secs}` : secs;    
    this.refs.mins.textContent = mins <10 ? `0${mins}`: mins;
    this.refs.hours.textContent = hours <10 ? `0${hours}`: hours;
    this.refs.days.textContent = days < 10 ? `0${days}` : days;
    return { days, hours, mins, secs };
  }

  startTimer() {
    this.id = setInterval(this.calc, 1000);
  }
}

const newTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Sep 01, 2021 00:00:00'),
});


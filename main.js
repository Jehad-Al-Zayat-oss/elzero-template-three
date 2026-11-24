let days = document.querySelector("#days");
let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let dateEvent = new Date("2026 12 31 11:59:59");
let counterDate = setInterval(() => {
  let dateNow = new Date();
  let dateDiff = dateEvent - dateNow;
  let day = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hour = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minute = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let second = Math.floor((dateDiff % (1000 * 60)) / 1000);
  days.textContent = day < 100 ? `0${day}` : day;
  hours.textContent = hour < 10 ? `0${hour}` : hour;
  minutes.textContent = minute < 10 ? `0${minute}` : minute;
  seconds.textContent = second < 10 ? `0${second}` : second;
});
///////////////////////////////////////
let sectionOurSkills = document.querySelector("#our-skills");
let spans = document.querySelectorAll(".progress");
let counterProgress = document.querySelectorAll(".counter-progress");
let counterAnimation = false;
let counterStatsAnimation = false;
let sectionStats = document.querySelector("#stats");
let statsNumSpan = document.querySelectorAll(".stats-num");
window.onscroll = () => {
  if (window.scrollY >= sectionOurSkills.offsetTop - 200 && !counterAnimation) {
    let duration = 1000;
    spans.forEach((ele) => {
      let start = null;
      let target = parseInt(ele.dataset.width);
      function widthProgress(timeCurr) {
        if (!start) start = timeCurr;
        let elapsedTime = timeCurr - start;
        let progress = Math.min(elapsedTime / duration, 1);
        let width = Math.floor(progress * target);
        ele.style.width = `${width}%`;
        if (progress < 1) {
          requestAnimationFrame(widthProgress);
        } else {
          ele.style.width = `${width}%`;
        }
      }
      requestAnimationFrame(widthProgress);
    });
    counterAnimation = true;
    ////////////////////
    counterProgress.forEach((ele) => {
      let start = null;
      let target = parseInt(ele.dataset.counter);
      function counterProgress(currTime) {
        if (!start) start = currTime;
        let elapsed = currTime - start;
        let progress = Math.min(elapsed / duration, 1);
        let currNum = Math.floor(progress * target);
        ele.textContent = `${currNum}%`;
        if (progress < 1) {
          requestAnimationFrame(counterProgress);
        } else {
          ele.textContent = `${currNum}%`;
        }
      }
      requestAnimationFrame(counterProgress);
    });
  }
  if (
    window.scrollY >= sectionStats.offsetTop - 100 &&
    !counterStatsAnimation
  ) {
    let duration = 1500;

    statsNumSpan.forEach((ele) => {
      let start = null;
      let target = parseInt(ele.dataset.num, 10) || 0;
      requestAnimationFrame(counterUpdate);
      function counterUpdate(currTime) {
        if (!start) start = currTime;
        let elapsedTime = currTime - start;
        let progress = Math.min(elapsedTime / duration, 1);
        let currNum = Math.floor(progress * target);
        ele.textContent = `${currNum}`;
        if (progress < 1) {
          requestAnimationFrame(counterUpdate);
        } else {
          ele.textContent = `${currNum}`;
        }
      }
    });
    counterStatsAnimation = true;
  }
};

// Optional: Scroll animation for stats counters
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.yojana-right h3');
  counters.forEach(counter => {
    const target = +counter.innerText.replace('+','');
    counter.innerText = '0';
    let count = 0;
    const step = target / 100;
    const interval = setInterval(() => {
      count += step;
      if (count >= target) {
        counter.innerText = counter.innerText.includes('+') ? target + '+' : target;
        clearInterval(interval);
      } else {
        counter.innerText = Math.floor(count);
      }
    }, 20);
  });
});

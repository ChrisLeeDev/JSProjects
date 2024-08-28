// set initial value for our count variable
let timer;
const startTime = 30;
// select the value buttons
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')
// console.log(btns)
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (timer) {
            clearInterval(timer); // Clear any existing interval
        }

        let timeLeft = startTime;

        timer = setInterval(() => {
            value.textContent = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(timer);
                value.textContent = 'Time\'s up!';
            } else {
                timeLeft -= 1;
            }
        }, 1000);
    });
});


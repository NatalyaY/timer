const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');


const createTimerAnimator = () => {
    return function getTime (seconds) {

        if (seconds <= 0) {
            timerEl.textContent = '00:00:00';
            return;
        }

        const hours = ('0' + Math.floor(seconds / (60*60))).slice(-2);
        const minutes = ('0' + Math.floor((seconds % (60 * 60)) / 60)).slice(-2);
        const secs = ('0' + Math.floor((seconds % (60 * 60)) % 60)).slice(-2);

        timerEl.textContent = `${hours}:${minutes}:${secs}`;

        const time = new Date().getTime();

        setTimeout(() => {
            const timeNow = new Date().getTime();
            getTime(seconds - (timeNow - time)/1000);
        }, 1000);
    };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
    inputEl.value = inputEl.value.replaceAll(/\D+/g, '');
});

buttonEl.addEventListener('click', () => {
    const seconds = Number(inputEl.value);

    animateTimer(seconds);

    inputEl.value = '';
});

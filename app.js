// Timing Events Exercise
// 1. 
setTimeout(() => {
    const div1 = document.querySelector(`#first`);
    const p1 = document.createElement(`p`);
    p1.innerText = `Hi`;
    div1.append(p1);
}, 1000);

// 2. 
setTimeout(() => {
    const div2 = document.querySelector(`#timeout-nesting`);
    const p2 = document.createElement(`p`);
    p2.innerText = `One`;
    div2.append(p2);
    setTimeout(() => {
        const p3 = document.createElement(`p`);
        p3.innerText = `Two`;
        div2.append(p3);
    }, 1000);      
}, 2000);

// 3a.
let second = 1;
const time = setInterval(() => {
    console.log(`${second}`);
    second++;
}, 1000);

// 3b.
const stop = document.querySelector(`button`);
stop.addEventListener(`click`, () => {
    clearInterval(time);
});


// BONUS…
// 4. Using setInterval, display a countdown clock as a p element/tag inside the div with the id of "countdown". Have the countdown clock start at 2 minutes and count down. The countdown clock should display in the following format (Example: 2:00 to start and 0:00 at end). ALSO, when the countdown timer hits zero have it display a message saying… "TIME IS UP" instead of the clock (AKA 0:00).

const div3 = document.querySelector(`#countdown`);
const p3 = document.createElement(`p`);
let num = 120;
const count = setInterval(() => {
    if (num > 0){
        let minutes = Math.floor(num/60);
        let seconds = num - minutes * 60;
        p3.innerText = `${minutes}:${seconds}`;
        div3.append(p3);
    } else {
        clearInterval(count);
        p3.innerText =`TIME IS UP`;
        div3.append(p3);
    }
    num--;
}, 1000);


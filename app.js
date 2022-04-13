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
const time1 = setInterval(() => {
    // console.log(`${second}`);
    console.log(second);
    // This is better
    second++;
}, 1000);

// 3b.
const stop = document.querySelector(`button`);
stop.addEventListener(`click`, () => {
    clearInterval(time1);
});


// BONUS…
// 4. 

/*
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
*/

/*
const startMin = 2;
let time = startMin*60;
let countDownEvent = document.querySelector(`#countdown`);
let timer = setInterval( updateCountdown, 1000); 
function updateCountdown(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;
    seconds = seconds > 10 ? `` + seconds:seconds;
    countDownEvent.innerHTML = `${minutes}:${seconds}`;
    time--;
    if (time === 0){
        countDownEvernt.innerHTML = `TIME IS UP!`;
        clearInterval(timer);
    }
}
*/


const div3 = document.querySelector(`#countdown`);
const p3 = document.createElement(`p`);
div3.append(p3);

const staringMinutes = 2;
let time = staringMinutes * 60;

const inter = setInterval(updateCountdown, 1000);

function updateCountdown () {
    let minutes = Math.floor(time/ 60);
    let seconds = time % 60;
    if (seconds > 0 && minutes > 0) {
        p3.innerText = `Time left ${minutes}:${seconds}`;
    }
    else{
        p3.innerText = `TIME IS UP!`;
    }
    time --;
}
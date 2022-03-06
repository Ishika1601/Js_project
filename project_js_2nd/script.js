'use strict';


function setTip(amt, val, head) {
    const final = (amt * val) / 100;
    const amount = final / head;
    document.querySelector('.tip').textContent = amount;
}
function modalOpen(){
    div.classList.remove('hidden');
    lower.classList.remove('hidden')
}


function setMessage() {
    const amt = document.querySelector('#paidAmount').value;
    const head = document.querySelector('#billAmunt').value;
    const tip = document.querySelector('#likedService');
    if (tip.value == 10) {
        setTip(amt, tip.value, head);
    }
    else if (tip.value == 0) {
        document.querySelector('.tip').textContent = 0;
    }
    else if (tip.value == 20) {
        setTip(amt, tip.value, head);
    }
    else {
        setTip(amt, tip.value, head);
    }
}
document.querySelector('#submit').addEventListener('click', () => {
    setMessage();
    modalOpen();
})
const div=document.querySelector('.hidden');
const lower = document.querySelector('.lower');


import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const delayForm = document.querySelector('input[name="delay"]');
const radioBtn = document.querySelectorAll('input[name="state"]');
const submitBtn = document.querySelector('button[type="submit"]');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const delay = Number(delayForm.value);
     const choice = Array.from(radioBtn).find(btn => btn.checked).value;
    if (delay && choice) {
        createPromise(delay, choice)
            .then(result => {
                form.reset();
                iziToast.success({
                    message: `✅ Fulfilled promise in ${delay}ms`,
                    position: "topRight",
});
     
            })
            .catch(err => {
                iziToast.error(
                {
                    message: `❌ Rejected promise in ${delay}ms`,
                    position: "topRight",
            });
            }
)  
}
});

function createPromise(delay, choice) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (choice === 'fulfilled') {
                resolve();      
            } else if (choice === 'rejected') {
                reject();
            }
        }, delay);
 
    });     
}
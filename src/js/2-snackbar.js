import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const delayForm = document.querySelector('input[name="delay"]');
const radioBtn = document.querySelectorAll('input[name="state"]');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const delay = Number(delayForm.value);
     const selectedState = form.elements.state.value;

        createPromise(delay, selectedState)
            .then(result => {
                form.reset();
                iziToast.success({
                    message: `✅ Fulfilled promise in ${delay}ms`,
                    position: "topRight",
},delay);
     
            })
            .catch(err => {
                iziToast.error(
                {
                    message: `❌ Rejected promise in ${delay}ms`,
                    position: "topRight",
            },delay);
            }
)  

});

function createPromise(delay, selectedState) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (selectedState === 'fulfilled') {
                resolve();      
            } else if (selectedState === 'rejected') {
                reject();
            }
        }, delay);
 
    });     
}
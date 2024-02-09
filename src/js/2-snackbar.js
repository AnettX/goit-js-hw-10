import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const delayForm = document.querySelector('input[name="delay"]');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const delay = Number(delayForm.value);
    const selectedState = form.elements.state.value;

    createPromise(delay, selectedState)
        .then(result => {
            iziToast.success({
                message: `✅ Fulfilled promise in ${delay}ms`,
                position: "topRight",
            });
        })
        .catch(err => {
            iziToast.error({
                message: `❌ Rejected promise in ${delay}ms`,
                position: "topRight",
            });
        })
        .finally(() => {
            form.reset();
        });

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

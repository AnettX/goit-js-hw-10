import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const delayForm = document.querySelector('input[name="delay"]');
const radioBtn = document.querySelectorAll('input[name="state"]');
const submitBtn = document.querySelector('button[type="submit"]');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const delay = delayForm.value;
     const choice = Array.from(radioBtn).find(btn => btn.checked).value;
    if (delay && choice) {
        createPromise(delay, choice)
            .then(result => {
                console.log(result);
                form.reset();
            })
            .catch(err => console.log(err));    
}
});

function createPromise(delay, choice) {
    return new Promise((resolve, reject) => {
        console.log(choice);
        setTimeout(() => {
            if (choice === 'fulfilled') {
                resolve (`✅ Fulfilled promise in ${delay}ms`);
                iziToast.success({
                    message: `✅ Fulfilled promise in ${delay}ms`,
                    position: "topRight",
});
                
            } else if (choice === 'rejected') {
                reject(`❌ Rejected promise in ${delay}ms`);
                iziToast.error({
                    message: `❌ Rejected promise in ${delay}ms`,
                    position: "topRight",
});

            }
        }, delay);
 
    });
      
}
    
  



// const p1 = createPromise(2000);

// p1.then(smile => {
//     console.log(smile);
// }).catch(smile => {
//     console.log(smile);
// })
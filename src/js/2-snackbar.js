
const delayForm = document.querySelector('input[type="number"]');
console.log(delayForm);

const chooseBtn = document.querySelectorAll('input[type="radio"]');
console.log(chooseBtn);

const submitBtn = document.querySelectorAll('button[type="submit"]');
console.log(submitBtn);

delayForm.addEventListener('input', createPromise);


function createPromise(delay) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const isActive = Math.random() > 0.5;
            if (isActive) {
                resolve(`✅ Fulfilled promise in ${delay} ms`);
                
            } else {
                reject(`❌ Rejected promise in ${delay} ms`);
            }
        }, delay)
    });
    return promise;
    
}

// const p1 = createPromise(2000);

// p1.then(smile => {
//     console.log(smile);
// }).catch(smile => {
//     console.log(smile);
// })
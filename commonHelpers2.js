import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const o=document.querySelector('input[type="number"]');console.log(o);const i=document.querySelectorAll('input[type="radio"]');console.log(i);const s=document.querySelectorAll('button[type="submit"]');console.log(s);o.addEventListener("input",r);function r(e){return new Promise((t,n)=>{setTimeout(()=>{Math.random()>.5?t(`✅ Fulfilled promise in ${e} ms`):n(`❌ Rejected promise in ${e} ms`)},e)})}
//# sourceMappingURL=commonHelpers2.js.map

import flatpickr from "flatpickr";
console.log(flatpickr);
import "flatpickr/dist/flatpickr.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};


let calendar = new flatpickr('input[type="text"]', options);
console.log(calendar);

const input = document.querySelector('input[type="text"]');
console.log(input);




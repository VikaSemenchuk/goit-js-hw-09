/**
 1. div.timer: display: flex       done
 2. libery flatpickr:
    - 
 . libery notiflix        done

 */
//  const selector = {
//     altInput: true,
//   dateFormat: "YYYY-MM-DD",
//   altFormat: "DD-MM-YYYY",
//   allowInput: true,
//   parseDate: (datestr, format) => {
//     return moment(datestr, format, true).toDate();
//   },
//   formatDate: (date, format, locale) => {
//     // locale can also be used
//     return moment(date).format(format);
//   }
// }

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(typeof selectedDates[0])
      console.log(selectedDates[0])
  
      // !РОБИТИ ДАЛІ ДЕСЬ ТУТ! ПЕРЕВІРЬ КОНСОЛЬ далі все по живому уроку
      // тут зберігається дата від користувача, далі її перетворюємо, порівнюємо і т д!!!!!!!!!!!
    },
  }

console.log(options.onClose);

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Report } from 'notiflix/build/notiflix-report-aio';

const containerEl = document.querySelector('.timer');
const fieldsEl = document.querySelectorAll('.field');
const dateValuesEl = document.querySelectorAll('.value');
const dateLabelEl = document.querySelectorAll('.label');

const customerInputEl = document.getElementById('datetime-picker');
const fp = flatpickr('#datetime-picker', options);

console.log(fp);
console.log(flatpickr);

// console.log(customerInputEl.addEventListener('input', onCustomerInput()));
// console.log(customerInputEl);

// customerInputEl.addEventListener('input', onCustomerInput());

// function onCustomerInput() {
//   console.log('hi');
// }

containerEl.style.display = 'flex';
containerEl.style.gap = '14px';
containerEl.style.marginTop = '14px';
containerEl.style.heigth = '14px';

for (const field of fieldsEl) {
  //   console.log(field);
  field.style.display = 'grid';
  field.style.justifyItems = 'center';
}

for (const value of dateValuesEl) {
  value.style.fontSize = '28px';
  value.style.fontFamily = 'sans-serif';
}

for (const label of dateLabelEl) {
  label.textContent = label.textContent.toUpperCase();
  label.style.fontSize = '10px';
  label.style.fontFamily = 'sans-serif';
}

// Report.warning('Please choose a date in the future');

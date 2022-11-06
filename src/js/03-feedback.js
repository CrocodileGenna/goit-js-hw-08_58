import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const button = document.querySelector('button');
console.log(button);
const inputVal = form.email.value;

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', submitValue);

function submitValue(e) {
  const email = e.currentTarget.email.value;
  const message = e.currentTarget.message.value;
  const objectValue = { email, message };

  const string = JSON.stringify(objectValue);
  localStorage.setItem(STORAGE_KEY, string);
}

function refreshWindow(e) {
  const valueLocalStorage = localStorage.getItem(STORAGE_KEY);
  const parse = JSON.parse(valueLocalStorage);
  input.value = parse.email;
  textarea.value = parse.message;
}
refreshWindow();

button.addEventListener('click', e => {
  e.preventDefault();

  function valueStorage(e) {
    const valueLocalStorage = localStorage.getItem(STORAGE_KEY);
    const parse = JSON.parse(valueLocalStorage);
    console.log(parse);
  }
  valueStorage();

  input.value = '';
  textarea.value = '';
});

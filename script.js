const makeMenuDisappear = document.querySelector('.icon');
const firstMainPage = document.querySelector('.first-mainpage');
const hamburgerPage = document.querySelector('.hamburger-page');
const hambClose = document.querySelector('.close-ham-img');
const otherClose = document.querySelector('.menu-inside-hamb-page');

function show() {
  firstMainPage.style.display = 'none';
  hamburgerPage.style.display = 'block';
}

function close() {
  firstMainPage.style.display = 'block';
  hamburgerPage.style.display = 'none';
}

makeMenuDisappear.addEventListener('click', show);
hambClose.addEventListener('click', close);
otherClose.addEventListener('click', close);

const addDataToLocalStorage = () => {
  const myFormData = {
    fullName: name.value,
    email: mail.value,
    message: msg.value,
  };
  localStorage.setItem('myFormData', JSON.stringify(myFormData));
};
form.addEventListener('input', addDataToLocalStorage);

window.addEventListener('DOMContentLoaded', () => {
  let getLocalStorageData = localStorage.getItem('myFormData');
  getLocalStorageData = JSON.parse(getLocalStorageData);
  document.getElementById('full-name').value = getLocalStorageData.fullName;
  document.getElementById('my-email').value = getLocalStorageData.email;
  document.getElementById('my-message').value = getLocalStorageData.message;
});
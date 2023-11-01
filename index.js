let resultOnPage = document.getElementById('count');
let count = 0;

function increment() {
  count += 1;
  resultOnPage.innerText = count;
}

function save() {
  console.log(count);
}

// let userName = 'per';

// let message = 'You have tree new notifications';
// console.log(message);

// let messageToUser = message + ', ' + userName + '!';
// console.log(messageToUser);

// const myName = 'Tania';
// const greeting = 'Hi, my name is ';

// const myGreeting = greeting + myName + '!';
// console.log(myGreeting);

let welcomEl = document.getElementById('welcome-el');

const myName = 'Tania';
const greeting = 'Welcome back ';

welcomEl.innerText = greeting + myName;

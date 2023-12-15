const button = document.querySelector("button");

function greet() {
  const name = prompt("What is your name?");
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `Hello ${name}, nice to see you!`;
}

function add7 (num) {
    return num + 7;
}

function multiply (a, b) {
    return a * b;
}

function capitalize (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function lastLetter (str) {
    return str.charAt(str.length - 1);
}

button.addEventListener("click", greet);
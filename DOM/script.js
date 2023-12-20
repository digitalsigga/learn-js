const container = document.querySelector('#container');

const redText = document.createElement('p');
redText.classList.add('content');
redText.textContent = 'Hey I am red';
redText.style.color = "red";

const blueText = document.createElement('h3');
blueText.classList.add('blueText');
blueText.textContent ="I'm a blue h3"; 
blueText.style.color = "blue";

const blackBorder = document.createElement('div');
blackBorder.classList.add('blackBorder');
blackBorder.style.backgroundColor = "pink";
blackBorder.style.borderColor= "black";

const iAm= document.createElement('h1');
iAm.classList.add("iAm");
iAm.textContent = "I'm in a div";

const meToo = document.createElement('p');
meToo.classList.add("meToo");
meToo.textContent = "ME TOO!";




container.appendChild(redText);
container.appendChild(blueText);

blackBorder.appendChild(iAm);
blackBorder.appendChild(meToo);
container.appendChild(blackBorder);
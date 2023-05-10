/*const btn = document.getElementById('btn-1');

function addParagraph() {
 const randomNum = Math.floor(Math.random() * 100);
 const pContent = 'the random number is ' + randomNum;
 const newElement = document.createElement('p');
 newElement.textContent = pContent;
 document.body.appendChild(newElement);
}

btn.addEventListener('click', addParagraph);
/*
or
btn.onclick = addParagraph;
or in HTML
<button id = 'btn-1' class = 'my-btn' onclick = "addParagraph()">Click Me</button>
*/

const btn = document.getElementById('btn-1');
btn.onclick = addParagraph;
function addParagraph() {
 window.location.reload();
 const randomNum = Math.floor(Math.random() * 100);
 const pContent = 'Random number is ' + randomNum;
 const newElement = document.createElement('p');
 newElement.textContent = pContent;
 document.body.appendChild(newElement);
}

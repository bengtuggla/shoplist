const input = document.querySelector('.input');
const btn = document.querySelector('.input-btn');
const listItem = document.querySelector('.list-item');
const ul = document.querySelector('ul');
const emptyBtn = document.querySelector('.empty');

function createLiText() {
  const newLi = document.createElement('li');
  newLi.appendChild(document.createTextNode(input.value));
  newLi.classList.add('list-item');
  ul.appendChild(newLi);
  input.value = '';
  newLi.append(addDeleteBtn());
}

// Knappen "FINNS INTE" eftersom den läggs till DYNAMISKT. Går allts inte att lägga eventlistener direkt på knappen
// Man kan du lägga en eventlistener på parent och sätta IF man klickar på något av dess barn med namn BUTTON så händer detta...
// SMART!!! KOM IHÅG!!!

ul.addEventListener('click', function (event) {
  if (event.target && event.target.nodeName == 'BUTTON') {
    event.target.parentNode.remove();
  }
});
//SAMMA Här som ovan. OBS! nodeName eller tagName funkar lika bra. M^STE VARA VERSALER INOM PARENTES för att funka!!!!
ul.addEventListener('click', function (event) {
  if (event.target && event.target.nodeName == 'LI') {
    event.target.classList.toggle('done');
  }
});

function addDeleteBtn() {
  const addBtn = document.createElement('BUTTON');
  addBtn.appendChild(document.createTextNode('X'));
  return addBtn;
}

function inputLength() {
  return input.value.length;
}

function checkInputLength() {
  if (inputLength() > 0) {
    createLiText();
  }
}

function checkPress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createLiText();
  }
}

function emptyList() {
  ul.innerHTML = '';
}

btn.addEventListener('click', checkInputLength);
input.addEventListener('keypress', checkPress);
emptyBtn.addEventListener('click', emptyList);
// listItem.addEventListener('click', toggleDone);

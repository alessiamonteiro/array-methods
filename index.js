const pushButton = document.querySelector('#push-button');
const unshiftButton = document.querySelector('#unshift-button');
const insertButton = document.querySelector('#insert-button');
const inputAdd = document.querySelector('#input-add');
const popButton = document.querySelector('#pop-button');
const shiftButton = document.querySelector('#shift-button');
const removeButton = document.querySelector('#remove-button');
const inputRemove = document.querySelector('#input-remove');
const emojisUrl = 'https://emojihub.herokuapp.com/api/random';
const emojisdiv = document.querySelector('#emojis');

const emojisArray = [];
const emojiTag = document.createElement('p');
emojisdiv.appendChild(emojiTag);

function innerHtmlEmoji(emojisArray) {
  emojiTag.innerHTML = `[ ${emojisArray} ]`;
}

async function newEmoji() {
  const response = await fetch(emojisUrl);
  const jsonResponse = await response.json();
  const emoji = jsonResponse.htmlCode[0];
  return emoji;
}

////// ADD ///////////////
pushButton.onclick = async () => {
  emojisArray.push(await newEmoji());
  innerHtmlEmoji(emojisArray);
};

unshiftButton.onclick = async () => {
  emojisArray.unshift(await newEmoji());
  innerHtmlEmoji(emojisArray);
};

insertButton.onclick = async () => {
  emojisArray.splice(inputAdd.value, 0, await newEmoji());
  innerHtmlEmoji(emojisArray);
};

/////////////////  REMOVE //////////////////////
popButton.onclick = () => {
  emojisArray.pop();
  innerHtmlEmoji(emojisArray);
};

shiftButton.onclick = () => {
  emojisArray.shift();
  innerHtmlEmoji(emojisArray);
};

removeButton.onclick = () => {
  emojisArray.splice(inputRemove.value, 1);
  innerHtmlEmoji(emojisArray);
};

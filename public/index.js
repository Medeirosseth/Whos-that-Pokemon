let gameData;
const main = document.querySelector('main')
const playBtn = document.querySelector('#play')


playBtn.addEventListener('click', fetchData);

async function fetchData() {
  gameData = await window.getPokeData();
}
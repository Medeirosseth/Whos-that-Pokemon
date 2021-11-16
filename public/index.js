let gameData;
const main = document.querySelector('main')
const pokemonImage = document.querySelector('#pokemon-image')
const playBtn = document.querySelector('#play')


playBtn.addEventListener('click', fetchData);

async function fetchData() {
  gameData = await window.getPokeData();
  console.log(gameData)
  showSilhouette();
}

function showSilhouette(){
  pokemonImage.src = gameData.correct.image;
}
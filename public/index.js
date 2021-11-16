let gameData;
const main = document.querySelector('main')
const pokemonImage = document.querySelector('#pokemon-image')
const playBtn = document.querySelector('#play')
const choice = document.querySelector('#choices')


playBtn.addEventListener('click', fetchData);

async function fetchData() {
  gameData = await window.getPokeData();
  console.log(gameData)
  showSilhouette();
  displayChoices();
}

function showSilhouette(){
  pokemonImage.src = gameData.correct.image;
}

function displayChoices() {
  const { pokemonChoices } = gameData;
  const choicesHTML = pokemonChoices.map((({ name}) => {
    return `<button data-name="${name}">${name}</button>`
  })).join('')

  choices.innerHTML = choicesHTML;
}
let gameData;
const main = document.querySelector('main')
const pokemonImage = document.querySelector('#pokemon-image')
const playBtn = document.querySelector('#play')
const choice = document.querySelector('#choices')
const textOverlay = document.querySelector('#text-overlay')

addAnswerHandler();
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

function addAnswerHandler(){
  choices.addEventListener('click', e => {
    const { name } = e.target.dataset;
    const resultClass = (name === gameData.correct.name) ? 
    'correct' : 'incorrect'

    e.target.classList.add(resultClass)
    revealPokemon();
  })
}

function revealPokemon() {
main.classList.add('revealed')
textOverlay.textContent = `${gameData.correct.name}!`

}
window.getPokeData = async function() {
  const pokemon = await getPokemon();
  const randomPokemon = shuffle(pokemon);
  const pokemonChoices = get4Pokemon(randomPokemon);
  const [ firstPokemon ] = pokemonChoices;
  const number = getPokemonNumber(firstPokemon)
  const image = getPokemonImage(number) 
return {
  pokemonChoices: shuffle(pokemonChoices),
  correct: {
    image,
    name: firstPokemon.name
  }
}
};


async function getPokemon() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const pokemon = await res.json()
  console.log(pokemon)

  return pokemon.results
} 

function shuffle(unshuffled) {
  const shuffled = unshuffled
    .map(value => ({value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(( {value }) => value);

    return shuffled
}

function get4Pokemon(randomPokemon){
  return randomPokemon.splice(0, 4);
}

function getPokemonNumber({ url }) {
  const numberRegEx = /(\d*)\/$/
  return (url.match(numberRegEx) || [])[1]
}

function getPokemonImage(number){
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`;
}
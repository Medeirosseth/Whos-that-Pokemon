window.getPokeData = async function() {
  const pokemon = await getPokemon();
};


async function getPokemon() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const pokemon = await res.json()
  console.log(pokemon)
}
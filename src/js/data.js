window.pokemon = {

  getPokemonByNumber: (numberOfPokemon) => {
    numberOfPokemon--;
    const pokemonList = window.main.getPokemonList();
    // console.log(pokemonList[numberOfPokemon]);
    return pokemonList[numberOfPokemon];
  },

  getPokemonByName: (nameOfPokemon) => {
    const pokemonList = window.main.getPokemonList();
    const pokemonByName = window.main.getPokemonMap();
    nameOfPokemon = nameOfPokemon.toLowerCase();
    return pokemonList[pokemonByName.get(nameOfPokemon)];
  },

window.example = example;

const dataPokemonFilter = (dataPokemon.filter (element =>{
  element.type.includes == "Fire"
  return dataPokemonFilter;
}));

/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;
dataPokemon = POKEMON.pokemon;

const dataPokemonFire = (dataPokemon.filter (element =>{
  console.log(element.type.includes("Fire"));
}));

const dataPokemonAsc = dataPokemon.sort ((a,b) =>{
  return (a.name> b.name)
});

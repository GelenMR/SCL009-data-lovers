/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;

// FUNCIÓN FILTRAR POR TIPO
const dataPokemonFire = (dataPokemon.filter (element =>{
  console.log(element.type.includes("Fire"));
  return(element.type.includes("Fire"));
}));

// FUNCIÓN ORDENAR ASCENDENTE
const dataPokemonAsc = dataPokemon.sort ((a,b) =>{
  return (a.name> b.name)
});

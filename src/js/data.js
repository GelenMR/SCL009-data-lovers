/* Manejo de data */
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
const example = () => {
  return 'example';
};

window.example = example;

// FUNCIÓN FILTRAR POR NOMBRE
let resultFilterName = [];
const filterNamePokemon = (data, condition) =>{
  for (let i= 0; i<data.length; i++){
    if (data[i].name === condition) {
    resultFilterName.push(data[i]);
    }
  }
  return resultFilterName;
};
console.log(filterNamePokemon(dataPokemon, searchName));
window.resultFilterName = resultFilterName;



// FUNCIÓN FILTRAR POR TIPO
// const dataPokemonFire = (window.dataPokemon.filter(element =>{
//   console.log(element.type.includes("Fire"));
//   return(element.type.includes("Fire"));
// }));

// FUNCIÓN ORDENAR ASCENDENTE
// const dataPokemonAsc = dataPokemon.sort ((a,b) =>{
//   return (a.name> b.name)
// });

// FILTRADO POR TIPO intento 1 VITA
/*window.data = {
  filterType: (arr, type) => {
      let pokemonType = [];
      for (let i = 0; i < arr.length; i++) {
          if (arr[i].type.length > 1) {
              if (arr[i].type[0] == type || arr[i].type[1] == type) {
                  pokemonType.push(arr[i]);
              }
      // Hago un nuevo arreglo con los que voy  a identificar*/
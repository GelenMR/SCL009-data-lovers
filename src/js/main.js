/* Manejo del DOM */
const dataPokemon = window.POKEMON.pokemon;
console.log(dataPokemon.length);

const dataPokemonFilterFire = window.dataPokemonFire;
console.log(dataPokemonFilterFire);

const dataPokemonOrderAs = window.dataPokemonAs;
console.log(dataPokemonOrderAs);

let showPokemon = '';
let i;
//MOSTRANDO POKEMONS EN PANTALLA DENTRO DE UN CONTENEDOR
for (i = 0; i < dataPokemon.length; i++) {
        
    showPokemon += `
        <a href="">
        <img style="width:110px; height: auto" src= ${dataPokemon[i].img} class="" alt="...">
        </a>`
}                
document.getElementById("item").innerHTML = showPokemon;

//FILTRANDO POKEMONS POR TIPO = Fire
document.getElementById("filter").innerHTML = dataPokemonFilterFire;

//ORDENANDO POKEMONS ALFABETICAMENTE: ASCENDENTE
document.getElementById("orderAs").innerHTML = dataPokemonOrderAs;

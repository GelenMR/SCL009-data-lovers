/* Manejo del DOM */
const dataPokemon = POKEMON.pokemon;
console.log(dataPokemon.length);

const dataPokemonFilterFire = window.dataPokemonFilter;
let showPokemon = '';
let i;
//MOSTRANDO POKEMONS EN PANTALLA DENTRO DE UN CONTENEDOR
for (i = 0; i < dataPokemon.length; i++) {
        
    showPokemon += `
        <a href="">
        <img style="width:25px; height: auto" src= ${dataPokemon[i].img} class="" alt="...">
        </a>`
}                
document.getElementById("item").innerHTML = showPokemon;

document.getElementById("filter").innerHTML = dataPokemonFilterFire;


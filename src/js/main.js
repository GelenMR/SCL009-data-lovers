
MUESTRA TARJETITAS EN EL INDEX
// let data = POKEMON.pokemon;
// const infoCard = document.getElementById('pokemonId');
// let infoCard = '';
// window.addEventListener("load", function () {
//   mostrarData(data);
// });
// const mostrarData = (data) => {



//   data.forEach(element => {
//     infoCard += `<div class="col-md-3">
//         <div class="card">
//         <img class="card-img-top" src="${element.img}" alt="Card image cap">
//         <div class="card-body">
//             <h5 class="card-title">${element.name}</h5>
//             <p class="card-text">${element.egg}</p>
//             <p class="card-text">${element.num}</p>
//             <p class="card-text">${element.weaknesses}</p>
//             <a href="#" class="btn btn-primary">Ver</a>
//         </div>
//         </div>
//     </div>`
//   })

//   pokemonId.innerHTML = infoCard
// }

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
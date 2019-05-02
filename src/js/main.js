
//MUESTRA TARJETITAS EN EL INDEX
// 
// let infoCard = '';
// let btnCard = document.getElementById("${dataPokemon[i].img}");
// btnCard.addEventListener("click", () => {

//   showData(dataPokemon[i]);
// });
// const showData = (dataPokemon) => {
//   data.forEach(element => {
//     infoCard = `<div class="col-md-3">
//         <div class="card">
//         <img class="card-img-top" src="${element[i].img}" alt="Card image cap">
//         <div class="card-body">
//             <h5 class="card-title">${element[i].name}</h5>
//             <p class="card-text"> ${element[i].num}</p>
//             <p class="card-text">${element[i].type}</p>
//             <p class="card-text">${element[i].egg}</p>
//             <p class="card-text">${element[i].weaknesses}</p>
//         </div>
//         </div>
//     </div>`
//   })
//   document.getElementById('card').innerHTML = infoCard
// }

/* Manejo del DOM */
const dataPokemon = window.POKEMON.pokemon;
console.log(dataPokemon.length);
window.dataPokemon = dataPokemon;

let showPokemon = '';
let i;
//MOSTRANDO POKEMONS EN PANTALLA DENTRO DE UN CONTENEDOR
for (i = 0; i < dataPokemon.length; i++) {
    showPokemon += `
        <a href="#card" id="${dataPokemon[i].num}">
        <img style="width:110px; height: auto" src= ${dataPokemon[i].img} class="" alt="...">
        </a>`
}                
document.getElementById("item").innerHTML = showPokemon;

//FILTRANDO POKEMONS POR NAME
let btnSearchName = document.getElementById("btnSearchName");
btnSearchName.addEventListener("click", () => {
    showPokemon = "";
    let searchName = document.getElementById("searchName").value;
    window.filterNamePokemon(dataPokemon, searchName);
        
});

document.getElementById("orderAsc").innerHTML = resultFilterName;




//FILTRANDO POKEMONS POR TIPO = Fire
const dataPokemonFilterFire = window.dataPokemonFire;
console.log(dataPokemonFilterFire);
document.getElementById("filter").innerHTML = dataPokemonFilterFire;

//ORDENANDO POKEMONS ALFABETICAMENTE: ASCENDENTE
// const dataPokemonOrderAs = window.dataPokemonAs;
// console.log(dataPokemonOrderAs);
// document.getElementById("orderAs").innerHTML = dataPokemonOrderAs;
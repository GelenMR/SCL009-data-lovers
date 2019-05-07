//DECLARAMOS NUESTRAS VARIABLES
const dataPokemon = window.POKEMON.pokemon;
const btnSearchName = document.getElementById("btnSearchName");
const filterType = document.getElementById("filterType");
const filterEggs = document.getElementById("filterEggs");
const order = document.getElementById("order");
let card;
let searchName;
let pokemonCard ='';

//CONTENEDOR DONDE MOSTRAREMOS LA INFO
const showAll = document.getElementById("root");
const createCards = (data) => { 
  data.forEach((pokemon) => {
    card = `
    <div class="col-12 col-md-3">
    <div class="card bg" style="width: 17.5rem">
    <div class="card-body">
    <img src="${pokemon.img}" /><br>
    <b>Nº </b>${pokemon.num}</b><br>
    <h4>${pokemon.name}</h4>
    <b>Tipo </b><br> ${pokemon.type+" "}</b><br>
    <b>Debilidades </b><br> ${pokemon.weaknesses+" "}<br>
    <b>Huevos </b><br> ${pokemon.egg}</b>
    </div>
    </div>
    </div>`;
    pokemonCard += card
  })
  showAll.innerHTML = pokemonCard
 }
 // LLAMADO A LA FUNCIÓN QUE CREA LA CARD: EL PARÁMETRO (DATAPOKEMON)
 createCards(dataPokemon);

//  FILTRO POR TIPOS
filterType.addEventListener("click",(event)=> {
  pokemonCard = "";
  let condition = event.target.text;
  createCards(window.filterData.type(dataPokemon,condition));
});

// FILTRO POR HUEVOS
filterEggs.addEventListener("click", (event) => {
  pokemonCard = "";
  let condition = event.target.text;
  createCards(window.filterData.eggs(dataPokemon, condition));
});

// BUSCAR POKEMONS POR NOMBRE
btnSearchName.addEventListener("click", () => {
  pokemonCard = "";
  searchName = document.getElementById("searchName").value;
  createCards(window.searchData.name(dataPokemon, searchName));
  //createCards(window.searchData.num(dataPokemon, searchName));       
});

// ORDENAR POR NOMBRE ASCENDENTE
order.addEventListener("click",(event) => {
  pokemonCard = "";
  
  let orderSelect = event.target.text;
  let resultOrder = [];
  if (orderSelect === "Nombre: A-Z"){
    resultOrder.push(window.sortData(dataPokemon, "name", "asc")); 
  }
  if (orderSelect === "Nombre: Z-A"){
    resultOrder.push(window.sortData(dataPokemon, "name", "desc"));
  }
  if (orderSelect === "Número: Ascendente"){
    resultOrder.push(window.sortData(dataPokemon, "num", "numasc"));
  }
  if (orderSelect === "Número: Descendente"){
    resultOrder.push(window.sortData(dataPokemon, "num", "numdesc"));
  }
  createCards (dataPokemon);
});
window.dataPokemon = dataPokemon;
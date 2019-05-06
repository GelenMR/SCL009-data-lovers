//DECLARAMOS NUESTRAS VARIABLES
const dataPokemon = window.POKEMON.pokemon;
const btnSearchName = document.getElementById("btnSearchName");
const searchName = document.getElementById("searchName").value;
const filterType = document.getElementById("filterType");
const filterEgg = document.getElementById("filterEgg");

//CONTENEDOR DONDE MOSTRAREMOS LA INFO
const showAll = document.getElementById("root");
const createCards = (data) => {
  let pokemonCard = '';
  data.forEach((pokemon) => {
    card = `
    <div class="col-12 col-md-3">
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <img src="${ pokemon.img}" /><br>
    <b>Nº </b>${ pokemon.num}</b><br>
    <b>${ pokemon.name}</b><br>
    <b>Tipo </b><br> ${ pokemon.type}</b><br>
    <b>Debilidades </b><br> ${ pokemon.weaknesses}<br>
    <b>Huevos </b><br> ${pokemon.egg}</b><br><br>
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
  console.log(condition);
  createCards(window.filterData.eggs(dataPokemon, condition));
});

//FILTRANDO POKEMONS POR NAME
btnSearchName.addEventListener("click", () => {
    pokemonCard = "";
    let condition = searchName;
   createCards(window.filterData.name(dataPokemon, condition));       
});

// ORDENAR AZ
orderAsc.addEventListener("click", (event) => {
  cardPokemon = '';

  let sortOrderSelect = event.target.text;


  let dataSorted;

  if (sortOrderSelect === "A-Z") {
    dataSorted = window.sortData(data, "name", "ascaz");

  }

  if (sortOrderSelect === "Z-A") {
    dataSorted = window.sortData(data, "name", "descza");

  }
  if (sortOrderSelect === "Ascendente") {
    dataSorted = window.sortData(data, "num", "ascnum");
  }

  if (sortOrderSelect === "Descendente") {
    dataSorted = window.sortData(data, "num", "descnum");
  }

  showPokemon(dataSorted);
});
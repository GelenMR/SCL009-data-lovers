//DECLARAMOS NUESTRAS VARIABLES
const dataPokemon = window.POKEMON.pokemon;
const btnSearchName = document.getElementById("btnSearchName");
const filterType = document.getElementById("filterType");
const filterEggs = document.getElementById("filterEggs");
//const order = document.getElementById("order");
let card;
let searchName;
let pokemonCard = '';

//CONTENEDOR DONDE MOSTRAREMOS LA INFO
const showAll = document.getElementById("root");
const createCards = (data) => {
  data.forEach((pokemon) => {
    card = `
    <div class="col-12 col-md-3">
    <div class="card bg" style="width: 17rem">
    <div class="card-body">
    <img src="${pokemon.img}" /><br>
    <b>Nº </b>${pokemon.num}</b><br>
    <h4>${pokemon.name}</h4>
    <b>Tipo </b><br> ${pokemon.type + " "}</b><br>
    <b>Debilidades </b><br> ${pokemon.weaknesses + " "}<br>
    <b>Huevos </b><br> ${pokemon.egg}</b><br>
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
filterType.addEventListener("click", (event) => {
  pokemonCard = "";
  let condition = event.target.text;
  createCards(window.filterData.type(dataPokemon, condition));
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
  event.preventDefault();
  searchName = document.getElementById("searchName").value;
  //console.log(searchName);
  createCards(window.searchData.name(dataPokemon, searchName));
  //createCards(window.searchData.num(dataPokemon, searchName));       
});

// ORDENAR POR NOMBRE ASCENDENTE
order.addEventListener("click",(event) => {
  pokemonCard = "";

  let orderSelect = event.target.text;
  let resultOrder = [];
  if (orderSelect === "Nombre: A-Z"){
    resultOrder.push(sortData(dataPokemon, "name", "asc"));
    //console.log(resultOrder); 
  }
  if (orderSelect === "Nombre: Z-A"){
    resultOrder.push(sortData(dataPokemon, "name", "desc"));
    //console.log(resultOrder);
  }
  if (orderSelect === "Número: Ascendente"){
    resultOrder.push(sortData(dataPokemon, "num", "numasc"));
    //console.log(resultOrder);
  }
  if (orderSelect === "Número: Descendente"){
    resultOrder.push(sortData(dataPokemon, "num", "numdesc"));
    //console.log(resultOrder);
  }
  createCards (dataPokemon);
});
window.dataPokemon = dataPokemon;
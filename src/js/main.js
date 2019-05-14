/* Manejo del DOM */
//DECLARAMOS NUESTRAS VARIABLES
const dataPokemon = window.POKEMON.pokemon;
const btnSearchName = document.getElementById("btnSearchName");
const filterType = document.getElementById("filterType");
const filterEggs = document.getElementById("filterEggs");
const order = document.getElementById("order")
let card='';
let pokemonCard ='';
let searchName='';
let pokeType = "";

//CONTENEDOR DONDE MOSTRAREMOS LA INFO
const showAll = document.getElementById("root");
const resultPercent= document.getElementById("containerPercent");

// INFORMACIÓN DENTRO DE LA TARJETA
const createCards = (data) => {
  data.forEach((element) => {
    card = `
    <div class="card bg" style="width: 17rem">
      <div class="card-body">
      <img src="${element.img}" /><br>
      <b>Nº </b>${element.num} <br>
      <h4>${element.name} </h4>
      <b>Tipo </b><br> ${element.type+" "} <br>
      <b>Debilidades </b><br> ${element.weaknesses+" "}<br>
      <b>Altura: </b> ${element.height} <br>
      <b>Peso: </b> ${element.weight} <br>
      <b>Huevos </b><br> ${element.egg} <br>
      <b>Candies</b><br> ${element.candy} <br>
      </div>
    </div>`
    pokemonCard += card;
  });
  showAll.innerHTML = pokemonCard;
};
// LLAMADO A LA FUNCIÓN QUE CREA LA CARD: EL PARÁMETRO (DATAPOKEMON)
createCards(dataPokemon);

//  FILTRO POR TIPOS
filterType.addEventListener("click", (event) => {
  pokemonCard="";
  resultPercent.innerHTML = "";
  let condition = event.target.text;
  pokeType = window.filterData.type(dataPokemon,condition);
  resultPercent.innerHTML = `
    <div  class="bg-percentage">
      <h2>El Porcentaje de Pokemones de Tipo <b>${condition}</b> es de <b>${window.calcPercent(pokeType, dataPokemon)}%</b></h2>
    </div>`
  createCards(pokeType);
});

// FILTRO POR HUEVOS
filterEggs.addEventListener("click", (event) => {
  pokemonCard = "";
  resultPercent.innerHTML = "";
  let condition = event.target.text;
  pokeType = window.filterData.eggs(dataPokemon, condition);
  resultPercent.innerHTML = `
    <div  class="bg-percentage">
      <h2>El Porcentaje de Pokemones con Huevos de <b>${condition}</b> es de <b>${window.calcPercent(pokeType, dataPokemon)}%</b></h2>
    </div>`
  createCards(pokeType);
});

// FILTRO POR DEBILIDADES
filterWeakness.addEventListener("click", (event) => {
  pokemonCard = "";
  resultPercent.innerHTML = "";
  let condition = event.target.text;
  pokeType = window.filterData.weakness(dataPokemon, condition);
  resultPercent.innerHTML = `
    <div  class="bg-percentage">
      <h2>El Porcentaje de Pokemones con Debilidad de <b>${condition}</b> es de <b>${window.calcPercent(pokeType, dataPokemon)}%</b></h2>
    </div>`
  createCards(pokeType);
});

// BUSCAR POKEMONS POR NOMBRE y/o NUMERO
btnSearchName.addEventListener("click", () => {
  pokemonCard = "";
  resultPercent.innerHTML = "";
  event.preventDefault();
  searchName = document.getElementById("searchName").value;
  if (isNaN(searchName) === true) {
    searchName = firstMay(searchName.toLowerCase());
    createCards(window.searchData.name(dataPokemon, searchName));
  } else {
    createCards(window.searchData.num(dataPokemon, searchName));    
  }   
});
//VALIDACIÓN CAMPO NOMBRE 
let firstMay = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// ORDENAR POR NOMBRE ASCENDENTE
order.addEventListener("click",(event) => {
  pokemonCard = "";
  resultPercent.innerHTML = "";
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

// CARGAR INDEX
document.getElementById('index').addEventListener('click', () => {
  location.reload();
});

window.dataPokemon = dataPokemon;
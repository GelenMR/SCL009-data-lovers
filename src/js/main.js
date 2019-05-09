
//DECLARAMOS NUESTRAS VARIABLES
const dataPokemon = window.POKEMON.pokemon;
const btnSearchName = document.getElementById("btnSearchName");
const filterType = document.getElementById("filterType");
const filterEggs = document.getElementById("filterEggs");
const order = document.getElementById("order")
let card='';
let searchName='';
let pokemonCard ='';
let resultPercent= document.getElementById("containerPercent"); 
//let pokemonCardType = '';

//CONTENEDOR DONDE MOSTRAREMOS LA INFO
const showAll = document.getElementById("root");
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
  })
  showAll.innerHTML = pokemonCard;
}
// LLAMADO A LA FUNCIÓN QUE CREA LA CARD: EL PARÁMETRO (DATAPOKEMON)
createCards(dataPokemon);

//  FILTRO POR TIPOS
filterType.addEventListener("click", (event) => {
  pokemonCard="";
  let condition = event.target.text;
  let pokeType = window.filterData.type(dataPokemon,condition);
  resultPercent.innerHTML = `
    <div  class="bg-percentage">
      <h2>El Porcentaje de Pokemones de Tipo <b>${condition}</b> es de <b>${window.calcPercent(pokeType, dataPokemon)} %</b></h2>
    </div>`
  createCards(window.filterData.type(dataPokemon, condition));
})

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

// PORCENTAJE DE POKEMONS POR TIPO
// 
// btnCalculation.addEventListener("click", () => {
//   event.preventDefault();
//   createCardsPercent(window.filterData.type(dataPokemon, condition));
//   percentType(pokemonCardType);
//   //AQUI SE DEBE LLAMAR A LA FUNCIÓN QUE CREARA EL MODAL DONDE SE IMPRIMIRA EL CALCULO
// });

//  let porcentaje = window.percent(dataPokemon);
// document.getElementById('calculo-agregado').innerHTML = `<p id="porcentaje" class="${element}">El ${porcentaje}% de los pokemones de la región Kanto son de tipo ${element}.</p>`;

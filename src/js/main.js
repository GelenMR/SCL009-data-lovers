/* Manejo del DOM */
// FETCH
fetch('https://raw.githubusercontent.com/GelenMR/SCL009-data-lovers/master/src/data/pokemon/pokemon.json')
  .then(response => response.json())
  .then(data => {
    const dataPokemon = data.pokemon;
    console.log(dataPokemon);
    //DECLARAMOS NUESTRAS VARIABLES
    //const dataPokemon = window.POKEMON.pokemon;
    const btnSearchName = document.getElementById("btnSearchName");
    const filterType = document.getElementById("filterType");
    const filterEggs = document.getElementById("filterEggs");
    const filterWeakness = document.getElementById("filterWeakness");
    const order = document.getElementById("order")
    let card='';
    let pokemonCard ='';
    let searchName='';
    let pokePercent = "";

    //CONTENEDOR DONDE MOSTRAREMOS LA INFO
    const showAll = document.getElementById("root");
    const resultPercent = document.getElementById("containerPercent");
    //const resultChart = document.getElementById("myChart").getContext("2d");

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

    // FILTRO POR TIPOS
    filterType.addEventListener("click", (event) => {
      pokemonCard="";
      resultPercent.innerHTML = "";
      //resultChart.innerHTML = "";
      let condition = event.target.text;
      pokePercent = window.filterData.type(dataPokemon,condition);
      resultPercent.innerHTML = `
        <div  class="bg-percentage">
          <h2>El Porcentaje de Pokemones de Tipo <b>${condition}</b> es de <b>${window.calcPercent(pokePercent, dataPokemon)}%</b></h2>
        </div>`
      createCards(pokePercent);
      // IMPRIMIR EL CHART ACA
      //resultChart.innerHTML = "";
    });

    // FILTRO POR HUEVOS
    filterEggs.addEventListener("click", (event) => {
      pokemonCard = "";
      resultPercent.innerHTML = "";
      //resultChart.innerHTML = "";
      let condition = event.target.text;
      pokePercent = window.filterData.eggs(dataPokemon, condition);
      resultPercent.innerHTML = `
        <div  class="bg-percentage">
          <h2>El Porcentaje de Pokemones con Huevos de <b>${condition}</b> es de <b>${window.calcPercent(pokePercent, dataPokemon)}%</b></h2>
        </div>`
      createCards(pokePercent);
      // IMPRIMIR EL CHART ACA
      //resultChart.innerHTML = "";
    });

    // FILTRO POR DEBILIDADES
    filterWeakness.addEventListener("click", (event) => {
      pokemonCard = "";
      resultPercent.innerHTML = "";
      //resultChart.innerHTML = "";
      let condition = event.target.text;
      pokePercent = window.filterData.weakness(dataPokemon, condition);
      resultPercent.innerHTML = `
        <div  class="bg-percentage">
          <h2>El Porcentaje de Pokemones con Debilidad de <b>${condition}</b> es de <b>${window.calcPercent(pokePercent, dataPokemon)}%</b></h2>
        </div>`
      createCards(pokePercent);
      // IMPRIMIR EL CHART ACA
      //resultChart.innerHTML = "";
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
  });
//window.dataPokemon = dataPokemon;
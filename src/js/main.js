let data = POKEMON.pokemon;
const pokemonId = document.getElementById('pokemonId');
let infoCard = '';
window.addEventListener("load", function () {
  mostrarData(data);
});
const mostrarData = (data) => {



  data.forEach(element => {
    infoCard += `<div class="col-md-3">
        <div class="card">
        <img class="card-img-top" src="${element.img}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <p class="card-text">${element.egg}</p>
            <p class="card-text">${element.num}</p>
            <p class="card-text">${element.weaknesses}</p>
            <a href="#" class="btn btn-primary">Ver</a>
        </div>
        </div>
    </div>`
  })

  pokemonId.innerHTML = infoCard
}

 
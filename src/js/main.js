/* Manejo del DOM */
const dataPokemon = POKEMON.pokemon;
dataPokemon.addEventListener("click",() => {
    for (let i = 0; i < dataPokemon.length; i++) {
        let showPokemon = POKEMON.pokemon[i].img;    
    }   
    document.getElementById("item").innerHTML = showPokemon;
})
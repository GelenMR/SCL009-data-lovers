/* Manejo del DOM */
const dataPokemon = POKEMON.pokemon;
console.log(dataPokemon.length);
let showPokemon = '';
let i, j=0, k=0, numcard =0;

    for (i = 0; i < 3; i++) {
        if (i===0 || j % 5 === 0){
        showPokemon += `<ul class="list-group list-group-horizontal" >`
        j++;    
        } else{
            for (j = numcard; j < 5 || (j<=5 && j<10); j++) {
                if (j<5+numcard){
                showPokemon += `<li class="list-group-item">
                    <a href="">
                    <img src= ${dataPokemon[numcard].img} class="d-block w-100" alt="...">
                    </a>
                    </li> `
                    numcard++;
                } else {
                showPokemon += `</ul>`   
                }
            }
        }
    }

    
    document.getElementById("item").innerHTML = showPokemon;


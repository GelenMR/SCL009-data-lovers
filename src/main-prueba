// HACIENDO UN CARRUCEL
const dataPokemon = POKEMON.pokemon;
console.log(dataPokemon.length);
let showPokemonItem = '';
let showPokemonItem2 = '';
let showPokemonItem3 = '';
let i, j=0, numcard =0;

    //for (i = 0; i < 3; i++) {
        //if (i===0 || j % 5 === 0){
        //showPokemon += `<ul class="list-group list-group-horizontal" >`
        //j++;    
        //} else{
            for (j = numcard; j < 5; j++) {
                if (j<5){
                showPokemonItem += `<li class="list-group-item">
                    <a href="">
                    <img src= ${dataPokemon[numcard].img} class="d-block w-100" alt="...">
                    </a>
                    </li> `
                    numcard++;
                //} else {
                //  showPokemon = '';   
                }
            }
        //}
    //}
    document.getElementById("item").innerHTML = showPokemonItem;

    for (j = numcard; j>=5 && j<10; j++) {
        if (j>=5 && j<10){
        showPokemonItem2 += `<li class="list-group-item">
            <a href="">
            <img src= ${dataPokemon[numcard].name} class="d-block w-100" alt="...">
            </a>
            </li> `
            numcard++;
        //} else {
          //  showPokemon = '';    
        }
    }
        document.getElementById("item2").innerHTML = showPokemonItem2;

    for (j = numcard; j>=10 && j<15; j++) { 
        if (j>=10 && j<15){
        showPokemonItem3 += `<li class="list-group-item">
            <a href="">
            <img src= ${dataPokemon[numcard].img} class="d-block w-100" alt="...">
            </a>
            </li> `
            numcard++;
        //} else {
          //  showPokemon = '';    
        }
    }
    document.getElementById("item3").innerHTML = showPokemonItem3;
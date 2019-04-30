/* Manejo de data */
// FILTRADO POR TIPO intento 1 vita
window.data = {
    filterType: (arr, type) => {
        let pokemonType = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].type.length > 1) {
                if (arr[i].type[0] == type || arr[i].type[1] == type) {
                    pokemonType.push(arr[i]);
                }
        // Hago un nuevo arreglo con los que voy  a identificar
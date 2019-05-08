// FILTRO POR TIPO
window.filterData = {
    type: (dataPokemon, condition) => {
        const resultFilter = dataPokemon.filter(element => {
            return element.type.includes(condition);
        })
        return resultFilter;
    }
    ,
    eggs: (dataPokemon, condition) => {
        const resultFilter = dataPokemon.filter(element => {
            return element.egg.includes(condition);
        })
        return resultFilter;
    }
};

// fin filtro por tipo

// BUSQUEDA POR NOMBRE
const searchData = {
 name: (data, condition) => {
    let resultSearch = [];
    for (let i = 0; i < data.length; i++){
        if (data[i].name === condition){
        resultSearch.push(data[i]);
        } 
    } return resultSearch;
 },
//  num: (data, condition) => {
//     let resultSearch = [];
//     for (let i = 0; i < data.length; i++){
//         if (data[i].id === parseInt(condition)){
//         resultSearch.push(data[i]);
//         } 
//     } return resultSearch;
//  }
};
window.searchData = searchData;

// ORDENAR POR NOMBRE y/o NUMERO
const sortData = (data, sortBy, sortOrder) => {
    let orderData = [];
    if (sortOrder === "asc") {
        orderData = data.sort((a, b) => {
            return a[sortBy].localeCompare(b[sortBy]);
        });
    }
    else if (sortOrder === "desc") {
        orderData = data.sort((a, b) => {
            return b[sortBy].localeCompare(a[sortBy]);
        });
    }
    else if (sortOrder === "numasc") {
        orderData = data.sort((a, b) => {
            return a[sortBy].localeCompare(b[sortBy]);
        });
    }
    else if (sortOrder === "numdesc") {
        orderData = data.sort((a, b) => {
            return b[sortBy].localeCompare(a[sortBy]);
        });
    }
    return orderData;
};
window.sortData = sortData;

// arr sera el arreglo resultnte del filtrado por tipo
// const percentType = (arr) => {
//     let resultPercent = parseInt(arr.length / 151 * 100);
//     return resultPercent;
// }
// window.resultPercent = resultPercent;

// CALCULO DE PORCENTAJE SEGUN TIPOS
const calcPercent = (arr, data) =>{
    let resultCalc = Math.round((arr.length * 100) / data.length );
    return resultCalc;
} 
window.calcPercent= calcPercent;

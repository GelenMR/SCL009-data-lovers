// FILTRO POR TIPO y/o HUEVO
window.filterData = {
    type: (dataPokemon, condition) => {
        const resultFilter = dataPokemon.filter(element => {
            return element.type.includes(condition);
        })
        return resultFilter;
    },
    eggs: (dataPokemon, condition) => {
        const resultFilter = dataPokemon.filter(element => {
            return element.egg.includes(condition);
        })
        return resultFilter;
    },
    weakness: (dataPokemon, condition) => {
        const resultFilter = dataPokemon.filter(element => {
            return element.weaknesses.includes(condition);
        })
        return resultFilter;
    }
};

// BUSQUEDA POR NOMBRE y/o NUMERO
window.searchData = {
 name: (data, condition) => {
    let resultSearch = [];
    for (let i = 0; i < data.length; i++){
        if (data[i].name === condition){
        resultSearch.push(data[i]);
        } 
    } return resultSearch;
 },
 num: (data, condition) => {
    let resultSearch = [];
    for (let i = 0; i < data.length; i++){
        if (data[i].id === parseInt(condition)){
        resultSearch.push(data[i]);
        } 
    } return resultSearch;
 }
};

// ORDENAR ASCENDENTE/DESCENDENTE POR NOMBRE y/o NUMERO
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

// CALCULO DE PORCENTAJE SEGUN TIPO y/o HUEVO
// arr sera el arreglo resultnte del filtrado por tipo
const calcPercent = (arr, data) =>{
    let resultCalc = Math.round((arr.length * 100) / data.length );
    return resultCalc;
} 
window.calcPercent= calcPercent;
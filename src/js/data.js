// FILTRO POR TIPO
const filterData = {
 type: (dataPokemon,condition) => {
    const resultFilter = dataPokemon.filter(element =>{
        return element.type.includes(condition);
    }) 
    return resultFilter;
 },
 eggs: (dataPokemon, condition) => {
    const resultFilter = dataPokemon.filter(element => {
        return element.egg.includes(condition);
    })
    return resultFilter;
 }
};
window.filterData = filterData;
// fin filtro por tipo
name: (dataPokemon, condition) => {
    const resultFilter = dataPokemon.filter(element => {
        return element.name.includes(condition);
    })
    return resultFilter;
}
// ORDEN AZ
const sortData = (data, sortBy, sortOrder) => {

    let dataSort;

    if (sortOrder === "ascaz") {
        dataSort = data.sort((a, b) => {
            return a[sortBy].localeCompare(b[sortBy]);
        });

    }

    else if (sortOrder === "descza") {
        dataSort = data.sort((a, b) => {
            return b[sortBy].localeCompare(a[sortBy]);
        });

    }

    else if (sortOrder === "ascnum") {
        dataSort = data.sort((a, b) => {
            return a[sortBy].localeCompare(b[sortBy]);
        });

    }

    else if (sortOrder === "descnum") {
        dataSort = data.sort((a, b) => {
            return b[sortBy].localeCompare(a[sortBy]);
        });

    }

    return dataSort;

}




window.filterData = filterData;

window.sortData = sortData;
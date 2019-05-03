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
        return element.eggs.includes(condition);
    })
    return resultFilter;
 }
};
window.filterData = filterData;
// fin filtro por tipo

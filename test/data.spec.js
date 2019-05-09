global.window = global;
global.assert = require('chai').assert;
require('../src/js/data.js')
require('./data.spec.js');

// DECLARACIÓN DE ARRAY CON DATA PARA TEST
const data = [{
        "id": 1,
        "num": "001",
        "name": "Bulbasaur",
        "type": ["Grass", "Poison"],
        "egg": "2 km"
        }, {
        "id": 2,
        "num": "002",
        "name": "Ivysaur",
        "type": ["Grass", "Poison"],
        "egg": "Not in Eggs"
        }, {
        "id": 3,
        "num": "003",
        "name": "Venusaur",
        "type": ["Grass", "Poison"],
        "egg": "Not in Eggs"
        }, {
        "id": 4,
        "num": "004",
        "name": "Charmander",
        "type": ["Fire"],
        "egg": "2 km"
      }];

describe('filterData', () => {
  it('debería ser un objeto', () => {
    assert.equal(typeof window.filterData, 'object');
  });
});

describe('filterData.type', () => {
  it('debería ser una función', () => {
    assert.equal(typeof window.filterData.type, 'function');
  });

  it('Deberia retornar el objeto Charmander al filtrar por tipo "Fire" ', () => {
    assert.deepEqual(window.filterData.type(data, 'Fire'), [ data[3] ]);
  });

  it('Deberia retornar el objeto Charmander al filtrar por huevo "2 km" ', () => {
      assert.deepEqual(window.filterData.eggs(data, '2 km'), [ data[0], data[3] ]);
  });
});

describe('sortData', () => {

  it('Debería ser una función', () => {
      assert.equal(typeof sortData, 'function');
  });

  it('debería retornar el objeto ordenado de la A-Z', () => {
      assert.deepEqual(window.sortData(data, 'name', 'asc'), [
          data[0], data[1], data[2], data[3]]);
  });

  it('debería retornar el objeto ordenado de la Z-A', () => {
      assert.deepEqual(window.sortData(data, 'name', 'desc'), [
          data[0], data[1], data[2], data[3]]);
  });

  it('debería retornar el objeto ordenado por número: ascendente', () => {
      assert.deepEqual(window.sortData(data, 'num', 'numasc'), [
          data[0], data[1], data[2], data[3]]);
  });

  it('debería retornar el objeto ordenado por número: descendente', () => {
      assert.deepEqual(window.sortData(data, 'num', 'numdesc'), [
          data[0], data[1], data[2], data[3]]);
  });
});
describe('searchData', () => {
  it('Debería ser un objeto', () => {
    assert.equal(typeof window.searchData, 'object');
  });
  it('Debería retornarme el objeto solicitado por su nombre: Bulbasaur', () => {
    assert.deepEqual(window.searchData.name(data, 'Bulbasaur'), [data[3]]);
  });
});

describe('calcPercent', () => {
  it('Debería ser una función', () => {
    assert.equal(typeof window.calcPercent, 'function');
  });
  it('Debería retornar para tipo Fire el porcentaje: 25%', () => {
    assert.deepEqual(window.calcPercent(data, 'Fire')[data[0]]);
  });
});
global.window = global;
global.assert = require('chai').assert;
//require('../src/data/pokemon/pokemon');
require('./data.spec.js');

// describe('example', () => {
//   it('debería ser una función', () => {
//     assert.equal(typeof example, 'function');
//   });

//   it('debería retornar "example"', () => {
//     assert.equal(example(), 'example');
//   });
// })

// DECLARACIÓN DE ARRAY CON DATA PARA TEST
const data = [{
  "pokemon": [{
    "id": 1,
    "num": "001",
    "name": "Bulbasaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "0.71 m",
    "weight": "6.9 kg",
    "candy": "Bulbasaur Candy",
    "candy_count": 25,
    "egg": "2 km",
    "spawn_chance": 0.69,
    "avg_spawns": 69,
    "spawn_time": "20:00",
    "multipliers": [1.58],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "next_evolution": [{
      "num": "002",
      "name": "Ivysaur"
    }, {
      "num": "003",
      "name": "Venusaur"
    }]
  }, {
    "id": 2,
    "num": "002",
    "name": "Ivysaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "0.99 m",
    "weight": "13.0 kg",
    "candy": "Bulbasaur Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.042,
    "avg_spawns": 4.2,
    "spawn_time": "07:00",
    "multipliers": [
      1.2,
      1.6
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "prev_evolution": [{
      "num": "001",
      "name": "Bulbasaur"
    }],
    "next_evolution": [{
      "num": "003",
      "name": "Venusaur"
    }]
  }, {
    "id": 3,
    "num": "003",
    "name": "Venusaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "2.01 m",
    "weight": "100.0 kg",
    "candy": "Bulbasaur Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.017,
    "avg_spawns": 1.7,
    "spawn_time": "11:30",
    "multipliers": null,
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "prev_evolution": [{
      "num": "001",
      "name": "Bulbasaur"
    }, {
      "num": "002",
      "name": "Ivysaur"
    }]
  }, {
    "id": 4,
    "num": "004",
    "name": "Charmander",
    "img": "http://www.serebii.net/pokemongo/pokemon/004.png",
    "type": [
      "Fire"
    ],
    "height": "0.61 m",
    "weight": "8.5 kg",
    "candy": "Charmander Candy",
    "candy_count": 25,
    "egg": "2 km",
    "spawn_chance": 0.253,
    "avg_spawns": 25.3,
    "spawn_time": "08:45",
    "multipliers": [1.65],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "next_evolution": [{
      "num": "005",
      "name": "Charmeleon"
    }, {
      "num": "006",
      "name": "Charizard"
    }]
  }
  ]
}];

describe('filterData', () => {

  it('Deberia ser una function', () => {
    assert.equal(typeof filterData.type, 'function');
  });

  it('Deberia retornar el objeto Charmander al filtrar por tipo "Fire" ', () => {
    assert.deepEquial(window.filterData.type(data, 'Fire'), [data[3]]);
  });

  it('Deberia retornar el objeto Charmander al filtrar por huevo "2 km" ', () => {
    assert.deepEquial(window.filterData.eggs(data, '2 km'), [data[0], data[3]]);
  });
});

describe('sortData', () => {

  it('Debería ser una función', () => {
    assert.equal(typeof sortData, 'function');
  });

  it('debería retornar el objeto ordenado de la A-Z', () => {
    assert.deepEqual(window.sortData(data, 'name', 'asc'), [
      data[0], data[3], data[1], data[2]]);
  });

  it('debería retornar el objeto ordenado de la Z-A', () => {
    assert.deepEqual(window.sortData(data, 'name', 'desc'), [
      data[2], data[1], data[3], data[0]]);
  });

  it('debería retornar el objeto ordenado por número: ascendente', () => {
    assert.deepEqual(window.sortData(data, 'num', 'numasc'), [
      data[0], data[1], data[2], data[3]]);
  });

  it('debería retornar el objeto ordenado por número: descendente', () => {
    assert.deepEqual(window.sortData(data, 'num', 'numdesc'), [
      data[3], data[2], data[1], data[0]]);
  });
});
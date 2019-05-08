global.window = global;
global.assert = require('chai').assert;
require('../src/data/pokemon/pokemon.js');
require('./data.spec.js');


describe('filterData', () => {
  it('debería ser un objeto', () => {
    assert.typeOf (window.filterData, 'Object');
  });
});

describe('sortData', () => {
  it('debería ser una function', () => {
    assert.equal(typeof sortData, 'function');
  });
});
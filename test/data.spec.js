global.window = global;
global.assert = require('chai').assert;
require('../src/data/pokemon/pokemon.js');
require('./data.spec.js');


describe('filterData', () => {
  it('debería ser un objeto', () => {
    assert.equal(typeof filterData, 'object');
  });
});
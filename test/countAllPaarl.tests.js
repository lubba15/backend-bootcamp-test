const assert = require('assert');
const countAllPaarl = require('../countAllPaarl');

describe('function countAllPaarl', function() {

  it(' should returns the number of registration numbers in the string for Paarl', function() {
    assert.equal(countAllPaarl('CJ 123'), 1);

  });
});

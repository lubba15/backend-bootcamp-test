const assert = require('assert');
const yearsAgo = require('../yearsAgo');

describe('yearsAgo', function() {

  it(' should  takes in a year and return how many years ago that was', function() {
    assert.equal(yearsAgo('2013'), 4);

  });
});

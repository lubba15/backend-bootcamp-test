const assert = require('assert')
var greet = require('../greet')

describe('greet', function() {

  it('should greet Lubba correctly', function() {
    assert.equal('Hello, lubba', greet('lubba'));
  });
  it('should greet Xola correctly', function() {
    assert.equal('Hello, Xola', greet('Xola'));
  });
});

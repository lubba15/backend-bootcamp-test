const assert = require('assert');
const totalPhoneBill = require('../totalPhoneBill');

describe('totalPhoneBill', function() {

  it(' should return R7.45', function() {
    assert.equal(totalPhoneBill('Sms, Call'), 'R0.00');

  });
  it('should return R7.45', function() {
    assert.equal(totalPhoneBill('Sms, Call'), 'R0.00');
  });
});

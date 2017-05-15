const assert = require('assert');
const findItemsOver = require('../findItemsOver');

describe('findItemsOver', function() {

  it('should reurn itemList', function() {
    var itemList = [{
        name: 'apples',
        qty: 10
      },
      {
        name: 'pears',
        qty: 37
      },
      {
        name: 'bananas',
        qty: 27
      },
      {
        name: 'apples',
        qty: 3
      },
    ];
    assert.deepEqual(findItemsOver(itemList), []);

  });
});

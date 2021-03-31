var assert = require('assert');
var myFunction = require('../index.js');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });

    it('should be equal to 1', function () {
        assert.equal(myFunction(), 1)
    });
  });
});
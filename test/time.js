var Time = require('../lib/time.js');
describe("Time", function() {
  describe('parsing', function(){
    it('should parse a start time from a string formatted either hh:mm:ss or hhmmss', function(){
      var t = new Time('103000');
      t.toString().should.equal('10:30:00');
    });
  });
});

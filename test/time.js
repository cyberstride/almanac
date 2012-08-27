var Time = require('../lib/time.js');
describe("Time", function() {
  it('should parse a start time from a string formatted either hh:mm:ss or hhmmss', function(){
    var t = new Time('103000');
    t.toString().should.equal('10:30:00');
  });
  it('should convert time into a number of seconds', function(){
    var t = new Time("02:30:10");
    t.should.equal(9010);
  });
  it('should take a number of seconds and calculate hours, minutes, and seconds', function(){
    var t = new Time(9010);
    t.toString().should.equal('02:30:10');
  });
});

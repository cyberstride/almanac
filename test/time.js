var should = require('should');
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
  describe('arithmetic', function(){
    it('should add two Times to equal the result in seconds', function(){
      var t1 = new Time("02:30:10");
      var t2 = new Time("01:30:50");
      var result = (t1+t2);
      result.should.equal(14460); //4 hours, 1 minute
      var timeResult = new Time(result);
      timeResult.should.equal(new Time('04:01:00'))
    });
  });
});

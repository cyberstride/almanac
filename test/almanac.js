require('should');
var almanac = require('../')
  , moment = require('moment')
  , Time = require('../lib/time')
  , should = require('should');

describe('Almanac', function(){
  var schedule = {};
  describe('parsing', function(){
    describe('dates', function(){
      it('should parse dates without providing a format', function(){
        schedule = almanac({startDate:'10-21-1983', endDate:'10-21-2013' });
        schedule.startDate.toString().should.equal(moment(new Date(1983,9,21)).toString());
        schedule.endDate.toString().should.eql(moment(new Date(2013, 9, 21)).toString());
      });
      it('should parse dates with provided format', function(){
        schedule = almanac({startDate:'1983-10-21', endDate:'2013-10-21', format:'YYYY-MM-DD' });
        schedule.startDate.toString().should.eql(moment(new Date(1983, 9, 21)).toString());
        schedule.endDate.toString().should.equal(moment(new Date(2013, 9, 21)).toString());
      });
    });
    describe('times', function(){
      it('should get start time from start date if startTime is not provided and startDate has a time greater than 00:00:00', function(){
        schedule = almanac({startDate:'1983-10-21 103000', endDate:'2013-10-21', format:'YYYY-MM-DD HHmmss' });
        schedule.startTime.toString().should.equal('10:30:00');
      });

      it('should set the end time based on duration if provided', function(){
        schedule = almanac({startDate:'1983-10-21 083000', duration:'01:30:00', format:'YYYY-MM-DD HHmmss' });
        schedule.endTime.toString().should.equal('10:00:00');
      });

      it('should get endTime from endDate if endTime is not provided and endDate has a time greater than 00:00:00', function(){
        schedule = almanac({endDate:'2013-10-21 083000', format:'YYYY-MM-DD HHmmss' });
        schedule.endTime.toString().should.equal('08:30:00');
      });
      it('should use the beginning of the day if startTime is not set and startDate does not have a time', function(){
        schedule = almanac({startDate:'1983-10-21', endDate:'2013-10-21', format:'YYYY-MM-DD HHmmss' });
        schedule.startTime.toString().should.equal('00:00:00');
      });
    });
  });
  describe('with type single', function(){
    before(function(){
      var start = moment(new Date()).add('hours', 2);
      schedule = almanac({type:'single', startDate: start});
      schedule.duration = '01:20:05';
    });
    describe('endsAt', function(){
      it('should calculate based on duration and startsAt', function(){
        var expectedResult = moment('09/01/2012 06:30:12').toDate();
        schedule = almanac( { startDate:'09/01/2012 00:00:00', duration:'06:30:12', type:'single'});
        schedule.endsAt().should.equal(expectedResult);
      });
    })
    describe('calling next',function(){
      it('should return null if a date is not a param and current date is beyond the endDate of the occasion', function(){
        // if an almanac has type single then there is not a next occurrence beyond the startDate
        schedule = almanac({endDate:'10-10-1983', type:'single'});
        schedule.next(function(err, nxt){
          should.not.exist(nxt);
        });
      });
      it('should return itself if a date is not a param but current date is not beyond the startDate of the occasion', function(done){
        schedule = almanac({startDate:'10-10-2013', type:'single', duration:'10:00:00'})
        schedule.next(function(err, nxt){
          nxt.should.equal(schedule);
        });
        done(new Error('should not make it here'));
      });
    });
    describe('occursAt', function(){
      it('should determine if the date is within the occassions occurence', function(){
        schedule = almanac({startDate:'09/01/2012 08:00:00', duration:'06:30:00', type:'single'});
        schedule.occursAt('09/01/2012 10:00:00').should.be.true;
        schedule.occursAt('09/01/2013 10:00:00').should.be.false;
      })
    })
    describe('occursWithin', function(){
      describe('dates', function(){
        it('should return true if the occassion startDate falls within a range of from and to dates', function(done){
          schedule = almanac({startDate:'09/01/2012 08:00:00', duration:'06:30:00', type:'single'});
          schedule.occursWithin('09/01/2012 10:00:00', '09/01/2012 12:30:00').should.be.true;
          schedule.occursWithin('09/01/2013 10:00:00', '09/01/2013 12:30:00').should.be.false;
          schedule.occursWithin({ from:'08/01/2012'
                          , to: '09/02/2012'
                          , callback: done
                          });
        });
      });
    });
  });
});

    /*
    it('should return total requested occasions if they exist', function(){
    });
    it('should return only remaining occasions if total exceeds that amount', function(){
    });
    });
    describe('previous', function(){
      it('should return the previous moment', function(){
      });
      it('should return total requested occasions if they exist', function(){
      });
      it('should return only remaining occasions if total exceeds that amount', function(){
      });
    });
    describe('matches', function(){
      it('should match an occasion that overlaps a moment', function(){
      });
      it('should match an occassion that overlaps a range of two moments', function(){
      });
      it('should match an occasion that overlaps another occasion', function(){
      });
      it('should not match an occasion that does not overlap a moment', function(){
      });
      it('should not match an occasion that does not overlap a range of two moments', function(){
      });
      it('should not match an occasion that does not overlap another occasion', function(){
      });
    });
  });
  describe('daily', function(){
    describe('next', function(){
      it('should return the next occasion', function(){
      });
      it('should return total requested occasions if they exist', function(){
      });
      it('should return only remaining occasions if total exceeds that amount', function(){
      });
    });
    describe('previous', function(){
      it('should return the previous moment', function(){
      });
      it('should return total requested occasions if they exist', function(){
      });
      it('should return only remaining occasions if total exceeds that amount', function(){
      });
    });
    describe('matches', function(){
      it('should match an occasion that overlaps a moment', function(){
      });
      it('should match an occassion that overlaps a range of two moments', function(){
      });
      it('should match an occasion that overlaps another occasion', function(){
      });
      it('should not match an occasion that does not overlap a moment', function(){
      });
      it('should not match an occasion that does not overlap a range of two moments', function(){
      });
      it('should not match an occasion that does not overlap another occasion', function(){
      });
    });
  });
  describe('weekly', function(){
    describe('next', function(){
      it('should return the next occasion', function(){
      });
      it('should return total requested occasions if they exist', function(){
      });
      it('should return only remaining occasions if total exceeds that amount', function(){
      });
    });
    describe('previous', function(){
      it('should return the previous moment', function(){
      });
      it('should return total requested occasions if they exist', function(){
      });
      it('should return only remaining occasions if total exceeds that amount', function(){
      });
    });
    describe('matches', function(){
      it('should match an occasion that overlaps a moment', function(){
      });
      it('should match an occassion that overlaps a range of two moments', function(){
      });
      it('should match an occasion that overlaps another occasion', function(){
      });
      it('should not match an occasion that does not overlap a moment', function(){
      });
      it('should not match an occasion that does not overlap a range of two moments', function(){
      });
      it('should not match an occasion that does not overlap another occasion', function(){
      });
    });
  });
  describe('daymonthly', function(){
    describe('next', function(){
      it('should return the next occasion', function(){
      });
      it('should return total requested occasions if they exist', function(){
      });
      it('should return only remaining occasions if total exceeds that amount', function(){
      });
    });
    describe('previous', function(){
      it('should return the previous moment', function(){
      });
      it('should return total requested occasions if they exist', function(){
      });
      it('should return only remaining occasions if total exceeds that amount', function(){
      });
    });
    describe('matches', function(){
      it('should match an occasion that overlaps a moment', function(){
      });
      it('should match an occassion that overlaps a range of two moments', function(){
      });
      it('should match an occasion that overlaps another occasion', function(){
      });
      it('should not match an occasion that does not overlap a moment', function(){
      });
      it('should not match an occasion that does not overlap a range of two moments', function(){
      });
      it('should not match an occasion that does not overlap another occasion', function(){
      });
    });
  });
  describe('datemonthly', function(){
    describe('next', function(){
      it('should return the next occasion', function(){
      });
      it('should return total requested occasions if they exist', function(){
      });
      it('should return only remaining occasions if total exceeds that amount', function(){
      });
    });
    describe('previous', function(){
      it('should return the previous moment', function(){
      });
      it('should return total requested occasions if they exist', function(){
      });
      it('should return only remaining occasions if total exceeds that amount', function(){
      });
    });
    describe('matches', function(){
      it('should match an occasion that overlaps a moment', function(){
      });
      it('should match an occassion that overlaps a range of two moments', function(){
      });
      it('should match an occasion that overlaps another occasion', function(){
      });
      it('should not match an occasion that does not overlap a moment', function(){
      });
      it('should not match an occasion that does not overlap a range of two moments', function(){
      });
      it('should not match an occasion that does not overlap another occasion', function(){
      });
    });
  });
  describe('multiple rules', function(){
    describe('next', function(){
      it('should return the next occasion', function(){
      });
      it('should return total requested occasions if they exist', function(){
      });
      it('should return only remaining occasions if total exceeds that amount', function(){
      });
    });
    describe('previous', function(){
      it('should return the previous moment', function(){
      });
      it('should return total requested occasions if they exist', function(){
      });
      it('should return only remaining occasions if total exceeds that amount', function(){
      });
    });
    describe('matches', function(){
      it('should match an occasion that overlaps a moment', function(){
      });
      it('should match an occassion that overlaps a range of two moments', function(){
      });
      it('should match an occasion that overlaps another occasion', function(){
      });
      it('should not match an occasion that does not overlap a moment', function(){
      });
      it('should not match an occasion that does not overlap a range of two moments', function(){
      });
      it('should not match an occasion that does not overlap another occasion', function(){
      });
    });
  });
  describe('matching helpers', function(){
    describe('occursOn', function(){
      it('should check if the almanac overlaps the start and end of the given date', function(){
      });
    });
    describe('occurringNow', function(){
      it('should check if the almanac is currently occuring', function(){
      });
    });
    describe('occursAt', function(){
      it('should check if the almanac occurs at a specific time', function(){
      });
    });
    describe('occursDuring', function(){
      it('should check if the almanac is occurring between a start and end date', function(){
      });
      it('should assume to check the full date if a start and end time are not provided', function(){
      });
    });
  });
});
*/


require('should');
var almanac = require('../')
, moment = require('moment');

describe('Almanac', function(){
  describe('parsing', function(){
    describe('dates', function(){
      it('should parse dates without providing a format', function(){
        var schedule = almanac({startDate:'10-21-1983', endDate:'10-21-2013' });
        schedule.startDate.toString().should.equal(moment(new Date(1983,9,21)).toString());
        schedule.endDate.toString().should.eql(moment(new Date(2013, 9, 21)).toString());
      });
      it('should parse dates with provided format', function(){
        var schedule = almanac({startDate:'1983-10-21', endDate:'2013-10-21', dateFormat:'YYYY-MM-DD' });
        schedule.startDate.toString().should.eql(moment(new Date(1983, 9, 21)).toString());
        schedule.endDate.toString().should.equal(moment(new Date(2013, 9, 21)).toString());
      });
    });
    describe('times', function(){
      it('should get start time from start date if startTime is not provided and startDate has a time greater than 00:00:00', function(){
        var schedule = almanac({startDate:'1983-10-21 103000', endDate:'2013-10-21', dateFormat:'YYYY-MM-DD HHmmss' });
        schedule.startTime.toString().should.equal('10:30:00');
      });

      it('should set the end time based on duration if provided', function(){
        var schedule = almanac({startDate:'1983-10-21 083000', duration:'01:30:00', dateFormat:'YYYY-MM-DD HHmmss' });
        schedule.endTime.toString().should.equal('10:00:00');
      });

      it('should get end time from end date if endTime is not provided and endDate has a time greater than 00:00:00', function(){
      });
      it('should use the beginning of the day if startTime is not set and startDate does not have a time', function(){
      });
    });
  });

  describe('scheduling', function(){
    describe('of a single occasion', function(){
      describe('calling next()', function(){
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
});


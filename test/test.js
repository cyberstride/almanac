var almanac = require('../lib/almanac.js')
  , moment = require('moment')
  , should = require('should');

describe('parsing', function(){
  describe('dates', function(){
    it('should parse dates without providing a format', function(){
      var schedule = almanac({start_date:'10-21-1983', end_date:'10-21-2013' });
      console.log('start_date:');
      var start_date = moment(new Date(1983,9,21));
      console.log(start_date)
      schedule.start_date.toString().should.equal(start_date.toString());
      schedule.end_date.toString().should.eql(moment(new Date(2013, 9, 21)).toString());
    });
    it('should parse dates with provided format', function(){
      var schedule = almanac({start_date:'1983-10-21', end_date:'2013-10-21', date_format:'YYYY-MM-DD' });
      schedule.start_date.toString().should.eql(moment(new Date(1983, 9, 21)).toString());
      schedule.end_date.should.eql(moment(new Date(2013, 9, 21)));
    });
  });
  describe('times', function(){
    it('should get start time from start date if start_time is not provided and start_date has a time greater than 00:00:00', function(){
      var schedule = almanac({start_date:'1983-10-21 10:30:00', end_date:'2013-10-21', date_format:'YYYY-MM-DD HH:mm:ss' });
      schedule.start_time.should
    });
    it('should get end time from end_time is not available', function(){
    });
    it('should get end time from end date if end_time is not provided and end_date has a time greater than 00:00:00', function(){
    });
    it('should use the beginning of the day if start_time is not set and start_date does not have a time', function(){
    });
  });
});

describe('scheduling', function(){
  describe('single', function(){
    before(function(){
    });
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
  describe('daily', function(){
    before(function(){
    });
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
    before(function(){
    });
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
    before(function(){
    });
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
    before(function(){
    });
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
    before(function(){
    });
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
      it('should check if the almanac occurs at a specific time')
    });
    describe('occursDuring', function(){
      it('should check if the almanac is occurring between a start and end date', function(){
      });
      it('should assume to check the full date if a start and end time are not provided', function(){
      });
    });
  });
});

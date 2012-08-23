var almanac = require('./lib/almanac.js')
  , moment = require('moment');

describe('parsing', function(){
  describe('dates', function(){
    it('should parse dates without providing a format', function(){
      var schedule = almanac({start_date:'10-21-1983', end_date:'10-21-2013' });
      schedule.start_date.should.eql(moment(new Date(1983, 10, 21)));
      schedule.end_date.should.eql(moment(new Date(2013, 10, 21)));
    });
    it('should parse dates with provided format', function(){
      var schedule = almanac({start_date:'1983-10-21', end_date:'2013-10-21', date_format:'YYYY-MM-DD' });
      schedule.start_date.should.eql(moment(new Date(1983, 10, 21)));
      schedule.end_date.should.eql(moment(new Date(2013, 10, 21)));
    });
  });
  describe('times', function(){
    it('should get start time from start date if start_time is not provided and start_date has a time greater than 00:00:00', function(){
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
      it('should return the next moment', function(){
      });
      it('should return total requested moments if they exist', function(){
      });
      it('should return only remaining moments if total exceeds that amount', function(){
      });
    });
    describe('previous', function(){
      it('should return the previous moment', function(){
      });
      it('should return total requested moments if they exist', function(){
      });
      it('should return only remaining moments if total exceeds that amount', function(){
      });
    });
    describe('matches', function(){
      it('should match a moment that overlaps', function(){
      });
      it('should match a range that overlaps', function(){
      });
      it('should not match a moment that does not overlap', function(){
      });
      it('should not match a range that does not overlap', function(){
      });
    });
  });
  describe('daily', function(){
    before(function(){
    });
    describe('next', function(){
      it('should return the next moment', function(){
      });
      it('should return total requested moments if they exist', function(){
      });
      it('should return only remaining moments if total exceeds that amount', function(){
      });
    });
    describe('previous', function(){
      it('should return the previous moment', function(){
      });
      it('should return total requested moments if they exist', function(){
      });
      it('should return only remaining moments if total exceeds that amount', function(){
      });
    });
    describe('matches', function(){
      it('should match a moment that overlaps', function(){
      });
      it('should match a range that overlaps', function(){
      });
      it('should not match a moment that does not overlap', function(){
      });
      it('should not match a range that does not overlap', function(){
      });
    });
  });
  describe('weekly', function(){
    before(function(){
    });
    describe('next', function(){
      it('should return the next moment', function(){
      });
      it('should return total requested moments if they exist', function(){
      });
      it('should return only remaining moments if total exceeds that amount', function(){
      });
    });
    describe('previous', function(){
      it('should return the previous moment', function(){
      });
      it('should return total requested moments if they exist', function(){
      });
      it('should return only remaining moments if total exceeds that amount', function(){
      });
    });
    describe('matches', function(){
      it('should match a moment that overlaps', function(){
      });
      it('should match a range that overlaps', function(){
      });
      it('should not match a moment that does not overlap', function(){
      });
      it('should not match a range that does not overlap', function(){
      });
    });
  });
  describe('daymonthly', function(){
    before(function(){
    });
    describe('next', function(){
      it('should return the next moment', function(){
      });
      it('should return total requested moments if they exist', function(){
      });
      it('should return only remaining moments if total exceeds that amount', function(){
      });
    });
    describe('previous', function(){
      it('should return the previous moment', function(){
      });
      it('should return total requested moments if they exist', function(){
      });
      it('should return only remaining moments if total exceeds that amount', function(){
      });
    });
    describe('matches', function(){
      it('should match a moment that overlaps', function(){
      });
      it('should match a range that overlaps', function(){
      });
      it('should not match a moment that does not overlap', function(){
      });
      it('should not match a range that does not overlap', function(){
      });
    });
  });
  describe('datemonthly', function(){
    before(function(){
    });
    describe('next', function(){
      it('should return the next moment', function(){
      });
      it('should return total requested moments if they exist', function(){
      });
      it('should return only remaining moments if total exceeds that amount', function(){
      });
    });
    describe('previous', function(){
      it('should return the previous moment', function(){
      });
      it('should return total requested moments if they exist', function(){
      });
      it('should return only remaining moments if total exceeds that amount', function(){
      });
    });
    describe('matches', function(){
      it('should match a moment that overlaps', function(){
      });
      it('should match a range that overlaps', function(){
      });
      it('should not match a moment that does not overlap', function(){
      });
      it('should not match a range that does not overlap', function(){
      });
    });
  });
  describe('multiple rules', function(){
    before(function(){
    });
    describe('next', function(){
      it('should return the next moment', function(){
      });
      it('should return total requested moments if they exist', function(){
      });
      it('should return only remaining moments if total exceeds that amount', function(){
      });
    });
    describe('previous', function(){
      it('should return the previous moment', function(){
      });
      it('should return total requested moments if they exist', function(){
      });
      it('should return only remaining moments if total exceeds that amount', function(){
      });
    });
    describe('matches', function(){
      it('should match a moment that overlaps', function(){
      });
      it('should match a range that overlaps', function(){
      });
      it('should not match a moment that does not overlap', function(){
      });
      it('should not match a range that does not overlap', function(){
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

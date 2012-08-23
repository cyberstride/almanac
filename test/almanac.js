describe('almanac', function(){
  describe('parsing', function(){
    it('should parse dates from a string without a format provided', function(){
    });
    it('should parse dates from a string with the provided format', function(){
    });
    it('should get start time from start_time is not available', function(){
    });
    it('should get end time from end_time is not available', function(){
    });
    it('should use the end of the day if end_time is not set and end_date does not have a time', function(){
    });
    it('should use the beginning of the day if start_time is not set and start_date does not have a time', function(){
    });
  });
  describe('single', function(){
    before(function(){
    });
    it('should match a range', function(){
    });
    it('should return the correct set of moments', function(){
    });
  });
  describe('daily', function(){
    before(function(){
    });
    it('should match a moment that overlaps', function(){
    });
    it('should match a range that overlaps', function(){
    });
    it('should not match a moment that does not overlap', function(){
    });
    it('should not match a range that does not overlap', function(){
    });
    it('should return the correct set of moments', function(){
    });
  });
  describe('weekly', function(){
    before(function(){
    });
    it('should have the correct interval', function(){
    });
    it('should match a moment that overlaps', function(){
    });
    it('should match a range that overlaps', function(){
    });
    it('should not match a moment that does not overlap', function(){
    });
    it('should not match a range that does not overlap', function(){
    });
  });
  describe('daymonthly', function(){
    before(function(){
    });
    it('should have the correct interval', function(){
    });
    it('should match a moment that overlaps', function(){
    });
    it('should match a range that overlaps', function(){
    });
    it('should not match a moment that does not overlap', function(){
    });
    it('should not match a range that does not overlap', function(){
    });
  });
  describe('datemonthly', function(){
    before(function(){
    });
    it('should have the correct interval', function(){
    });
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

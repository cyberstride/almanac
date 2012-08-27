var moment = require('moment')
  , _ = require('underscore')
  , Time = require('./time');

module.exports = function(options){
  return new Almanac(options);
}

var Almanac = module.exports.Almanac = function(options){
  options = options || {};
  var dateFormat = options.dateFormat || options.format;
  this.startDate = getDate(options.startDate || new Date(), dateFormat);
  this.endDate = getDate(options.endDate || new Date(), dateFormat);
  this.startTime = new Time(options.startTime || this.startDate);
  this.endTime = getEndTime(options, this.startTime, this.startDate);
}
function dateFormat(options){
  return options.dateFormat || options.format;
}
function getDate(date, format){
  if(_.isString(date)){
    date = getDateFromString(date, format);
  }
  else if(_.isDate(date)){
    date = moment(date);
  }
  if(moment.isMoment(date)){
    return date;
  }
  else {
    throw new Error("Unknown date format");
  }
}

function getDateFromString(date, format){
  return (format && _.isString(format)) ? moment(date, format) : moment(date);
}

function getEndTime(options, startTime, startDate){
  var time = {};
  if(options.endTime){
    time = new Time(options.endTime);
  }
  else if(options.duration){
    var duration = new Time(options.duration);
    time = new Time(duration + startTime);
  }
  else if(options.endDate){
    var endDate = moment(options.endDate, dateFormat(options));
      var endDateTime = new Time(endDate);
      if(endDateTime > 0){
        time = endDateTime;
      }
  }
  else {
    var eod = moment(startDate).endOf('day');
    time = new Time(eod);
}
  return time;
}

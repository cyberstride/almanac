var moment = require('moment')
  , _ = require('underscore');

var Almanac = module.exports.Almanac = function(options){
  options = options || {};
  this.start_date = getDate(options.start_date || new Date(), options.dateFormat || options.format);
  this.end_date = getDate(options.end_date || new Date(), options.dateFormat || options.format);
};

module.exports = function(options){
  return new Almanac(options);
}

function getDate(date, format){
  if(_.isString(date)){
    date = getDateFromString(date, format);
  }
  else if(_.isDate(date)){
    date = moment(date);
  }
  else if(moment.isMoment(date)){ }
  else {
    throw new Error("Unknown date format");
  }
  console.log(date);
  console.log('date.startOf("day"): ' + date.startOf('day'));
  console.log('date: ' + moment.unix(date));
  return date.sod();
}

function getDateFromString(date, format){
  return (format && _.isString(format)) ? moment(date, format) : moment(date);
}

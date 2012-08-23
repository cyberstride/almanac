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
  if(moment.isMoment(date)){ 
    console.log("before sod:");
    console.log(date);
    date = date.sod();
    console.log("after sod:");
    console.log(date);
  }
  else {
    throw new Error("Unknown date format");
  }
  return date;
}

function getDateFromString(date, format){
  return (format && _.isString(format)) ? moment(date, format) : moment(date);
}

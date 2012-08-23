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
  }
}

var moment = require('moment')
  , _ = require('underscore')
  , Time = require('./time');

module.exports = function(options){
  return new Almanac(options);
}
var Almanac = module.exports.Almanac = function(options){
  options = options || {};
  this.startDate = getDate(options.startDate, options.format);
  this.endDate = getDate(options.endDate, options.format);
  this.startTime = new Time(options.startTime || this.startDate);
  this.endTime = getEndTime(options, this.startTime, this.startDate);
  this.type = options.type;
  this.occurrences = options.occurrences;
  if(options.duration){
    this.duration = new Time(options.duration);
  }
}
Almanac.prototype.occursWithin = function(fromDate, toDate){
  var callback = _.isFunction(toDate) ? toDate : null;
  var options = _.isObject(fromDate) ? fromDate : {};
  callback = callback || options.callback;
  fromDate = getDate(options.from || fromDate, options.fromat);
  toDate = getDate(options.to || toDate, options.fromat);
  var result = (fromDate && this.occursAt(fromDate)) || (toDate && this.occursAt(toDate));
  return callback ? callback(null, result) : result;
}

Almanac.prototype.occursAt = function(date){
  date = getDate(date);
  return (date >= this.startDate && date <= this.endsAt());
}

Almanac.prototype.next = function(options, callback){
  if(_.isFunction(options)){
    callback = options;
    options = {};
  }
  if(_.isFunction(callback)){
    options.callback = callback;
  }
  options = options || {};
  
  if(_.isFunction(callback)){
    options.callback = callback;
  }
  var occasion = null;
  switch(this.type){
    case('single'):
      occasion = nextSingle(this, options);
      break;
    case('daily'):
      break;
    case('weekly'):
      break;
    case('daymonthly'):
      break;
    case('datemonthly'):
      break;
  }
  callback(null, occasion);
}

Almanac.prototype.endsAt = function(){
  var date;
  if(this.type == 'single'){
    if(_.isDate(this.endDate)){
      date = this.endDate;
    } else if(Time.isTime(this.duration) && (_.isDate(this.startDate) || moment.isMoment(this.startDate))){
      date = moment(this.startDate);
      date.add('seconds', this.duration + 0);

    } else if(_.isDate(this.startsAt)) {
      date = moment(this.startsAt).endOf('day');
    } else {
      return throwError('The almanac does not have a start or an end date.');
    }
  }
  if(date){
    return date;
  }
  return throwError('Could not determine when the almnac ends');
}


function nextSingle(almanac, options){
  options = options || {};
  var date = getDate(options.date || new Date());
  if(date <= almanac.startDate){
    if(_.isFunction(options.callback)){
      return options.callback(null, this);
    } else { return null; }
  }
}

function getDate(date, format){
  if(_.isString(date)){
    date = getDateFromString(date, format);
  } else if(_.isDate(date)){
    date = moment(date);
  }
  if(moment.isMoment(date)){
    return date;
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
    var endDate = moment(options.endDate, options.format);
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

var throwError = function(err, callback){
  if(_.isFunction(callback)){
    return callback(err);
  }
  else {
    throw new Error(err);
  }
}

var moment = require('moment')
  , _ = require('underscore');

module.exports = function(options){
  return new Almanac(options);
}

var Almanac = module.exports.Almanac = function(options){
  options = options || {};
  var timeFormat = options.time_format || options.format;
  var dateFormat = options.dateFormat || options.format;
  this.startDate = getDate(options.startDate || new Date(), dateFormat);
  this.endDate = getDate(options.endDate || new Date(), dateFormat);
  this.startTime = new Time(options.startTime || this.startDate);
  this.endTime = };

function dateFormat(options){
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

var Time = module.exports.Time = function(time){
  console.log(time);
  time = time || {};
  if(_.isString(time)){
    time = time.replace(':', '');
    this.hour= time.substring(0,2)
    this.minute= time.substring(2, 4)
    this.second= time.substring(4,6)
  }
  else if(_.isDate(time)){
    this.hour = time.getHours();
    this.minute = time.getMinutes();
    this.second = time.getSeconds();
  }
  else if(moment.isMoment(time)){
    this.hour = time.hours();
    this.minute = time.minutes();
    this.second = time.seconds();
  }
  else {
    this.hour = time.hour;
    this.minute = time.minute;
    this.second = time.second;
  }
}
Time.prototype.isTime = true;
Time.prototype.toString = function(){
  return _.template('<%= hr %>:<%= min %>:<%= sec %>', 
                          { hr: this.hour || '00'
                          , min:this.minute || '00' 
                          , sec: this.second || '00'
                          });
}
Time.prototype.valueOf = function(){
  var h = this.hour ? this.hour * 3600 : 0;
  var m = this.minute ? this.minute * 60 : 0;
  var s = this.second || 0;
  return h + m + s;
}

function getEndTime(options, startTime){
  if(options.endTime){
    return new Time(options.endTime);
  }
  else if(options.duration){
    var duration = new Time(options.duration);
    return new Time(startTime + duration)
  }
  var endDate = moment(endDate, dateFormat(options));
  else if(endDate){
    var endDateTime = new Time(oendDate);
    return endDateTime > 0 ? endDateTime : endDate.endof('');
  }

}

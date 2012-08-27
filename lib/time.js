var moment = require('moment')
  , _ = require('underscore');
_.str = require('underscore.string');
_.mixin(_.str.exports());

module.exports = function(options){
  return new Time(options);
}
var Time = module.exports.Time = function(time){
  time = time || {};
  if(_.isString(time)){
    this.fromString(time);
  }
  else if(_.isDate(time)){
    this.fromDate(time);
  }
  else if(moment.isMoment(time)){
    this.fromMoment(time);
  }
  else if(_.isNumber(time)){
    this.fromNumber(time);
  }
  else {
    this.fromObj(time);
  }
}
Time.prototype.fromNumber = function(time){
  this.hours = Math.floor(time / 3600);
  time = time % 3600;
  this.minutes = Math.floor(time / 60);
  time = time % 60;
  this.seconds = time;
}
Time.prototype.fromObj = function(time){
    this.hours = time.hours || 0;
    this.minutes = time.minutes || 0;
    this.seconds = time.seconds || 0;
}
Time.prototype.fromString = function(time){
  time = time || "";
  time = time.replace(':', '').replace(':', '');
  this.hours= parseInt(time.substring(0,2), 10);
  this.minutes= parseInt(time.substring(2, 4), 10);
  this.seconds= parseInt(time.substring(4,6), 10);
}
Time.prototype.fromDate = function(date){
  if(_.isDate(date)){
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
  }
}
Time.prototype.fromMoment = function(date){
  if(moment.isMoment(date)){
    this.hours = date.hours();
    this.minutes = date.minutes();
    this.seconds = date.seconds();
  }
}
Time.prototype.isTime = true;
Time.prototype.toString = function(){
  return _.template('<%= hr %>:<%= min %>:<%= sec %>',
                          { hr:   _.pad(this.hours, 2, '0')
                          , min:  _.pad(this.minutes, 2, '0')
                          , sec:  _.pad(this.seconds, 2, '0')
                          });
}
Time.prototype.valueOf = function(){
  var h = parseInt(this.hours, 10) * 3600;
  var m = parseInt(this.minutes, 10) * 60;
  var s = parseInt(this.seconds, 10);
  var result = h + m + s;
  return result;
}


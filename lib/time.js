var moment = require('moment')
  , _ = require('underscore');
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
  this.hour = time / 3600;
  time = time % 3600;
  this.minute = time / 60;
  time = time % 60;
  this.second = time / 60
}
Time.prototype.fromObj = function(time){
    this.hour = time.hour || 0;
    this.minute = time.minute || 0;
    this.second = time.second || 0;
}
Time.prototype.fromString = function(time){
  time = time || "";
  time = time.replace(':', '');
  this.hour= time.substring(0,2);
  this.minute= time.substring(2, 4);
  this.second= time.substring(4,6);
}
Time.prototype.fromDate = function(date){
  if(_.isDate(date)){
    this.hour = date.getHours();
    this.minute = date.getMinutes();
    this.second = date.getSeconds();
  }
}
Time.prototype.fromMoment = function(date){
  if(moment.isMoment(date)){
    this.hour = date.hours();
    this.minute = date.minutes();
    this.second = date.seconds();
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

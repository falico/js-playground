var $ = require('jquery');
var _ = require('lodash');

function timeline(user){
  this.setHeader = function(name = "James Bond"){
      $("#timeline").text(`${name} Timeline is Fantastic!`);
  }

  this.setTimeline = function(){
    _.each(user.messages, function(msg){
      var html = `<li><div class='timeline-heading'><h4 class='timeline-title'>${msg}</h4></div></li>`;
      $(".timeline").append(html);
    });
  }
}

module.exports = timeline;

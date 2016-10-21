// require("../css/style.css");
require('../css/styles.css');

var timeline = require('./timeline.js');
var user = {
  name : "David Quiros",
  messages : [
    "hello",
    "coffee!",
    "good night"
  ]
};

var timelineModule = new timeline(user);
timelineModule.setHeader();
timelineModule.setTimeline();

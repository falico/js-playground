// require("../css/style.css");
require('../css/styles.css');

var timeline = require('./timeline.js');
var user = {
  messages : [
    "hello",
    "coffee!",
    "good night"
  ]
};

var timelineModule = new timeline(user);
timelineModule.setHeader(user.name);
timelineModule.setTimeline();

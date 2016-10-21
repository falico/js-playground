require('../css/styles.css');

var timeline = require('./timeline');
var user = require('./user').USER;

var timelineModule = new timeline(user);
timelineModule.setHeader(user.name);
timelineModule.setTimeline();

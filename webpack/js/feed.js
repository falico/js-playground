require('../css/styles.css');

var timeline = require('./timeline');
var user = require('./user').USER;

var timelineModule = new timeline(user);
timelineModule.setHeader(user.name);
if (__PRERELEASE__) {
  timelineModule.secretFeature(user.messages);
}

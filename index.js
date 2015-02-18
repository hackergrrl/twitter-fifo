#!/usr/bin/env node
var Twit = require('twit');
var mkfifo = require('mkfifo').mkfifoSync;
var fs = require('fs');

var configPath = process.cwd() + '/config.js';

if (!fs.existsSync(configPath)) {
  console.error("No 'config.js' found.");
  console.error();
  console.error("Copy and update 'example_config.js' with your Twitter API credentials.");
  return;
}

var client = new Twit(require(configPath));

// Get screen name (for dir name)
var screenName;
var timeline;
client.get('account/verify_credentials', function(err, res) {
  if (err) throw err;
  screenName = '@' + res.screen_name;

  // Create dir
  try {
    fs.mkdirSync(screenName);
  } catch (e) {
    if (e.code !== 'EEXIST') {
      throw e;
    }
  }

  // Create timeline fifo
  try {
    mkfifo(screenName + '/timeline', 0644);
  } catch (e) {
    if (e.code !== 'EEXIST') {
      throw e;
    }
  }

  // Write stream
  timeline = fs.createWriteStream(screenName + '/timeline');
  (function() {
    var stream = client.stream('user');
    stream.on('tweet', function (tweet) {
      timeline.write('@' + tweet.user.screen_name + ': ' + tweet.text + '\n');
      // console.error('tweet');
    })
    stream.on('connected', function() {
      // console.error('connected');
    });
    stream.on('disconnect', function() {
      // console.error('disconnected');
    });
    stream.on('friends', function(msg) {
      // console.dir(msg.friends);
    });
  })();
});


// var following;

// client.get('followers/ids', function(err, reply) {
//   if(err) return callback(err);

//   following = reply.ids;
// });


// ===============================================================================
// LOAD DATA
// This data source hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends");


// ===============================================================================
// ROUTING[]
// ===============================================================================

module.exports = function (app) {

  // ---------------------------------------------------------------------------
  //this will retrieve the current friends from the friends.js

  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });


  // ---------------------------------------------------------------------------
  //this post will find the closest match, and return it to the html
  //closest match is the sum of the differnce for each question.
  //it will also add the new person to the array

  app.post("/api/friends", function (req, res) {

    friendsData.push(req.body);

    //find the best match
    var matchIndex = 0;
    var matchDif = 99;    //initialize to greater than the max difference possible
    var friendsLength = friendsData.length - 1;
    for (var i = 0; i < friendsLength; i++) {
      var totalDif = 0;
      //loop through the responses and determine the net difference.
      for (var j = 0; j < 10; j++) {
        totalDif += Math.abs(friendsData[i].scores[j] - friendsData[friendsLength].scores[j]);
      }

      //if this is a better match, store those values to return
      if (totalDif < matchDif) {
        matchDif = totalDif;
        matchIndex = i;
      }
    }
    res.json(friendsData[matchIndex]);
  });

  //the view post will return the information about the name that is sent in.
  app.post("/api/view", function (req, res) {

    //see if name is in the friends list
    var matchIndex = friendsData.findIndex(x => x.name.toUpperCase() === req.body.name.toUpperCase());

    var noMatch = { name: 'Nobody was found with that name, try again.', 'photo': '' };

    //return the information if found, otherwise the no-match
    if (matchIndex > -1) {
      res.json(friendsData[matchIndex]);
    }
    else {
      res.json(noMatch);
    }
  });

}; 

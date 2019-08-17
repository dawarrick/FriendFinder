// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends");


// ===============================================================================
// ROUTING[]
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function (req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    friendsData.push(req.body);

    //find the best match
    var matchIndex = 0;
    var matchDif = 0;
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


}; 

// ===============================================================================
// LOAD DATA
// We are linking our routes to our "data" sources.
// These data sources hold arrays of information on friends and their choices
// ===============================================================================

var friendData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/friends... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    
    res.json(friendData);

  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // Then the server saves the data to the friendData array)
  // ---------------------------------------------------------------------------


  // //    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

  app.post("/api/friends", function(req, res) {

    
    console.log(req.body.scores);

    var highest;

    // create array

    // loop through friends

    // get totalDifference score from each friend and place into array

    // find lowest difference by checking first array created

    var highDifference = 100;
    var compatible;
    var loopDifference = 0;

    // loop through each friend
    for (var i = 0; i < friendData.length; i++) {

      // loop through each friends scores
      for (var j = 0; j < friendData[i].scores.length; j++) {
        
        // find difference amount
        loopDifference += Math.abs(req.body.scores[j] - friendData[i].scores[j])
        
        
      }

      // // if the totalDifference was lower for this friend, then change the highest friend
      if (loopDifference < highDifference) {
        // changes the best match
        highDifference = loopDifference;
        
        compatible = i;
      }

      // reset loop difference
      loopDifference = 0;
    }

    console.log(compatible);
    console.log(friendData[compatible].name);
    
    res.json(friendData[compatible]);
    friendData.push(req.body);

    // set outside variable

    // loop through array, if 
// 6. Determine the user's most compatible friend using the following as a guide:

//    * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
//    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
//      * Example: 
//        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
//        * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
//        * Total Difference: **2 + 1 + 2 =** **_5_**
//    * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on. 
//    * The closest match will be the user with the least amount of difference.


  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friendData = [];
    res.json(friendData);
  });
};
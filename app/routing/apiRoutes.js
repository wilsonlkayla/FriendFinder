var vacations = require("../data/vacation");

module.exports = function(app) {
    app.get("/api/vacation", function(req, res){
        res.json(vacation);
    });

    app.post("/api/vacation", function(req, res){

        var userMatch = {
            name: "",
            photo: "",
            vacationDifference: ""
        };

// For-each loop to go through the data in vacation.js to find a match
       vacation.forEach(function(vacation) {
        // Variables for comparing matches
    var matchedScoresArray = [];
    var totalDifference = 40;

    // Function to assist in the addition reduce() below
    function add(total, num) {
        return total + num;
    }

    // Function will loop through each item of the scores arrays
    // from both the stored data and the new user, 
    // and then substracts, absolutes, and then pushes the 
    // new value to the matchedScoresArray
    for (var i = 0; i < vacation.scores.length; i++) {
        matchedScoresArray.push(Math.abs(parseInt(req.body.scores[i]) - parseInt(vacation.scores[i])));

    }

    // This reduces the matchScoresArray into a single value in a variable
    totalDifference = matchedScoresArray.reduce(add, 0);

    // If the above value is smaller than the previous difference...
    if (totalDifference < difference) {
            // Set it as the previous difference...
        difference = totalDifference;
        // And set these variables to the appropriate friend match
        matchName = vacation.name;
        matchPhoto = vacation.photo;
    }
});
// Once the cycle is complete, the match with the least difference will remain,
// and that data will be sent as a json object back to the client
res.json({
    name: matchName,
    photo: matchPhoto
});

// This adds the new users sent data object to friends.js
vacation.push(req.body);
});
}
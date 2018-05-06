var friendsData = require ('../data/friends.js');

module.exports = function(app) {

  app.get('/api/friends', function (req, res) {
    res.json(friendsData)
  });

  app.post('/api/friends', function(req, res) {
    var newScores = req.body.scores;
    var scores = [];
    var friendMatch = 0;

    // Loop through all options from friendsData //
    // ========================================= //
    for (var i = 0; i < friendsData.length; i++) {
      var scoreDiff = 0;

      // Loop through scores of new friend to compare //
      for (var j = 0; j < newScores.length; j++) {
        scoreDiff += (Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(newScores[j])));
      }
      scores.push(scoreDiff)
    }

    // Find the best friend match // 
    // ========================== //
    for (var i = 0; i < scores.length; i++) {
      if (scores[i] <= scores[friendMatch]) {
        friendMatch = i;
      }
    }

    var winner = friendsData[friendMatch];
    res.json(winner)

    friendsData.push(req.body)
  })

}
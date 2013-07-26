var Game = require('../models/game.js');

exports.new = function(req, res) {
    new Game().save();
    res.redirect('../');
}

exports.index = function(req, res) {
    var newestGame;
    Game.find({}).sort({
        createdon: -1
    }).execFind(function(err, games) {
        var newestGame = games[0];
        res.send(newestGame);
    });

    

}

exports.add = function(req, res) {
    var team = parseInt(req.params.team);
    var ammount = parseInt(req.params.ammount);
    res.send('' + team + ' ' + ammount);
}

exports.sub = function(req, res) {
    var team = parseInt(req.params.team);
    var ammount = parseInt(req.params.ammount);
    res.send('' + team + ' ' + ammount);
}
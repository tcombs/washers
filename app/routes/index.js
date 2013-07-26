
/*
 * GET home page.
 */

var Game = require('../models/game.js');
exports.index = function(req, res){
    Game.find(function(err,games) {
        res.render('index', { title: 'Express', games: games });
    });
  
};

exports.new = function(req,res){
    var game = new Game();
    game.save();
    res.send(game);
};
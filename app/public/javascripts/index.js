$(function()
{
    var windowHeight = $(window).height();
    var teamContentHeight = (windowHeight - $('.banner').height()) / 2;

    var $teamOneContainer = $('.team-one-container');
    var $teamTwoContainer = $('.team-two-container');

    var $teamOneScoreHolder = $('.team-one-score');
    var $teamTwoScoreHolder = $('.team-two-score');
    
    
    /*
    *
    *
    * SET UP WEBSOCKET CONNECTION
    *
    *
    */
    var socket = io.connect('http://washers.tcombs.c9.io');
    socket.on('news', function (data) {
        console.log(data);
        socket.emit('my other event', { my: 'data' });
    });
    
    
    
    //Team One Buttons

    $('.plus-three-team-one').click(function(e)
    {
        e.preventDefault();
        //add three to the score
        var currentScore = parseInt($teamOneScoreHolder.text());
        currentScore += 3;
        $teamOneScoreHolder.empty().append(currentScore);
        var url = $(this).attr('href');
        $.get(url, function(game)
        {
            var score = game.teamonescore;
            $teamOneScoreHolder.empty().append(score);
        });
    });


    $('.plus-one-team-one').click(function(e)
    {
        e.preventDefault();
        var currentScore = parseInt($teamOneScoreHolder.text());
        currentScore += 1;
        $teamOneScoreHolder.empty().append(currentScore);
        var url = $(this).attr('href');
        $.get(url, function(game)
        {
            var score = game.teamonescore;
            $teamOneScoreHolder.empty().append(score);
        });
    });


    $('.minus-three-team-one').click(function(e)
    {
        e.preventDefault();
        var currentScore = parseInt($teamOneScoreHolder.text());
        currentScore -= 3;
        $teamOneScoreHolder.empty().append(currentScore);
        var url = $(this).attr('href');
        $.get(url, function(game)
        {
            var score = game.teamonescore;
            $teamOneScoreHolder.empty().append(score);
        });
    });


    $('.minus-one-team-one').click(function(e)
    {
        e.preventDefault();
        var currentScore = parseInt($teamOneScoreHolder.text());
        currentScore -= 1;
        $teamOneScoreHolder.empty().append(currentScore);
        var currentScore = parseInt($teamOneScoreHolder.text());
        var url = $(this).attr('href');
        $.get(url, function(game)
        {
            var score = game.teamonescore;
            $teamOneScoreHolder.empty().append(score);
        });
    });

    /*
    *
    *
    * TEAM TWO BUTTONS
    *
    *
    */
    
    $('.plus-three-team-two').click(function(e)
    {
        e.preventDefault();
        var currentScore = parseInt($teamTwoScoreHolder.text());
        currentScore += 3;
        $teamTwoScoreHolder.empty().append(currentScore);
        var url = $(this).attr('href');
        $.get(url, function(game)
        {
            var score = game.teamtwoscore;
            $teamTwoScoreHolder.empty().append(score);
        });
    });


    $('.plus-one-team-two').click(function(e)
    {
        e.preventDefault();
        var currentScore = parseInt($teamTwoScoreHolder.text());
        currentScore += 1;
        $teamTwoScoreHolder.empty().append(currentScore);
        var url = $(this).attr('href');
        $.get(url, function(game)
        {
            var score = game.teamtwoscore;
            $teamTwoScoreHolder.empty().append(score);
        });
    });


    $('.minus-three-team-two').click(function(e)
    {
        e.preventDefault();
        var currentScore = parseInt($teamTwoScoreHolder.text());
        currentScore -= 3;
        $teamTwoScoreHolder.empty().append(currentScore);
        var url = $(this).attr('href');
        $.get(url, function(game)
        {
            var score = game.teamtwoscore;
            $teamTwoScoreHolder.empty().append(score);
        });
    });


    $('.minus-one-team-two').click(function(e)
    {
        e.preventDefault();
        var currentScore = parseInt($teamTwoScoreHolder.text());
        currentScore -= 1;
        $teamTwoScoreHolder.empty().append(currentScore);
        var url = $(this).attr('href');
        $.get(url, function(game)
        {
            var score = game.teamtwoscore;
            $teamTwoScoreHolder.empty().append(score);
        });
    });

});
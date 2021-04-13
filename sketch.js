var Player;
var game1;
var form1;

var database;
var playerCount;

var gameState = 0;

function  setup()
{
    var canvas = createCanvas(600,600);

    database = firebase.database();
    game1 = new game();
    game1.getState();
    game1.start();
}

function draw()
{
    //background("gray");
}

var $dieAndNum = $('#die, #roll');
var $die = $('#die');
var $tile1 = $('#tile1');
var $roll = $('#roll');
var $hillary = $('#player1');
var $trump = $('#player2');
var hillaryPOS = 0;
var trumpPOS = 0;
var gameOver = false;
var tiles = {};
var $winnerCircle = $('#winner-circle')

for(var i = 1; i <= 10; i++) {
  tiles[i] =$('#tile' + i)
}

var turn;
if(Math.random() > 0.5) {
  turn = 'player1';
}
else {
  turn = 'player2';
}

$dieAndNum.click(function() {
  if(gameOver === true) return false;
  //change the die image source to the gif
  $die.attr('src', './img/Dodecahedron3.gif');

//roll the die
var num = Math.floor(Math.random() * 10 + 1);
  $roll.html(num);

    //move hillary
    var $playerToMove;
    var playerTile;
    if(turn === 'player1') {
      $playerToMove = $hillary
      turn = 'player2';
      hillaryPOS += num;
      playerTile = hillaryPOS;
    }
    else {
      $playerToMove = $trump;
      turn = 'player1';
      trumpPOS += num;
      playerTile = trumpPOS;
    }

if(trumpPOS > 10 || hillaryPOS > 10) {
  onGameOver($playerToMove);
  return false;
}

    //get tile position
    var tilePos = tiles[playerTile][0].getBoundingClientRect();

  $playerToMove.css({
    'top': tilePos.top,
    'left': tilePos.left
  });
});

function onGameOver($winner) {
  gameOver = true;
  var tilePos = $winnerCircle[0].getBoundingClientRect();
  $winner.css({
    'top': tilePos.top,
    'left': tilePos.left
  }).addClass('winner-style');

  setTimeout(function() {
    alert($winner[0].id + " wins!");
    reset();
  }, 400); //as in 400 miliseconds

}

function reset() {
    gameOver = false;
    hillaryPOS = 0;
    trumpPOS = 0;

    $hillary.css({
        top: '160px',
        left: '10px'
    }).removeClass('winner-style');
    $trump.css({
        top: '250px',
        left: '10px'
    }).removeClass('winner-style');
}

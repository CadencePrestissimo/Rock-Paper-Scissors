
var gamePlaying,player1,player2,input;
var arr1=[];
var arr2=[];
init();


function startgame(n, activePlayer, input)
{
  if(activePlayer===1)
  {
    while(n--)
    {
      document.querySelector('.btn-roll-1').addEventListener('click', function() {
      if(gamePlaying)
      {
      arr1.push('rock');input--;document.querySelector('.turns').textContent = input;
      tur
      }
      });

      document.querySelector('.btn-roll-2').addEventListener('click', function() {
      if(gamePlaying)
      {
      arr1.push('paper');input--;document.querySelector('.turns').textContent = input;
      }
      });

      document.querySelector('.btn-roll-3').addEventListener('click', function() {
      if(gamePlaying)
      {
      arr1.push('scissors');input--;document.querySelector('.turns').textContent = input;
      }
      });
    }
  }

  if(activePlayer===2)
  {
    for(var i=0;i<n;i++)
    {

      document.querySelector('.btn-roll-4').addEventListener('click', function() {
      if(gamePlaying)
      {
      arr2.push('rock');
      }
      });

      document.querySelector('.btn-roll-5').addEventListener('click', function() {
      if(gamePlaying)
      {
      arr2.push('paper');
      }
      });

      document.querySelector('.btn-roll-6').addEventListener('click', function() {
      if(gamePlaying)
      {
      arr2.push('scissors');
      }
      });

    }
  }

};




document.querySelector('.new-game').addEventListener('click', init);
//initial
function init()
{
    scores = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector('.winner').textContent = '0';
    input = prompt('The no of times you would like to play this game');
    document.querySelector('.turns').textContent = input;
    activePlayer=1;
    startgame(input,activePlayer,input);
}

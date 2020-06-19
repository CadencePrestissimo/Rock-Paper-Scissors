
var gamePlaying,player1,player2,input;
var res={rock:"paper",paper:"scissors",scissors:"rock"};
var temp;
var arr1=[];
var arr2=[];
init();

function result()
{
if(res[arr1[temp-input]]==arr2[temp-input])
document.querySelector('.winner').textContent = '2';
else
document.querySelector('.winner').textContent = '1';
if(input!=0)
startgame();
};

function second()
{

      document.querySelector('.btn-roll-4').addEventListener('click', function() {
      if(gamePlaying)
      {
      arr2.push('rock');input--;document.querySelector('.turns').textContent = input;
      result();
      }
      });

      document.querySelector('.btn-roll-5').addEventListener('click', function() {
      if(gamePlaying)
      {
      arr2.push('paper');input--;document.querySelector('.turns').textContent = input;
      result();
      }
      });

      document.querySelector('.btn-roll-6').addEventListener('click', function() {
      if(gamePlaying)
      {
      arr2.push('scissors');input--;document.querySelector('.turns').textContent = input;
      result();
      }
      });

};

function startgame()
{
      var here = document.getElementById('now');
      now.className+=" active";
      document.querySelector('.btn-roll-1').addEventListener('click', function() {
      if(gamePlaying)
      {
      arr1.push('rock');
      var current = document.getElementsByClassName("active");
      var next =document.getElementById('next');
      current[0].className = current[0].className.replace(" active", "");
      next.className += " active";
      second();
      }
      });

      document.querySelector('.btn-roll-2').addEventListener('click', function() {
      if(gamePlaying)
      {
      arr1.push('paper');
      var current = document.getElementsByClassName("active");
      var next =document.getElementById('next');
      current[0].className = current[0].className.replace(" active", "");
      next.className += " active";
      second();
      }
      });

      document.querySelector('.btn-roll-3').addEventListener('click', function() {
      if(gamePlaying)
      {
      arr1.push('scissors');
      var current = document.getElementsByClassName("active");
      var next =document.getElementById('next');
      current[0].className = current[0].className.replace(" active", "");
      next.className += " active";
      second();
      }
      });


};





document.querySelector('.new-game').addEventListener('click', init);
//initial
function init()
{
    gamePlaying = true;
    document.querySelector('.winner').textContent = '0';
    input = prompt('The no of times you would like to play this game');
    document.querySelector('.turns').textContent = input;
    temp=input;
    startgame();
}

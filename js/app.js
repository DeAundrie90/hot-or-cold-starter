$(document).ready(function(){


	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  /*-- Initial Variables --*/
    var count = 0;
    var randNum = 0;
    finish = false;
    var userGuess = 0;

  /*-- Random Number Generator --*/
    function randomNumberGenerator() {
        randNum = (Math.floor(Math.random()*100));
        console.log("Random Number = " + randNum);
    }
    randomNumberGenerator(); 

    /*-- Counting the number of guess --*/
    function incrementCounter() {
      count++;
      $('#count').text(count);
    };



  /*-- Appending Number Guessed --*/
    $('#guessButton').click(function(e) {
      e.preventDefault();
      var guess = $('#userGuess').val();
      var list = '<li>' + guess + '</li>';
      $('#guessList').append(list);
      $('#userGuess').val('');
      incrementCounter();
    });


});

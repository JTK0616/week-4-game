$(document).ready(function() {

		var targetscore = 0;
		var playerscore = 0;
		var bluevalue = 0;
		var greenvalue = 0;
		var yellowvalue = 0;
		var redvalue = 0;
		var wins = 0;
		var losses = 0;

  

		// Generate the target number and assign values to each crystal


        var targetscore = Math.floor(Math.random() * ((19-120)+1) + 120);
        console.log(targetscore);

        var bluevalue = Math.floor(Math.random() * ((1-12)+1) + 12);

        var greenvalue = Math.floor(Math.random() * ((1-12)+1) + 12);

        var yellowvalue = Math.floor(Math.random() * ((1-12)+1) + 12);

        var redvalue = Math.floor(Math.random() * ((1-12)+1) + 12);
     

		// Display the target number

		function displaytarget() {
			$("#target").text(targetscore);
		}

		displaytarget();


    // Update the player's total

    function update() {
      $("#total").text(playerscore);
    }

    // Win/Lose Alerts

      function checkWin() {
        if (playerscore == targetscore) {
          wins=wins+1;
       alert("You Win!");
       displaywin();
       reset();

     }};

       function checkLoss() {
      
      if (playerscore>targetscore) {
            losses=losses+1;
         alert("You Lose!");
         displayloss();
         reset();
       }}

		//Add value to player total when clicked

		// Blue Crystal
      $(".bluecrystal").on("click", function() {
        playerscore=playerscore+bluevalue;
        update();
        checkLoss();
        checkWin();
      });

      // Green Crystal
      $(".greencrystal").on("click", function() {
      	playerscore=playerscore+greenvalue;
        update();
        checkLoss();
        checkWin();
      });

      // Yellow Crystal
      $(".yellowcrystal").on("click", function() {
      	playerscore=playerscore+yellowvalue;
        update();
        checkLoss();
        checkWin();
      });

      // Red Crystal
      $(".redcrystal").on("click", function() {
      	playerscore=playerscore+redvalue;
        update();
        checkLoss();
        checkWin();
      });


      // Display Wins

    function displaywin() {
      $("#win").text(wins);
    };

    displaywin();

    // Display Loss

    function displayloss() {
      $("#loss").text(losses);
    };

    displayloss();

    //Reset Function

    function reset () {
    var targetscore = 0;
    var playerscore = 0;
    var bluevalue = 0;
    var greenvalue = 0;
    var yellowvalue = 0;
    var redvalue = 0;
    var targetscore = Math.floor(Math.random() * ((19-120)+1) + 120);
    console.log(targetscore);
    displaytarget();
    var bluevalue = Math.floor(Math.random() * ((1-12)+1) + 12);
    var greenvalue = Math.floor(Math.random() * ((1-12)+1) + 12);
    var yellowvalue = Math.floor(Math.random() * ((1-12)+1) + 12);
    var redvalue = Math.floor(Math.random() * ((1-12)+1) + 12);
    }

  });







 

  
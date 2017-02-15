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

    // Display Wins

    function displaywin() {
      $("#win").text(wins);
    }

    displaywin();

    // Display Loss

    function displayloss() {
      $("#loss").text(losses);
    }

    displayloss();


    // Update the player's total

    function update() {
      $("#total").text(playerscore);
    }

  //   // Win/Lose Alert

  //     function checkScore() {

  //     if playerscore > 0 {
  //       if (playerscore = targetscore) {
  //         wins++;
  //      alert("You Win!");
      
  //     if (playerscore > targetscore) {
  //           losses++;
  //        alert("You Lose!");
  //      }
  //     }
  //   }
  // }



		//Add value to player total when clicked

		// Blue Crystal
      $(".bluecrystal").on("click", function() {
        playerscore=playerscore+bluevalue;
        update();
        // checkScore();
      });

      // Green Crystal
      $(".greencrystal").on("click", function() {
      	playerscore=playerscore+greenvalue;
        update();
        // checkScore();
      });

      // Yellow Crystal
      $(".yellowcrystal").on("click", function() {
      	playerscore=playerscore+yellowvalue;
        update();
        // checkScore();
      });

      // Red Crystal
      $(".redcrystal").on("click", function() {
      	playerscore=playerscore+redvalue;
        update();
        // checkScore();
      });

   
      // Check score for match

      checkScore();



      });  

// Closes Document Ready




 

  
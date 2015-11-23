$(function() {
  
  function play() {
    correctCards = 0;
    $("#cardHolder").html("");
    $("#slotHolder").html("");

    var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    numbers.sort( function() { 
      //shuffle  order of numbers in array numbers. 
      //note 0 <= Math.random() < 1 ==> the subctraction could be < 0 = 0 or > 0 
      return 0.5 - Math.random();
    });

    for ( var i=0; i<10; i++ ) {
      //asign data to each div (card)
      $("<div>" + numbers[i] + "</div>").data( {number: numbers[i]} ).attr( "id", "card"+numbers[i] ).appendTo( "#cardHolder" ).draggable( {
        revert: true
      } );
    }

    var words = [ "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten" ];
    var temp = [ "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten" ];
    temp.sort(function () {
      return 0.5 - Math.random();
    });
    for ( var j=1; j<=10; j++ ) {
      //words.indexOf(temp[i-1]) + 1 >> slot card number displayed randomly, take random slot number
      //then check with words array to get the acutal data for the slot.
      $("<div>" + temp[j-1] + "</div>").data( {number: words.indexOf(temp[j-1]) + 1} ).appendTo( "#slotHolder" ).droppable( {
        accept: "#cardHolder div",
        drop: checkCardtoBeDrop
      } );
    }
  }

  function checkCardtoBeDrop( event, ui ) {
    var slotNumber = $(this).data("number");
    var cardNumber = ui.draggable.data("number");

    if ( slotNumber == cardNumber ) {
      ui.draggable.addClass( "correct");
      ui.draggable.position( { my: "left top", at: "left top", of: $(this)});
      ui.draggable.draggable({revert : "invalid"});
      correctCards++;
    } 

    if ( correctCards == 10 ) {
      $("#successMessage").show();    
    }
  }

  play();

  $("#playAgain").click(function(){
    $("#successMessage").hide();
    play();
  });

});
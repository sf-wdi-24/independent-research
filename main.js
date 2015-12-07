$(function() {

  function play() {
    correctCards = 0;
    $("#cardHolder").html("");
    $("#slotHolder").html("");

    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    numbers.sort(function() {
      //shuffle  order of numbers in array numbers.
      //note 0 <= Math.random() < 1 ==> the subctraction could be < 0 = 0 or > 0
      return 0.5 - Math.random();
    });

    for (var i = 0; i < 10; i++) {
      //asign data to each div (card)
      $("<div class='ui-widget-content'>" + numbers[i] + "</div>").data({
        number: numbers[i]
      }).attr("id", "card" + numbers[i]).appendTo("#cardHolder").draggable({
        containment: "#game",
        stack: "#cardHolder div",
        cursor: "move",
        revert: true
      });
    }

    var words = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
    var temp = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
    temp.sort(function() {
      return 0.5 - Math.random();
    });
    for (var i = 1; i <= 10; i++) {
      //words.indexOf(temp[i-1]) + 1 >> slot card number displayed randomly, take random slot number
      //then check with words array to get the acutal data for the slot.
      $("<div>" + temp[i - 1] + "</div>").data({
        number: words.indexOf(temp[i - 1]) + 1
      }).appendTo("#slotHolder").droppable({
        accept: "#cardHolder div",
        hoverClass: "hovered",
        drop: checkCardtoBeDrop
      });
    }
  }

  function checkCardtoBeDrop(event, ui) {
    var slotNumber = $(this).data("number");
    var cardNumber = ui.draggable.data("number");

    if (slotNumber === cardNumber) {
      ui.draggable.addClass("correct");
      ui.draggable.draggable("disable");
      $(this).droppable("disable");
      ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
      ui.draggable.draggable("option", "revert", false);
      correctCards++;
    }

    if (correctCards == 10) {
      $("#successMessage").show();
    }
  }

  play();

  $("#playAgain").click(function() {
    $("#successMessage").hide();
    play();
  });

});
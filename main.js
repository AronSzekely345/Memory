var cards = new Array();

cards[0] = "Images/ace-spades.png";
cards[1] = "Images/ace-spades.png";
cards[2] = "Images/two-spades.png";
cards[3] = "Images/two-spades.png";
cards[4] = "Images/three-spades.png";
cards[5] = "Images/three-spades.png";
cards[6] = "Images/four-spades.png";
cards[7] = "Images/four-spades.png";
cards[8] = "Images/five-spades.png";
cards[9] = "Images/five-spades.png";
cards[10] = "Images/six-spades.png";
cards[11] = "Images/six-spades.png";

cards = shuffle(cards);

$('IMG').each(function(counter) {
    $(this).data('card',cards[counter])
});

$(document).ready(function() {
    $('IMG').click(function(){
    $(this).attr('src',$(this).data('card'));
    $(this).addClass('flipped');
    if($('.flipped').length > 1) {
        // check if they match
        if($('.flipped').eq(0).data('card') == $('.flipped').eq(1).data('card')) {
            alert('YAY!');
            //Homework - remove from board 
        }
        else {
            alert('NAY!');
            //Homework - flip back over
        }
    }
  });
});

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
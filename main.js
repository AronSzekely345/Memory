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

//cards = shuffle(cards);

$('#field IMG').each(function(counter) {
    $(this).data('card',cards[counter])
    $(this).attr('src',$(this).data('card'));
});

setTimeout(function() {
                    $('#field IMG').attr("src","Images/back.png")
                },1500);

$(document).ready(function() {
    $('#field IMG').click(function(){
        $(this).attr('src',$(this).data('card'));
        $(this).addClass('flipped');
        if($('.flipped').length > 1) {
            // check if they match
            if($('.flipped').eq(0).data('card') == $('.flipped').eq(1).data('card')) {
                $(".flipped").addClass('match');
                setTimeout(function() {
                    $(".flipped").hide();
                    $(".flipped").removeClass("flipped");
                    checkWin();
                },600);
            }
            else {
                $(".flipped").addClass('fail');
                setTimeout(function() {
                    $('IMG').attr("src","Images/back.png")
                    $(".flipped").removeClass('fail');
                    $(".flipped").removeClass("flipped");
                },600);
            }
        }
    });
});

function checkWin() {
    if($("IMG:visible").length == 0) {
        alert('YOU PUT YOURSELF IN THE MONDAY MILK!')
    }
}

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

// add #field to all references of IMG 
// homework - make the image disapear and then appear when you win
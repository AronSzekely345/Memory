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

resetField();

$(document).ready(function() {
    $('#field IMG').click(function(){
        if($('.flipped').length > 1) {
            return false;
        }
        $(this).attr('src',$(this).data('card'));
        $(this).addClass('flipped');
        if($('.flipped').length > 1) {
            // check if they match
            if($('.flipped').eq(0).data('card') == $('.flipped').eq(1).data('card')) {
                $(".flipped").addClass('match');
                setTimeout(function() {
                    $('.flipped').attr('src','Images/silhouette.png')
                    $(".flipped").removeClass("match");
                    $(".flipped").removeClass("flipped");
                    checkWin();
                },600);
            }
            else {
                $(".flipped").addClass('fail');
                setTimeout(function() {
                    $('#field IMG').not('[src="Images/silhouette.png"]').attr("src","Images/back.png")
                    $(".flipped").removeClass('fail');
                    $(".flipped").removeClass("flipped");
                },600);
            }
        }
    });
});

function checkWin() {
    if($("#field IMG:visible").not('[src="Images/silhouette.png"]').length == 0) {
        $('[src="Images/silhouette.png"]').hide();
        $('#winner').show();
        $('BODY').addClass ('confetti');
        setTimeout(function() {
        if(confirm('YOU PUT YOURSELF IN THE MONDAY MILK! Do you wish to continue to the Tuesday Juice?')) {
            resetField();
            }
        }, 1500);  
    }
}

function resetField() {
    $('BODY').removeClass('confetti');
    $('#winner').hide();
    $('#field IMG').show();
    $('.flipped').removeClass('flipped');
    $('#field IMG').attr('src', 'images/back.png')
    $('#field IMG').removeClass('match');
    cards = shuffle(cards);
    $('#field IMG').each(function(counter) {
    $(this).data('card',cards[counter])
    $(this).attr('src',$(this).data('card'));
});

setTimeout(function() {
                    $('#field IMG').attr("src","Images/back.png")
                },1500);


    
    
    
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
// homework - put silhouette in place of image once it disapears and find happy gif for the victory & commit to master.
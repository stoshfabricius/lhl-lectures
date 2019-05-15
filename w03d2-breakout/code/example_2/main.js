// GOAL: add prizes to the sibling

// DEMO:
// - this object
// - $(this) vs this
// jQuery vs CSS

// Key takeaways:
// - Really think about what you are targeting on the page
//   and consider using $(this) and then traverse up/down.
// - Treat major sections on the page as components

$('.prize-btn').on('click', function(evt) {
  $('.prizes').append('you win a prize!');

  // var btn = this;
  // btn.siblings('.prizes').append('you win a prize!');

  // var $btn = $(this);
  // $btn.siblings('.prizes').append('you win a prize!');

  // $btn.closest('.prizer').find('.prizes').append('you win a prize!');
});


// jQuery vs CSS, how do I choose

// Javascript (with jQuery)
$(".prizes").hover(function() {
    $(this).css("background-color", "yellow");
    }, function() {
    $(this).css("background-color", "white");
});

// CSS
// .prizes:hover {
//   background-color: yellow;
// }

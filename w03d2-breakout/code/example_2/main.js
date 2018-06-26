// GOAL: add prizes to the sibling

// DEMO:
// - evt object
// - this object
// - $(this) vs this
// jQuery vs CSS

// Key takeaways:
// - Really think about what you are targeting on the page and consider using $(this) and then traverse up/down.
// - Treat major sections on the page as components

$('.prize-btn').on('click', function(evt) {
  // var btn = this;
  var $btn = $(this);
  // $btn.siblings('.prizes').append('you win a prize!');
  // btn.siblings('.prizes').append('you win a prize!');


  // Make sure you understand what you are targeting and how many DOM elements will be affected
  // $('.prizes').append('you win a prize!');

  // The below strategy also works but when there are two prizes on the page, it modifies both. There our code is not "contained" or "scoped" to the specific component in question.
  // $btn.closest('.prizer').find('.prizes').append('you win a prize!');

  // What happens if we have an unreleated call in the code here
  $('.grand-prize').append('you win a prize! ');

});



// jQuery vs CSS, how do I choose

$(".prizes").hover(function() {
    $(this).css("background-color", "yellow");
    }, function() {
    $(this).css("background-color", "white");
});

// :hover {
//   background-color: yellow;
// }

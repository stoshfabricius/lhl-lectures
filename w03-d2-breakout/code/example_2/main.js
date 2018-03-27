// GOAL: add farts to the sybling P

// DEMO:
// - evt object
// - this object
// - $(this) vs this

// Key takeaways: 
// - Really think about what you are targeting on the page and consider using $(this) and then traverse up/down. 
// - Treat major sections on the page as components

$('.prize-btn').on('click', function(evt) {
	var $btn = $(this);
  $btn.closest('.prizerr').find('.prizes').append('you win a prize! ');
  // The below strategy also works but when there are two farters on the page, it modifies both. There our code is not "contained" or "scoped" to the specific component in question.
  // $('.prizes').append('you win a prize! ');
});

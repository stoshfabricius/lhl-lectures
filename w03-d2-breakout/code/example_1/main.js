// TODOs:
// - demo evt
// - demo this
// - demo alert to crazy prize window

$('.prize-btn').on('click', function(evt) {
  console.log(evt.offsetX, evt.offsetY);
  alert('You Win the Prize!!!!')
});


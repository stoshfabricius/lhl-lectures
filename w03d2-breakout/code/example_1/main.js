// TODOs:
// - demo alert to crazy prize window
// - demo evt
// - demo this

  $('.prize-btn').on('click', function(evt) {
    // alert('You Win the Prize!!!!')
    // console.log(evt.offsetX, evt.offsetY);
    // console.log(evt);

    // What is 'this'?

    console.log(this)
    console.log($(this))
  });



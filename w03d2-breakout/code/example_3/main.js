// Event Delegation

//     Event delegation allows us to attach a single event listener, to a parent element, that will fire for all descendants matching a selector, whether those descendants exist now or are added in the future.

// The click event is the single event listener attached to the parent element of all of the <li> tags. If I click on an <li> tag that is a descendant of the <ul> then it will call this function. This means I can add more <li> tags without needing to concern myself with adding done functionality to each one.

$('ul').on('click', 'li.task', function(event) {
  var li = $(event.target)
  li.toggleClass('done')
})


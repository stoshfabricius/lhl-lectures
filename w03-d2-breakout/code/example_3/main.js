
var pets = [
  {
  	name: 'Dingo',
    type: 'dog',
    age: 1
  },
  {
  	name: 'Kongo',
    type: 'snake',
    age: 3
  },
  {
  	name: 'Meowngo',
    type: 'cat',
    age: 2
  },
  {
  	name: 'Bongo',
    type: 'dog',
    age: 2
  }
]

$('.show-pets-btn').on('click', function(event) {
  // Append a list of pets to the pets container 
  console.log('Show all the pets')
  var $petsContainer = $('#pets-container')

  // Pets was available globally
  pets.forEach(function(item) {
    // Create a new p tag
    var newPetElement = `<p>${item.name}</p>`

    // Apend this to the page
    $petsContainer.append(newPetElement)
  })
})


// run everything when the window loads
window.onload = function () {
  
}


// !!!!!!!!!! boilerplate script for appending results // pulled and from Starwars activity and modified

// but might have to look at todo js and recreate another getClass like we do getCategories

// $.get('/api/characters', function (data) {
//   for (var i = 0; i < data.length; i++) {
//     console.log(data[i])
//       var listClassesInSelectedCategory = $("<li class='ClassInSelectedCategory'>")

//       listClassesInSelectedCategory.append('<h2>Class:' + data[i].title)
//       ListClassesInSelectedCategory.append('<p><strong>Taught by:<strong> ' + data[i].teacher)
//       ListClassesInSelectedCategory.append('<p><strong>Location:<strong> ' + data[i].location)
//       ListClassesInSelectedCategory.append('<p><strong>Date:<strong> ' + data[i].date)
//       ListClassesInSelectedCategory.append('<p><strong>Time:<strong> ' + data[i].time)
//       ListClassesInSelectedCategory.append('<p><strong>Description:<strong> ' + data[i].description)
//       // !!!!!!!!!! somehow the button has to connect with the submit field to prompts the modal
//       ListClassesInSelectedCategory.append(`<div class="text-center"><button type="button" class="btn btn-lg btn-success signUpButton><h4>Sign up now!</h4></button></div>`)

//     $('#character-section').append(ListClassesInSelectedCategory)
//     }
// })
//   // !!!!!!!!!! end boiler plate pulled from starwars
//   // !!!!!!!!!! boiler plate modal code pulled from friend finder
//   // Chosen CSS
//   var config = {
//   '.chosen-select': {},
//   '.chosen-select-deselect': {
//     allow_single_deselect: true
//   },
//   '.chosen-select-no-single': {
//     disable_search_threshold: 10
//   },
//   '.chosen-select-no-results': {
//     no_results_text: 'Oops, nothing found!'
//   },
//   '.chosen-select-width': {
//     width: '95%'
//   }
// }

//   for (var selector in config) {
//   $(selector).chosen(config[selector])
//   }

// // Capture the form inputs
// $('#submit').on('click', function (event) {
//   event.preventDefault()

//     // Form validation
//     function validateForm () {
//     var isValid = true
//       $('.form-control').each(function () {
//       if ($(this).val() === '') {
//         isValid = false
//         }
//     })

//       $('.chosen-select').each(function () {
//       if ($(this).val() === '') {
//         isValid = false
//         }
//     })
//       return isValid
//     }

//   // If all required fields are filled
//   if (validateForm()) {
//     // Create an object for the user's data
//     var userData = {
//       name: $('#name').val(),
//       photo: $('#photo').val(),
//       scores: [
//         parseInt($('#q1').val()),
//         parseInt($('#q2').val()),
//         parseInt($('#q3').val()),
//         parseInt($('#q4').val()),
//         parseInt($('#q5').val()),
//         parseInt($('#q6').val()),
//         parseInt($('#q7').val()),
//         parseInt($('#q8').val()),
//         parseInt($('#q9').val()),
//         parseInt($('#q10').val())
//       ]

//     }

//       // AJAX post the data to the friends API.
//       $.post('/api/friends', userData, function (data) {
//       // Grab the result from the AJAX post so that the best match's name and photo are displayed.
//       $('#match-name').text(data.name)
//         $('#match-img').attr('src', data.photo)

//         // Show the modal with the best match
//         $('#signUpModal').modal('toggle')

//       })

//       // reset all the fields
//       $('#name, #photo').val('')
//       $('#q1_chosen span, #q2_chosen span, #q3_chosen span, #q4_chosen span, #q5_chosen span, #q6_chosen span, #q7_chosen span, #q8_chosen span, #q9_chosen span, #q10_chosen span').text('Select an Option')
//     } else {
//     alert('Please fill out all fields before submitting!')
//     }
// })

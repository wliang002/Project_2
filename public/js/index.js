// run everything when the window loads
window.onload = function () {
  console.log('index page has loaded')
  // Get references to page elements
  var $classCategoriesContainer = document.querySelector('.classCategoriesContainer')
  // our initial categories array
  var categories = []
  // our initial uniqueCategoriesButtonsToAdd
  var uniqueCategoriesButtonsToAdd = []
  // getting categories when the page loads
  getCategories()
  // this function clears existing dummy buttons
  function clearDummyButtons () {
    $classCategoriesContainer.innerHTML = ''
    console.log('all existing categories buttons have been erased')
  }
  // this function removes duplicate categoryButtons
  function getUnique (array) {
    var uniqueArray = []
    for (i = 0; i < array.length; i++) {
      if (uniqueArray.indexOf(array[i]) === -1) {
        uniqueArray.push(array[i])
      }
    }
    return uniqueArray
  }
  // this function displays the category buttons
  function displayButtons () {
    console.log('displayButtons function was called')
    clearDummyButtons()
    var categoryButtonsToAdd = []
    for (var i = 0; i < categories.length; i++) {
      categoryButtonsToAdd.push(createNewCategoryButton(categories[i]))
    }
    console.log('these are the categoryButtonsToAdd: ' + categoryButtonsToAdd)
    // capture only unique buttons
    uniqueCategoryButtonsToAdd = getUnique(categoryButtonsToAdd)
    console.log('the new unique buttons are: ' + uniqueCategoryButtonsToAdd)
    $classCategoriesContainer.insertAdjacentHTML('afterbegin', uniqueCategoryButtonsToAdd)
  }
  // this function grabs the categories from the database and updates the view
  function getCategories () {
    fetch('/learn')
      .then(results => results.json())
      .then(function (data) {
        categories = data
        console.log('got all data', categories)
        displayButtons(categories)
      })
  }

  // this function constructs a new category button
  function createNewCategoryButton (category) {
    console.log('createNewCategoryButton function was called')
    let newCategoryButton = `<a href="/learn/${category.category}"><button type="button" class="btn btn-lg btn-success categoryButton" data-id='${category.category}'><h4>${category.category}</h4></button></a>`
    return newCategoryButton
  }
  // !!!!!this function removes the comma from the buttons array
}

// var exampleText = document.querySelector('#example-text')
// var exampleDescription = document.querySelector('#example-description')
// var submitBtn = document.querySelector('#submit')
// var exampleList = document.querySelector('#example-list')

// // The API object contains methods for each kind of request we'll make
// class API {
//   constructor (someDefault = 'defaultVal') {
//     this.someDefault = someDefault
//   }

//   saveExample (example) {
//     return fetch('api/examples', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(example)
//     })
//   }

//   getExamples () {
//     return fetch('api/examples')
//   }

//   deleteExample (id) {
//     return fetch('api/examples/' + id, {
//       method: 'DELETE'
//     })
//   }
// }

// // refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function () {
//   let api = new API()

//   api.getExamples()
//     .then(results => results.json())
//     .then(function (data) {
//       while (exampleList.firstChild) {
//         exampleList.removeChild(exampleList.firstChild)
//       }

//       for (let example of data) {
//         var aElem = document.createElement('a')
//         aElem.textContent = example.text
//         aElem.setAttribute('href', '/example/' + example.id)

//         var liElem = document.createElement('li')
//         liElem.classList.add('list-group-item')
//         liElem.dataset.id = example.id
//         liElem.appendChild(aElem)

//         var buttonElem = document.createElement('button')
//         buttonElem.classList.add('btn', 'btn-danger', 'float-right', 'delete')
//         buttonElem.textContent = 'ｘ'

//         liElem.appendChild(buttonElem)

//         exampleList.appendChild(liElem)
//       }
//     })
// }

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function (event) {
//   event.preventDefault()
//   let api = new API()

//   var example = {
//     text: exampleText.value.trim(),
//     description: exampleDescription.value.trim()
//   }

//   if (!(example.text && example.description)) {
//     alert('You must enter an example text and description!')
//     return
//   }

//   api.saveExample(example).then(function () {
//     refreshExamples()
//   })

//   exampleText.value = ''
//   exampleDescription.value = ''
// }

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function (event) {
//   if (event.target.matches('button.delete')) {
//     let api = new API()

//     var idToDelete = event.target.parentElement.dataset.id

//     api.deleteExample(idToDelete).then(function () {
//       refreshExamples()
//     })
//   }
// }

// // Add event listeners to the submit and delete buttons
// submitBtn.addEventListener('click', handleFormSubmit)
// exampleList.addEventListener('click', handleDeleteBtnClick)

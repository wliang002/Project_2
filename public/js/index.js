// run everything when the window loads
window.onload = function () {
  // console.log('index page has loaded')
  // Get references to page elements
  var $classCategoriesContainer = document.querySelector('.classCategoriesContainer')
  var $dropDownContent = document.querySelector('.dropdown-content')

  // Initial categories array
  var categories = []

  // Initial unique categories buttons and drop downs to add
  var uniqueCategoriesButtonsToAdd = []
  var uniqueDropDownsToAdd = []

  // getting categories when the page loads
  getCategories()

  // this function clears existing dummy buttons
  function clearDummyButtons () {
    $classCategoriesContainer.innerHTML = ''
    $dropDownContent.innerHTML = ''
    // console.log('all existing categories buttons have been erased')
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
    $classCategoriesContainer.insertAdjacentHTML('afterbegin', uniqueCategoryButtonsToAdd.join(''))
  }

  // this function displays the drop downss
  function displayDropDowns () {
    // console.log('displayDropDownsfunction was called')
    var DropDownsToAdd = []
    for (var i = 0; i < categories.length; i++) {
      DropDownsToAdd.push(createNewDropDowns(categories[i]))
    }
    // console.log('these are the DropDownsToAdd: ' + DropDownsToAdd)
    // capture only unique buttons
    uniqueDropDownsToAdd = getUnique(DropDownsToAdd)
    // console.log('the new unique dropdowns are: ' + uniqueDropDownsToAdd)
    $dropDownContent.insertAdjacentHTML('afterbegin', uniqueDropDownsToAdd.join(''))
  }

  // this function grabs the categories from the database and updates the view
  function getCategories () {
    fetch('/allData')
      .then(results => results.json())
      .then(function (data) {
        categories = data
        // console.log('got all data', categories)
        displayButtons(categories)
        displayDropDowns(categories)
      })
  }

  // this function constructs a new category button
  function createNewCategoryButton (category) {
    // console.log('createNewCategoryButton function was called')
    let newCategoryButton = `<a href="/learn/${category.category}"><button type="button" class="btn btn-lg btn-success categoryButton" data-id='${category.category}'><h4>${category.category}</h4></button></a>`
    return newCategoryButton
  }

  // this function constructs a dropdown
  function createNewDropDowns (category) {
    // console.log('createNewDropDowns was called')
    let newDropDowns = `<a class="dropdown-item" href="/learn/${category.category}">${category.category}</a>`
    return newDropDowns
  }
}

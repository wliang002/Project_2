window.onload = function () {
    // Getting a reference to the input field where user adds a new class
    var $newTname = document.querySelector('#teachersName')
    var $newCategory = document.querySelector('#categorySelect')
    var $newLocation= document.querySelector('#location')
    // Our new classes will go inside the $classContainer
    var $classContainer = document.querySelector('#class-container')
   

    // Adding event listeners for deleting, editing, and adding classes
    $classContainer.addEventListener('click', function (event) {
      if (event.target.nodeName === 'BUTTON') {
        if (event.target.matches('button.delete')) {
          // DELETE BTN
          event.stopPropagation()
          let id = event.target.dataset.id
  
          fetch('/api/events/' + id, {
            method: 'DELETE'
          })
            .then(function (data) {
              getClasses()
            })
        } else if (event.target.matches('button.complete')) {
          // DONE BTN
          event.stopPropagation()
          let tParent = event.target.parentNode
          let tName= tParent.querySelector(`teacherName${tParent.dataset.classes}`)
          let eName= tParent.querySelector(`eventName${tParent.dataset.classes}`)
          let category= tParent.querySelector(`eventCat${tParent.dataset.classes}`)
          let eLocation= tParent.querySelector(`eventLoc${tParent.dataset.classes}`)
          let eDate= tParent.querySelector(`eventDate${tParent.dataset.classes}`)
          let eTime= tParent.querySelector(`eventTime${tParent.dataset.classes}`)
          let eDescript = tParent.querySelector(`eventDescript${tParent.dataset.classes}`)

          let classes = {
            id: tParent.dataset.classes,
            teacher: tParent.dataset.tName,
            eventname: tParent.dataset.eName,
            category: tParent.dataset.category,
            eventlocation: tParent.dataset.eLocation,
            eventdate: tParent.dataset.eDate,
            eventtime: tParent.dataset.eTime,
            eventdescription: tParent.dataset.eDescript

          }
          


  
    document.querySelector('#addClass').addEventListener('submit', insertClass)
  
    // Our initial classes array
    var classes = []
  
    // Getting classes from database when page loads
    getClasses()
  
    // This function resets the classes displayed with new classes from the database
    function initializeRows () {
      $classContainer.innerHTML = ''
  
      var rowsToAdd = []
  
      for (var i = 0; i < classes.length; i++) {
        rowsToAdd.push(createNewRow(classes[i]))
      }
      $classContainer.insertAdjacentHTML('afterbegin', rowsToAdd)
    }
  
    // This function grabs classes from the database and updates the view
    function getClasses () {
      fetch('/api/events')
        .then(results => results.json())
        .then(function (data) {
          classes = data
          console.log('get all data', classes)
          initializeRows(classes)
        })
    }
  
 
    
  
    // This function constructs a class row
    function createNewRow (class) {
  
      let newInputRow = `
          <li class='list-group-item class' data-completed='${class.completed}' data-class='${class.id}'>
          <span class='teacher' id='teacherName${class.id}'}'>${class.teacher}</span>
          <span class='eventname' id='eventName${class.id}'}'>${class.eventname}</span>
          <span class='eventcategory' id='eventCat${class.id}'}'>${class.category}</span>
          <span class='eventlocation' id='eventLoc${class.id}'}'>${class.eventlocation}</span>
          <span class='eventdate' id='eventDate${class.id}'}'>${class.everntdate}</span>
          <span class='eventtime' id='eventTime${class.id}'}'>${class.eventtime}</span>
          <span class='eventdescript' id='eventDescript${class.id}'}'>${class.eventdescription}</span>

          <input type='text' class='edit' style='visibility: hidden;'>
          <button type="button" data-id='${class.id}' style='visibility: hidden;' class="edit btn btn-secondary">Save</button>
          <button type="button" data-id='${class.id}' class="delete btn btn-danger btn-lg">Remove</button>
          <button type="button" data-completed='${class.completed}' data-id='${class.id}' class="complete btn btn-primary btn-lg">Done</button>
          </li>`
  
      return newInputRow
    }
  
    // This function inserts a new todo into our database and then updates the view
    function insertClass (event) {
      event.preventDefault()
      var todo = {
        text: $newItemInput.value.trim(),
        completed: 0
      }
  
      // Send the POST request.
      fetch('/api/classes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo)
      })
        // On success, run the following code
        .then(function (data) {
          // Log the data we found
          console.log(data)
          getClasses()
        })
  
      $newItemInput.value = ''
    }
  }
  
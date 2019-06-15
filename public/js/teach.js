window.onload = function () {

    // Getting a reference to the input field where user adds a new class
    var $newTname = document.querySelector('#teachersName')
    var $newEvent = document.querySelector('#eventName')
    var $newCategory = document.querySelector('#categorySelect')
    var $newLocation = document.querySelector('#location')
    var $newDate = document.querySelector('#date')
    var $newTime = document.querySelector('#time')
    var $newDescript = document.querySelector('#description')
    
    // Our new classes will go inside the $classContainer
    var $classContainer = document.querySelector('#class-container')
   

    // Adding event listeners for deleting, editing, and adding classes
    $classContainer.addEventListener('click', function (event) {
      if (event.target.nodeName === 'BUTTON') {
        if (event.target.matches('button.delete')) {
          // DELETE BTN
          event.stopPropagation()
          let id = event.target.dataset.id

          fetch('/teach/' + id, {
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
          
        }
      }
    })
  
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
      fetch('/allData')
        .then(results => results.json())
        .then(function (data) {
          classes = data
          console.log('get all data', classes)
          initializeRows(classes)
        })
    }
  
 
    
  
    // This function constructs a class row
    function createNewRow (lecture) {
  
      let newInputRow = `<ul id="allClassesTaughtByTeacher" class="list-group">
      <li class='ClassWithThisTeacher' data-completed='${lecture.completed}' data-class='${lecture.id}>
      <h1 id='eventName${lecture.id}'}'> Class: ${lecture.eventname}</h1>
      <p class='teacher' id='teacherName${lecture.id}'}'><strong>Taught by:</strong> ${lecture.teacher}</p>
      <p><strong>Location:</strong>${lecture.eventlocation}</p>
      <p><strong>Date:</strong> ${lecture.eventdate}</p>
      <p><strong>Time:</strong> ${lecture.eventtime}</p>
      <p><strong>Description:</strong> ${lecture.eventdescription} </p>
      <div class="text-center">
        <button type="button" class="btn btn-lg btn-success updateButton">
          <h4>Update</h4>
        </button>
        <button type="button" data-id='${lecture.id}' class="delete btn btn-danger btn-lg">
          <h4>Delete</h4>
        </button>
        </h4>
        </button>
      </div>
    </li>
    </ul>`
  
      return newInputRow
    }
  
    // This function inserts a new todo into our database and then updates the view
    function insertClass (event) {
     
      event.preventDefault()
     

      
      var lecture = {
        teacher: $newTname.value,
        eventname: $newEvent.value,
        category: $newCategory.value,
        eventlocation: $newLocation.value,
        eventdate: $newDate.value,
        eventtime: $newTime.value,
        eventdescription: $newDescript.value
      }

  
      // Send the POST request.
      fetch('/teach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lecture)
      })
        // On success, run the following code
        .then(function (data) {
          // Log the data we found
          console.log(data)
          getClasses()
        })
  
      $newTname.value = ''
    }
  }


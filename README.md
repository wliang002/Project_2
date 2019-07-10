# Learn Local (version 2)
A community building skillshare platform that connects passionate artisans with one another.
Users can browse available classes/workshops by category and sign up for them. Teachers can add classes that they want to teach.

## Contributors
- Emily Liang (wliang002)
- Hetty Chin (hetty-chin)
- Diana Lovette (birbjam)

## Built With
- Node.js
- Knex.js
- Javascript
- HTML / CSS
- Bootstrap
- MySQL

## Features
- home screen header nav dropdown and buttons pull all categories of classes from our SQL database
- each category takes you to our "learn" interface and displays only classes of that particular category
- /viewSelectData/:category to see the raw data for categories
- /viewSelectTeacher/:teacher to see the raw data for teachers
- teach button takes you to our "teach" interface
- from the "teach" interface, you can add a class and delete a class
- if parts of the form are missing, an alert is prompted
- teach/:teacher shows all the classes that a particular teacher is hosting

## Future Development
- User log in to view/store classes taught per teacher.
- Add another database to store sign up info.
- User log in to view/store classes signed up for by student.
- Map flyover that shows where the classes are.
- Allow upload of images.

## Link to Heroku App
https://learnlocalproj2.herokuapp.com/

## License
- GNU Public License
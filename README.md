# CSV Upload and Reader App

## Features

* User can upload any csv file into the system - using Multer JS
* Display a list of all uploaded csv files - CSV is parsed and converted into JSON and stored in the Mongo Database
* When the user selects a file, it displays all the data (with column headers) in a table on the page (front
end)
* There is a search box which searches on the front end itself and displays the matching rows
of the table only (empty search box displays all the data).
* There is a sorting button (ascending and descending) for each column on the front end
* There is a validation on the front end and server side on being able to upload only csv
type of files
* There is a pagination of the data displayed in the table to a max of 100 records per
page


## Screenshots
![image](https://user-images.githubusercontent.com/36923392/202898721-df798693-d4c1-465b-b6c5-de298f4c49ff.png)
![image](https://user-images.githubusercontent.com/36923392/202898732-c2a5e0be-3e73-4ba4-9b07-5f092804b60e.png)

[View Live](https://m-csv-upload.herokuapp.com/)

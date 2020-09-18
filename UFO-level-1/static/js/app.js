// from data.js
var tableData = data;

// YOUR CODE HERE!

// select location to add data to table
var tbody = d3.select("tbody");

//input data into table
// tableData.forEach(function(tableInput) {
//     console.log(tableInput);
//     var row = tbody.append("tr");
//     Object.entries(tableInput).forEach(function([key, value]) {
//       console.log(key, value);
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });

tableData.forEach((tableInput) => {
    var row = tbody.append("tr");
    Object.entries(tableInput).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});

function selectDate(date){
  return date.datetime === date
};
  
// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers for date
button.on("click", runFilter);
form.on("submit",runFilter);

// Create the function to run
function runFilter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var dateInput = d3.select("#datetime");

  var filteredDate = selectDate(dateInput) ;
 
  d3.select("tbody").text(filteredDate)

};
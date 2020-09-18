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

// var selectDate = (".tbody tr").forEach(function() {
//   var row = $(this);
//   var date = stringToDate(row.find("td").eq(2).text());
  
//   //show all rows by default
//   var show = true;

//   //if filtered date is valid and row date is does't match filtered date, hide the row
//   if (date !==)
//     show = false;
  
//   if (show)
//     row.show();
//   else
//     row.hide();
// });


  
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
  // Get the value property of the input element
  var dateValue = dateInput.property("value");

  var filteredDate = tableData.filter(tableData => tableData.datetime === dateValue);

  filteredDate.show()



};
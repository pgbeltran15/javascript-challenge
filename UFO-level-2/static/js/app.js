// from data.js
var tableData = data;

// YOUR CODE HERE!

// select location to add data to table
var tbody = d3.select("tbody");

//input data into table
// tableData.forEach(function(tableInput) {
//    console.log(tableInput);
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

// Select the button
var filterbutton = d3.select("#filter-btn");

// Create event handlers for date
filterbutton.on("click", runFilter);

// Create the function to run
function runFilter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the data input element and get the raw HTML node
  var dateInput = d3.select("#datetime");
  // Get the value property of the input element
  var dateValue = dateInput.property("value");

  // Select the city input element and get the raw HTML node
  var cityInput = d3.select("#city");
  // Get the value property of the input element
  var cityValue = cityInput.property("value");

  var filteredData = tableData.filter(tableData => tableData.datetime === dateValue && tableData.city === cityValue);

  tbody.html("");

  filteredData.forEach((tableInput) => {
    var row = tbody.append("tr");
    Object.entries(tableInput).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};


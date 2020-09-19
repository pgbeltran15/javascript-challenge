// from data.js
var tableData = data;

// YOUR CODE HERE!

// select location to add data to table
var tbody = d3.select("tbody");

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

  // Select the input element
  var dateInput = d3.select("#datetime");
  // Get the value property of the input element
  var dateValue = dateInput.property("value");

  var filteredDate = tableData.filter(table => table.datetime === dateValue);

  tbody.html("");

  filteredDate.forEach((tableInput) => {
    var row = tbody.append("tr");
    Object.entries(tableInput).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};


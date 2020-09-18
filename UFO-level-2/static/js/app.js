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

// Select the form
var form = d3.select(".form-group");



// Create event handlers for date
filterbutton.on("click", runFilter);
form.on("submit",runFilter);

// Create the function to run
function runFilter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the date input element and get the raw HTML node
  var dateInput = d3.select("#datetime");
  // Get the date value property of the input element
  var dateValue = dateInput.property("value");

  // Select the city input element and get the raw HTML node
  var cityInput = d3.select("#city");
  // Get the city value property of the input element
  var cityValue = cityInput.property("value");

  // Select the state input element and get the raw HTML node
  var stateInput = d3.select("#state");
  // Get the state value property of the input element
  var stateValue = stateInput.property("value");

  // Select the country input element and get the raw HTML node
  var countryInput = d3.select("#country");
  // Get the country value property of the input element
  var countryValue = countryInput.property("value");

  // Select the shape input element and get the raw HTML node
  var shapeInput = d3.select("#shape");
  // Get the shape value property of the input element
  var shapeValue = shapeInput.property("value");

  var filteredData = tableData.filter(tableData => (tableData.datetime == dateValue) 
    || (tableData.city == cityValue) 
    || (tableData.state == stateValue) 
    || (tableData.country == countryValue) 
    || (tableData.shape == shapeValue));

  // var filteredData = tableData.filter(tableData => (tableData.datetime == dateValue) 
  // && (tableData.city == cityValue) 
  // && (tableData.state == stateValue) 
  // && (tableData.country == countryValue) 
  // && (tableData.shape == shapeValue));

  tbody.html("");

  filteredData.forEach((tableInput) => {
    var row = tbody.append("tr");
    Object.entries(tableInput).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};


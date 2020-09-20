// from data.js
var tableData = data;

// Select the button and form
var button = d3.select("#filter-btn");
var form = d3.select("#form");

// Event handles
button.on("click", runQuery);
form.on("submit", runQuery);

// Event handle function
function runQuery() {
    // Prevent page refresh on search
    d3.event.preventDefault();

    // read date filter
    var dateElement = d3.select("#datetime");
    console.log(dateElement);

    var date = dateElement.property("value");
    console.log(date);
}


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

    // check if seach is empty
    if (date == "") {
        var filteredData = data;
    }
    else {
        // else filter the specified date
        var filteredData = data.filter(doc => doc.datetime == date);
        console.log(filteredData)
    }
    // select table body
    tableBody = d3.select("tbody");
    // remove old table rows if present
    tableBody.selectAll("tr").remove();

    filteredData.forEach((sighting) => {
        // append a new row
        var newRow = tableBody.append("tr");

        // loop through each sighting as key,value pair
        Object.entries(sighting).forEach(([key,value]) => {
            // add data to the hew row
            var newData = newRow.append("td");
            newData.text(value);
        });
    });
}


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
    var date = dateElement.property("value");
    console.log(date);

    // read city filter
    var cityElement = d3.select("#city");
    var city = cityElement.property("value");
    console.log(city)
    // read state filter
    var stateElement = d3.select("#state");
    var state = stateElement.property("value");
    console.log(state);

    // read country filter
    var countryElement = d3.select("#country");
    var country = countryElement.property("value");
    console.log(country);

    // read shape filter
    var shapeElement = d3.select("#shape");
    var shape = shapeElement.property("value");
    console.log(shape);

    // fucntion for filtering with
    function formFilter(DATA,KEY,QUERY){
        // check if search is empty
        if (QUERY == "") {
            var filteredData = DATA;
        }
        else {
            // else filter the specified value
            var filteredData = DATA.filter(doc => doc.KEY == QUERY);
            console.log(filteredData)
        }
    }
    // select table body
    tableBody = d3.select("tbody");
    // remove old table rows if present
    tableBody.selectAll("tr").remove();

    filteredData.forEach((sighting) => {
        // append a new row
        var newRow = tableBody.append("tr");

        Object.entries(sighting).forEach(([key,value]) => {
            // add data to the hew row
            var newData = newRow.append("td");
            newData.text(value);
        
       
        });
    });
}


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
    var dateIn = dateElement.property("value");
    console.log(dateIn);

    // read city filter
    var cityElement = d3.select("#city");
    var cityIn = cityElement.property("value");
    console.log(cityIn)
    // read state filter
    var stateElement = d3.select("#state");
    var stateIn = stateElement.property("value");
    console.log(stateIn);

    // read country filter
    var countryElement = d3.select("#country");
    var countryIn = countryElement.property("value");
    console.log(countryIn);

    // read shape filter
    var shapeElement = d3.select("#shape");
    var shapeIn = shapeElement.property("value");
    console.log(shapeIn);

    // fucntion for filtering with
    function formFilter(DATA,KEY,QUERY){
        // check if search is empty
        if (QUERY == "") {
            var filteredData = DATA;
        }
        else {
            // else filter the specified value
            var filteredData = DATA.filter(doc => doc[KEY] == QUERY);
        }
        console.log("function ran");
        return filteredData;
    }

    // Filter the data
    /// Filter out date
    var filterDate = formFilter(tableData,datetime,dateIn);
    /// Filter out city
    var filterCity = formFilter(filterDate,city,cityIn);
    /// Filter out date
    var filterState = formFilter(filterCity,state,stateIn);
    /// Filter out date
    var filterCountry = formFilter(filterState,country,countryIn);
    /// Filter out date
    var filterAll = formFilter(filterCountry,shape,shapeIn);
    // select table body
    tableBody = d3.select("tbody");
    // remove old table rows if present
    tableBody.selectAll("tr").remove();

    filterAll.forEach((sighting) => {
        // append a new row
        var newRow = tableBody.append("tr");

        Object.entries(sighting).forEach(([key,value]) => {
            // add data to the new row
            var newData = newRow.append("td");
            newData.text(value);
        });
    });
}


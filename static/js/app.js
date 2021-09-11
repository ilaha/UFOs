const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
    // console.log(data);
    // First, clear out any existing data
    tbody.html("");

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

// Create a variable to keep track of all the filters as an object.
let filters = {};

// Use this function to update the filters.
function updateFilters() {
    // 4a. Save the element that was changed as a variable.
    let filterElement = d3.select(this);

    // 4b. Save the value that was changed as a variable.
    let filter = filterElement.property("value");

    // 4c. Save the id of the filter that was changed as a variable.
    let filterId = filterElement.attr("id");

    // 5. If a filter value was entered then add that filterId and value
    if (filter) {
        filters[filterId] = filter;
        console.log(filters);
    } else {
        delete filters[filterId];
    }
    // to the filters list. Otherwise, clear that filter from the filters object.

    // 6. Call function to apply all filters and rebuild the table
    filterTable();
}

//  Use this function to filter the table when data is entered.
function filterTable() {
    console.log("inside filter table");

    let x = tableData.filter((e) => {
        for (const prop in filters) {
            if (prop in e && filters[prop] === e[prop]) {
                console.log(e);
                return e;
            }
        }
    });

    console.log(x);

    // Finally, rebuild the table using the filtered data
    buildTable(x);
}

let test_data = tableData;

let testing = {};
// 2. Attach an event to listen for changes to each filter
d3.selectAll(".user-input").on("change", updateFilters);

// Build the table when the page loads
buildTable(tableData);

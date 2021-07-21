// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // Clear existing data
    tbody.html("");

    // Loop through each object in the array/data 
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and
        // Add each value as a table cell (td)
        Object.values(dataRow).forEach((val) =>{
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}
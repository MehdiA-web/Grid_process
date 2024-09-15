// Get the JSON data from the hidden field
const data = $('#hid_json').getValue();

let jsonParse;
try {
    // Attempt to parse the JSON data
    jsonParse = JSON.parse(data);
} catch (e) {
    console.error("Invalid JSON format", e);
}

$(document).ready(function () {
    // Initialize DataTable
    const table = $('#example').DataTable();
    console.log(table);

    // Check if JSON parsing was successful
    if (jsonParse) {
        // Add each item from JSON to the DataTable
        jsonParse.forEach(item => {
            table.row.add([
                item.TXT_NAME,
                item.TXT_DOC,
                item.TXT_RATE,
                item.TXT_SCORE,
                item.TXT_SUM
            ]).draw(false);
        });
    } else {
        console.error("No valid data to display in the table");
    }
});

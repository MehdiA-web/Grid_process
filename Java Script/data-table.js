
$(document).ready(function () {
    // Retrieve the JSON data from the hidden field in ProcessMaker
    const data = $('#hid_json').getValue();  // ProcessMaker hidden field value

    console.log("Raw data:", data);  // Debug the raw data from the hidden field

    let jsonParse;
    try {
        jsonParse = JSON.parse(data);  // Parse the JSON string
        console.log("Parsed JSON:", jsonParse);  // Debug the parsed JSON
    } catch (e) {
        console.error("Invalid JSON format", e);  // Log an error if JSON parsing fails
    }

    // Initialize the Kendo Grid if JSON data is successfully parsed
    if (jsonParse) {
        $("#grid").kendoGrid({
            dataSource: {
                data: jsonParse,  // Use the parsed JSON data
                schema: {
                    model: {
                        fields: {
                            TXT_NAME: { type: "string" },
                            TXT_DOC: { type: "string" },
                            TXT_RATE: { type: "number" },
                            TXT_SCORE: { type: "number" },
                            TXT_SUM: { type: "number" }
                        }
                    }
                },
                pageSize: 5
            },
            height: 400,
            scrollable: true,
            pageable: true,
            columns: [
                { field: "TXT_NAME", title: "Name" },
                { field: "TXT_DOC", title: "Document" },
                { field: "TXT_RATE", title: "Rate" },
                { field: "TXT_SCORE", title: "Score" },
                { field: "TXT_SUM", title: "Sum" }
            ]
        });
    } else {
        console.error("No valid data to display in the grid.");
    }
});
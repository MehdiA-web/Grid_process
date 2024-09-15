<?php
// Query to select specific columns from the table where status is 'COMPLETED'
$sql = "SELECT `TXT_ADDRES`, `TXT_DOC`, `TXT_NAME`, `TXT_RATE`, `TXT_SCORE`, `TXT_SUM` FROM `pmt_gridinfo` WHERE `APP_STATUS`='COMPLETED'";
$result = executeQuery($sql);

// Ensure the result is a numerically indexed array (if necessary)
$result_values = array_values($result);

// Convert the array to JSON format
$json = json_encode($result_values);

// Store the JSON string in a ProcessMaker variable
@@hid_json = $json;
؟>
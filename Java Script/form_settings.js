// Define the form ID that you want to hide initially
var this_form_Id = "27668574666e165be99f434008842109";
// Hide the form with the given ID
$('#' + this_form_Id).hide();

// Bind click event for the button with ID 'btn_do' inside a 'button' element
$('#btn_do button').on('click', function () {

    // Initialize totalScore to 0
    var totalScore = 0;

    // Select the grid element with ID 'grd_process'
    var grid = $("#grd_process");

    // Get the number of rows in the grid
    var numRows = grid.getNumberRows();

    // Loop through each row (assuming index starts at 1, change if it starts at 0)
    for (var i = 1; i <= numRows; i++) {

        // Get the values from columns 3 (doc), 4 (score), and 5 (rate) for the current row
        var doc = parseFloat(grid.getValue(i, 3));
        var score = parseFloat(grid.getValue(i, 4));
        var rate = parseFloat(grid.getValue(i, 5));

        // If the score is valid (not NaN), add it to totalScore
        if (!isNaN(score)) {
            totalScore += score;
        }

        // If both doc and rate are valid, calculate the result and set it in column 6
        if (!isNaN(doc) && !isNaN(rate)) {
            var result = doc * rate;
            grid.setValue(result, i, 6); // Set the calculated result in column 6 of the current row
        }
    }

    // Set the totalScore in the element with ID 'text0000000001'
    $("#txt_sumScore").setValue(totalScore);

    // Log the totalScore to the console
    console.log('Total Score: ' + totalScore);

}).addClass('btn-success'); // Add 'btn-success' class to the button after binding the click event

// Bind click event for the submit button
$('#btn_submit button').on('click', function () {

    // Save and submit the form
    $('form').saveForm();
    $('form').submitForm();

}).addClass('btn-danger'); // Add 'btn-danger' class to indicate a destructive or important action

$('#btn_check button').on('click', function () {

    // Save and submit the form
    $('form').saveForm();
    $('form').submitForm();

}).addClass('btn-danger');

// Bind click event for tab_1
$('#tab_1').click(function () {

    // Get the panel content by ID and toggle its visibility
    var $panelContent = $('#40601948966e168382b9952042769232');
    var $panelContent1 = $('#94602785166e5637470a434059076217');
    $panelContent1.hide();
    $panelContent.slideToggle(); // Smoothly toggle (show/hide) the content
    // $("#btn_check").slideToggle();

});

$('#tab_2').click(function () {

    // Get the panel content by ID and toggle its visibility
    var $panelContent = $('#94602785166e5637470a434059076217');
    var $panelContent1 = $('#40601948966e168382b9952042769232');
    $panelContent1.hide();
    // $("#btn_check").hide();
    $panelContent.slideToggle(); // Smoothly toggle (show/hide) the content

});

var $panelContent1 = $('#94602785166e5637470a434059076217');
$panelContent1.hide();


// from data.js
var tableData = data;

// Initialize the filterCriteria object
var filterCriteria = {};

// Initialize filteredData
var filteredData = tableData;

// Select "Filter Table" button
var filterButton = d3.select("#filter-btn");

// Select tbody
var tbody = d3.select("tbody");	

// Prepare an object for looping through to populate each of the five dropdowns in the HTML
var keyAndFilters = [{
		fieldName: 'Date', 
		tableKey: 'datetime'
	},
	{
		fieldName: 'City', 
		tableKey: 'city'
	},
	{
		fieldName: 'State', 
		tableKey: 'state'
	},
	{
		fieldName: 'Country', 
		tableKey: 'country'
	},
	{
		fieldName: 'Shape', 
		tableKey: 'shape'
	}
];

// Populate each of the five dropdowns in the HTML
Object.entries(keyAndFilters).forEach(([key, value]) => selectAndPopulate(value.fieldName, value.tableKey));

// Function to select and and populate each of the five dropdowns in the HTML
function selectAndPopulate(fieldName, tableKey) {

	// Select the select tag for the fieldName
	var field_menu = d3.select('#sel'+fieldName);

	// Populate dropdown with dates available
	var optionsArray = [...new Set(tableData.map(sightings => sightings[tableKey]))];
	optionsArray.unshift('Blank');
	optionsArray.forEach(option => field_menu.append('option').attr('value', option).text(option.toUpperCase()));
}

// Function that updates the filteredData 
function updateFilteredData(queryField, queryValue) {

	filteredData = tableData; 

	// Update filterCriteria's queryField with new queryValue
	filterCriteria[queryField] = queryValue;

  	// Loop through each criteria and update filteredData
  	Object.entries(filterCriteria).forEach(([key, value]) => {
		filteredData = filteredData.filter(function (sightings) {
			if (value === 'Blank') {
				return sightings[key];
			} else {
				return sightings[key] === value;
			}
		});
  	});
}

// Select table Filter Button
filterButton.on("click", function() {

	// Prevent the page from refreshing
	d3.event.preventDefault();

	updateTbody(filteredData);
});

// Function to update the table in the tbody
function updateTbody(filteredData) {

	// Clear the data in tbody
	tbody.text('');

	// Populate tbody with rows and cells needed for filteredData
	filteredData.forEach(record => { 

		// Assign new appended row into a variable for later use
		var row = tbody.append('tr');

		// Loop through table 
		Object.entries(record).forEach( ([key, value]) => {

			// Append stats
			row.append('td').text(value);
		});
	});
}

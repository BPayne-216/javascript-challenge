// from data.js
var tableData = data;

// Reveal the entire table
tableData.forEach(appendTable);
//Select Filter table button
var filterButton = d3.select("#filter-btn");

filterButton.on("click", function() {
    //Remove any dates from list
    d3.select("tbody").html("");
    //Prevent page from refreshing
    d3.event.preventDefault();
    //Get the value property of the input element
    var dateTime = d3.select("#datetime").property("value");
    console.log(dateTime);
    var filteredData = tableData.filter(record => record.datetime === dateTime);
    console.log(filteredData)
    //forEach to filter the table  
    filteredData.forEach(appendTable); 
});

function appendTable(report) {
    //Select the list element by class name
    var tbody = d3.select("tbody");
     //append 'tr' element
    var row = tbody.append("tr");

    Object.entries(report).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
}


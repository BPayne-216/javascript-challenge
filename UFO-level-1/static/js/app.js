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
      
    filteredData.forEach(appendTable); 
});

function appendTable(report) {
    var tbody = d3.select("tbody");

    var row = tbody.append("tr");

    Object.entries(report).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);

        if (key === "comments") {
            cell.attr("class", "record-comments")
        }
    });
}


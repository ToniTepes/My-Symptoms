// Make a get request to our api route that will return complete diary
$.get("/api/all", function(data) {
  // For each diary entry that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // Create a parent div to hold diary data
    var wellSection = $("<div>");
    // Add a class to this div: 'well'
    wellSection.addClass("well");
    // Add an id to the well to mark which well it is
    wellSection.attr("id", "diary-well-" + i);
    // Append the well to the well section
    $("#well-section").append(wellSection);

    // Now  we add our diary data to the well we just placed on the page
    // eslint-disable-next-line prettier/prettier
    $("#diary-well-" + i).append("<h2>" + (i + 1) + ". " + data[i].type+ "</h2>");
    $("#diary-well-" + i).append("<h3>" + data[i].description + "</h4>");
    $("#diary-well-" + i).append("<h3>" + data[i].severity + "</h4>");
    $("#diary-well-" + i).append("<h4>" + createdAt + "</h4>");
  }
});

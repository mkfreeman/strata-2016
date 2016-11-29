// Wait for page to load
$(function() {
	// Object that describes a course at a university
	course = {}

	// Write a property of `course` that allows you to get/set its attributes
	// The method should allow method chaining.
	course.attr = function(attr, value) {
		if(!arguments.length) return this // return the object if no attr is provided
  		if(arguments.length < 2) return this[attr]; // return the value if its not provided
	  	this[attr] = value; // Set the attribute to the value
	  	return this; // return the object to allow method chaining
	};

	// Leverage method chanining to set some inital values
	course.attr('title', 'Interactive Information Visualization')
		  .attr('code', 'INFO-474');

	// Set intial text display value
	$('#course-text').text(JSON.stringify(course,  null, '\t'))

	// Set listener to input elements
	$('input').keyup(function() {
		// Get input values
		var attr = $(this).attr('id');
		var val = $(this).val();

		// Set values and change displayed text
		course.attr(attr, val);
		$('#course-text').text(JSON.stringify(course,  null, '\t'))
	})

});

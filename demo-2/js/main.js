// Wait for page to load
$(function() {
	// Create sample people
	person1 = newPerson() // returns our person function
	                .age(22) // sets the age variable within the proper context
	                .firstName('Maria'); // sets the name variable within proper context

	person2 = newPerson();

	person3 = newPerson();

	// Store people in array
	var people = [person1, person2, person3];

	// Iterate through people and create controls
	people.forEach(function(person, id){
		var wrapper = $("<div class='input-field col s4'>")
		var title = $("<h4>Person-" + id + "</h4>")
		var ageInput = $('<input type="number" value=' + person.age() +  '>')
		ageInput.keyup(function() {
			person.age($(this).val())
		});

		var nameInput = $('<input type="text" value=' + person.firstName() +  '>')
		nameInput.keyup(function() {
			person.firstName($(this).val())
		});

		wrapper.append(title).append(nameInput).append(ageInput);
		$("form").append(wrapper);
	});

	// Function to update text
	var updateText = function() {
		people.forEach(function(person, id){
			$("#person-" + id).text(JSON.stringify(person(),  null, '\t'))

		});
	}
	updateText();

	// Update text displayed
	$('input').keyup(function() {
		updateText();
	})
});

// Function that returns a new person object
var newPerson = function() {
    // Default values
    var firstName = 'None';
    var age = 0;

    // Define an empty person function to return
    var person = function(){
        return {
            firstName:firstName,
            age:age
        }
    };

    // Add a name property to the person function that will get/set the `age` property
    person.firstName = function(value) {
        if(!arguments.length) return firstName; // returns current value
        firstName = value; // changes the value of age, only part of this function
        return this; // allows method chaining
    };

    // Add an `age` property to the person function that will get/set the `age` property
    person.age = function(value) {
        if(!arguments.length) return age; // returns current value
        age = value; // changes the value of age, only part of this function
        return this; // allows method chaining
    };



    console.log('person ', person.age)
    return person; // return the person object when the function is executed
};

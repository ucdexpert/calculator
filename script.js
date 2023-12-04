function calculateAge() {
    // Get the date of birth from the input field
    var dob = document.getElementById('dob').value;

    // Create a Date object for the current date
    var currentDate = new Date();

    // Create a Date object for the entered date of birth
    var birthDate = new Date(dob);

    // Calculate the age
    var age = currentDate.getFullYear() - birthDate.getFullYear();

    // Check if the birthday has occurred this year
    if (currentDate.getMonth() < birthDate.getMonth() || 
        (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }

    // Display the result
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'Your age is: ' + age + ' years';
}

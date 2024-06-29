document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const formData = new FormData(this);

    // Display collected data (for demonstration purposes)
    for (let pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
    }

    // You can send the form data to a server-side script via AJAX for processing
    // Example using fetch API:
    /*
    fetch('submit_form.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Optionally show a success message or redirect to another page
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle errors, show an error message to the user
    });
    */

    // For demonstration, alert a success message
    alert('Application submitted successfully!');
    // You could also redirect to a thank you page or perform other actions here
});

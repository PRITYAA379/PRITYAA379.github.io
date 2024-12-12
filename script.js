document.getElementById('scheduleForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Simulate form submission (you can integrate real email or database later)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const datetime = document.getElementById('datetime').value;

    if (name && email && datetime) {
        document.getElementById('successMessage').style.display = 'block';

        // Clear form fields
        document.getElementById('scheduleForm').reset();
    }
});

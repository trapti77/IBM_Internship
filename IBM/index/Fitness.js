document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('confirmation').style.display = 'block';
});

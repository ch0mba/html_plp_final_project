// You can add more interactive JavaScript here if needed
// For example, handling button clicks for "View Details"
document.addEventListener('DOMContentLoaded', function() {
    const detailButtons = document.querySelectorAll('.car-card .button');
    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Details for this car will be shown here!');
            // In a real application, you would redirect to a details page
        });
    });
});
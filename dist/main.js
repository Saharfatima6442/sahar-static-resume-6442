// Add a welcome message
function displayWelcomeMessage() {
    var container = document.querySelector('.resume-container');
    var message = document.createElement('p');
    message.textContent = "Welcome to Sahar Fatima's Professional Resume!";
    message.style.textAlign = 'center';
    message.style.fontStyle = 'italic';
    container.insertBefore(message, container.firstChild);
}
document.addEventListener('DOMContentLoaded', function () {
    displayWelcomeMessage();
});

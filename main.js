"use strict";
// Add a welcome message
Object.defineProperty(exports, "__esModule", { value: true });
function displayWelcomeMessage() {
    const container = document.querySelector('.resume-container');
    const message = document.createElement('p');
    message.textContent = "Welcome to Sahar Fatima's Static Resume!";
    message.style.textAlign = 'center';
    message.style.fontStyle = 'italic';
    container.insertBefore(message, container.firstChild);
}
document.addEventListener('DOMContentLoaded', () => {
    displayWelcomeMessage();
});

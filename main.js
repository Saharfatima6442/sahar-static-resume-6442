"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Add a welcome message
function displayWelcomeMessage() {
    const container = document.querySelector('.resume-container');
    const message = document.createElement('p');
    message.textContent = "Welcome to Sahar Fatima's Professional Resume!";
    message.style.textAlign = 'center';
    message.style.fontStyle = 'italic';
    container.insertBefore(message, container.firstChild);
}
document.addEventListener('DOMContentLoaded', () => {
    displayWelcomeMessage();
});

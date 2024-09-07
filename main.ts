// Add a welcome message


function displayWelcomeMessage(): void {
    const container = document.querySelector('.resume-container') as HTMLElement;
    const message = document.createElement('p');
    message.textContent = "Welcome to Sahar Fatima's Static Resume!";
    message.style.textAlign = 'center';
    message.style.fontStyle = 'italic';
    container.insertBefore(message, container.firstChild);

}

document.addEventListener('DOMContentLoaded', () => {
    displayWelcomeMessage();
});

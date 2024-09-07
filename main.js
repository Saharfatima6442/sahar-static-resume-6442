"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Greet the user
function greetUser() {
    const header = document.querySelector('header');
    const greeting = document.createElement('p');
    greeting.textContent = "Welcome to my professional resume!";
    greeting.style.fontStyle = "italic";
    header.appendChild(greeting);
}
// Display education dynamically
function displayEducation() {
    const educationSection = document.querySelector('.education');
    const educationInfo = {
        institution: "University of XYZ",
        degree: "Bachelor of Computer Science",
        year: "2022"
    };
    const educationDetails = document.createElement('p');
    educationDetails.textContent = `${educationInfo.degree} from ${educationInfo.institution}, Graduated: ${educationInfo.year}`;
    educationSection.appendChild(educationDetails);
}
document.addEventListener('DOMContentLoaded', () => {
    greetUser();
    displayEducation();
});

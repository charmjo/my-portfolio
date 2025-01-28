// This is not efficient but I just want this to work
const PROJECTS =
[
    {
        "name": "My Profile",
        "image": require("../assets/img/projects/assignment1.png"),
        "alt-text": "assignment 1 image",
        "description": "The goal of this 1st assignment is to create a resume using html and css. I opted for a purple monochrome theme based on the purple banner image.",
        "tags": ["html","css"],
        "location": "#"
    },
    {
        "name": "Shopping Site",
        "image": require("../assets/img/projects/assignment4.png"), 
        "alt-text": "assignment 4 image",
        "description": "Developed an online store web application. Bootstrap was used for forms, jQuery was used to pass data to the server, PHP OOP was used to process data, and MySQL was used to store data.",
        "tags": ["html","css", "bootstrap", "jQuery","PHP","mySQL"],
        "location": "https://github.com/charmjo/webdev-assignment4"
    },
    {
        "name": "iOS Midterm Exam",
        "image": require("../assets/img/projects/ios_midterm.png"), 
        "alt-text": "iOS Midterm image",
        "description": "Built a multi-page Storyboard application showcasing an understanding of essential elements such as text fields, images, and labels. Navigation bars and Tab bars were used to move through different pages.",
        "tags": ["storyboard,swift"],
        "location": "https://github.com/charmjo/ios-midterm"
    }, 
    {
        "name": "iOS Final Exam",
        "image": require("../assets/img/projects/ios_final.png"), 
        "alt-text": "iOS Final image",
        "description": "Implemented a multi-page Storyboard application allowing users to enter a location through an alert prompt. Utilizing iOS’ geolocation library, data such as weather information, news articles and map routing were retrieved, formatted, and displayed.",
        "tags": ["storyboard,swift"],
        "location": "https://github.com/charmjo/ios-final"
    }
]

export default PROJECTS;
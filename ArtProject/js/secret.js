const images = [
    "../images/Cats/cat1.png",
    "../images/Cats/cat2.png",
    "../images/Cats/cat3.png",
    "../images/Cats/cat4.png",
    "../images/Cats/cat5.png",
    "../images/Cats/cat6.png",
    "../images/Cats/cat7.png",
    "../images/Cats/cat8.gif",
    "../images/Cats/cat9.gif",
    "../images/Cats/cat10.gif",
];

// Function to display a random image
function displayRandomImage() {
    try {
        const randomIndex = Math.floor(Math.random() * images.length);
        const randomImage = images[randomIndex];
        const imageElement = document.getElementById("random-image");
        if (imageElement) {
            imageElement.src = randomImage;
        } else {
            throw new Error("Element with id 'random-image' not found.");
        }
    } catch (error) {
        console.error(error);
        redirectToAboutUs();
    }
}

// Function to redirect to Aboutus.html
function redirectToAboutUs() {
    window.location.href = "../pages/Aboutus.html";
}

// Function to go back to Aboutus.html
function goBack() {
    window.location.href = "../pages/Aboutus.html"; // Explicitly redirect to Aboutus.html
}

// Add event listener to the return button
document.addEventListener("DOMContentLoaded", () => {
    const returnButton = document.getElementById("return-button");

    if (returnButton) {
        returnButton.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default behavior
            goBack(); // Call the goBack function to redirect to Aboutus.html
        });
        console.log("Return button event listener added.");
    } else {
        console.error("Return button not found.");
        redirectToAboutUs();
    }
});

// Call the function to display a random image when the page loads
window.onload = displayRandomImage;
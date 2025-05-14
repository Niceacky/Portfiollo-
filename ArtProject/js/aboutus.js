document.addEventListener("DOMContentLoaded", () => {
    // Get the footer image by its ID
    const footerImage = document.getElementById("footer-image");

    // Add a click event listener to the image
    if (footerImage) {
        footerImage.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default behavior of the link
            window.location.href = "../pages/Secret.html"; // Redirect to Secret.html
        });
    } else {
        console.error("Footer image not found.");
    }
});
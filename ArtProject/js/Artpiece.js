// Array to store favorite art pieces
let favorites = [];

// Function to update the favorites section
function updateFavoritesSection() {
    const favoritesSection = document.getElementById("favorites-section");
    if (!favoritesSection) {
        console.error("Favorites section not found.");
        return;
    }

    favoritesSection.innerHTML = ""; // Clear the section

    if (favorites.length === 0) {
        favoritesSection.innerHTML = "<p>No favorites yet.</p>";
        return;
    }

    favorites.forEach((favorite) => {
        const img = document.createElement("img");
        img.src = favorite.src;
        img.alt = favorite.alt;
        img.style.width = "150px"; // Set a smaller size for the favorites section
        img.style.margin = "10px";

        favoritesSection.appendChild(img);
    });
}

// Function to handle favoriting
function handleFavorite(event) {
    const button = event.target;
    const dataId = button.getAttribute("data-id");
    const img = document.querySelector(`img[data-id="${dataId}"]`);

    if (!img) {
        console.error(`Image with data-id "${dataId}" not found.`);
        return;
    }

    // Check if the art piece is already in favorites
    const isAlreadyFavorite = favorites.some((fav) => fav.src === img.src);

    if (isAlreadyFavorite) {
        // Remove from favorites
        favorites = favorites.filter((fav) => fav.src !== img.src);
        button.textContent = "Favorite";
    } else {
        // Add to favorites
        favorites.push({ src: img.src, alt: img.alt });
        button.textContent = "Unfavorite";
    }

    updateFavoritesSection();
}

// Wait for the DOM to load before adding event listeners
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".favorite-button").forEach((button) => {
        button.addEventListener("click", handleFavorite);
    });

    updateFavoritesSection();
});


document.addEventListener("DOMContentLoaded", () => {
    const categoryButtons = document.querySelectorAll(".category-button");
    const imageCells = document.querySelectorAll(".image-table td");

    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");

            imageCells.forEach(cell => {
                if (category === "all" || cell.getAttribute("data-category") === category) {
                    cell.style.display = "table-cell"; // Show matching images
                } else {
                    cell.style.display = "none"; // Hide non-matching images
                }
            });
        });
    });
});
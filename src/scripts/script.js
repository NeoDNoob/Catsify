// Grab DOM elements
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.querySelector('.close');
const breedImages = document.querySelectorAll('.breed img');


// Add click event listener to each breed image
breedImages.forEach(img => {
    img.addEventListener('click', () => {
        const modalTitle = document.getElementById("modalTitle");
        const modalDescription = document.getElementById("modalDescription");
        const breedName = img.nextElementSibling?.innerHTML;
        const linkElement = document.createElement("a");
       

        // Set modal image and text
        modalImage.src = img.src;
        modalTitle.innerText = breedName;
        modalDescription.innerText = breedDescriptions[breedName] || "No description available.";
        linkElement.href = link[breedName] 
        linkElement.textContent = breedName + " Cat Wiki"; 
        modalDescription.appendChild(linkElement);

        // Show modal
        modal.style.display = 'flex';
    });
});

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
    modalImage.src = ''; // Clear image source
}

// Close modal if clicked outside of the content
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Toggle hamburger menu on click
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close hamburger menu if clicking anywhere outside of it
document.addEventListener('click', (e) => {
    if (e.target !== navLinks && e.target !== hamburger) {
        navLinks.classList.remove('active');
    }
});


// Set current year dynamically for copyright
document.getElementById("copyright").innerHTML =
    "© " + new Date().getFullYear() + " Neo Genesis Garcia. Built for educational purposes";

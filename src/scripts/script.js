const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.querySelector('.close');
const breedImages = document.querySelectorAll('.breed img');


function openDescriptionModal(breed) {
    const modal = document.getElementById("descriptionModal");
    const title = document.getElementById("modalTitle");
    const desc = document.getElementById("modalDescription");

    title.innerText = breed;
    desc.innerText = breedDescriptions[breed] || "No description available.";
    modal.style.display = "block";
}

function closeDescriptionModal() {
    const modal = document.getElementById("descriptionModal");
    modal.style.display = "none";
}

window.onclick = function (event) {
    const descModal = document.getElementById("descriptionModal");
    if (event.target == descModal) {
        descModal.style.display = "none";
    }
};

breedImages.forEach(img => {
    img.addEventListener('click', () => {
        modalImage.src = img.src;
        modal.style.display = 'flex';
    });
});

function closeModal() {
    modal.style.display = 'none';
    modalImage.src = '';
}

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (e.target !== navLinks && e.target !== hamburger) {
        navLinks.classList.remove('active');
    }
});

function closeHamburger() {
    navLinks.classList.remove('active');
}

document.getElementById("copyright").innerHTML = "© " + new Date().getFullYear() + " Neo Genesis Garcia. Built for educational purposes";

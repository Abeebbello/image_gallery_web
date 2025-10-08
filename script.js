let currentGallery = null;
let currentIndex = 0;
let images = [];

// Show selected gallery
function openGallery(categoryId) {
  document.getElementById("homepage").style.display = "none";
  document.getElementById(categoryId).style.display = "block";
  currentGallery = categoryId;
  setupGallery(categoryId);
}

// Back to homepage
function goBack() {
  document.querySelectorAll(".gallery-page").forEach(page => page.style.display = "none");
  document.getElementById("homepage").style.display = "block";
}

// Setup gallery click events
function setupGallery(categoryId) {
  const gallery = document.querySelector(`#${categoryId} .gallery`);
  images = Array.from(gallery.querySelectorAll("img"));
  images.forEach((img, i) => {
    img.onclick = () => openModal(i);
  });
}

// Open modal
function openModal(index) {
  currentIndex = index;
  document.getElementById("modal").style.display = "flex";
  showImage();
}

// Show image in modal
function showImage() {
  document.getElementById("modal-img").src = images[currentIndex].src;
}

// Change image
function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  showImage();
}

// Close modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Close on outside click
document.getElementById("modal").addEventListener("click", (e) => {
  if (e.target.id === "modal") closeModal();
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (document.getElementById("modal").style.display === "flex") {
    if (e.key === "ArrowRight") changeImage(1);
    if (e.key === "ArrowLeft") changeImage(-1);
    if (e.key === "Escape") closeModal();
  }
});

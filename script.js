// Navigation Functionality
function navigateTo(category) {
  alert(`Navigating to ${category} products...`);
}

// Search Bar Interaction
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('focus', () => {
  searchInput.style.width = '200px';
  searchInput.style.transition = 'width 0.3s ease';
});
searchInput.addEventListener('blur', () => {
  searchInput.style.width = '150px';
});

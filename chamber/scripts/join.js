document.addEventListener("DOMContentLoaded", () => {
  function openModal(modalId) {
      const modal = document.getElementById(modalId);
      modal.style.display = 'block'; // Make it visible (but still invisible due to opacity: 0)
      setTimeout(() => {
          modal.classList.add('open'); // Add 'open' class to trigger opacity transition
      }, 10); // Small delay to allow display:block to register
  }

  function closeModal(modalId) {
      const modal = document.getElementById(modalId);
      modal.classList.remove('open'); // Remove 'open' class to start fade-out
      modal.addEventListener('transitionend', function handler() {
          modal.style.display = 'none'; // Hide after transition
          modal.removeEventListener('transitionend', handler); // Clean up
      }, {once: true}); // Ensure the listener runs only once
  }

  window.onclick = function(event) {
      if (event.target.classList.contains('Modal')) {
          closeModal(event.target.id); // Call closeModal to trigger the fade-out
      }
  }

  window.openModal = openModal;
  window.closeModal = closeModal;
});
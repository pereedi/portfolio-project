// --- Consolidated JavaScript for the entire portfolio ---

document.addEventListener('DOMContentLoaded', () => {

  // --- Hamburger Menu Logic ---
  const responsiveSidebar = document.getElementById('responsive-sidebar');
  const hamburger = document.getElementById('hamburger');

  if (hamburger && responsiveSidebar) {
      hamburger.addEventListener('click', () => {
          const icon = hamburger.querySelector('i');
          icon.classList.toggle('fa-bars');
          icon.classList.toggle('fa-times');

          // Toggle responsive sidebar visibility
          responsiveSidebar.classList.toggle('translate-x-full');
          responsiveSidebar.classList.toggle('translate-x-0');
      });
  }

  // --- Dark Mode Toggle Logic ---
  const toggleButtons = document.querySelectorAll('#dark-mode-toggle, #dark-mode-toggle-responsive');
  
  const updateToggleIcons = () => {
      const isDarkMode = document.body.classList.contains('dark-mode');
      toggleButtons.forEach(btn => {
          btn.textContent = isDarkMode ? '☀️' : '🌙';
      });
  };

  // Set initial state of the buttons on page load
  updateToggleIcons();

  toggleButtons.forEach((button) => {
      button.addEventListener('click', () => {
          document.body.classList.toggle('dark-mode');
          updateToggleIcons();
      });
  });

  // --- Animate progress bars on the 'About' page ---
  const progressBars = document.querySelectorAll('.progress-bar');
  progressBars.forEach((bar) => {
      const percentage = bar.getAttribute('data-percentage');
      bar.style.width = '0%'; // Start at 0%
      setTimeout(() => {
          bar.style.transition = 'width 1.5s ease-in-out';
          bar.style.width = percentage + '%';
      }, 100);
  });

  // --- Animate Main Content on Load ---
  const mainContent = document.querySelector("main"); // Animate the main tag itself
  if (mainContent) {
      setTimeout(() => {
          mainContent.classList.remove("opacity-0", "translate-y-10");
          mainContent.classList.add("opacity-100", "translate-y-0");
      }, 300);
  }
});

// --- Read more functionality (Globally available for 'About' page) ---
function readMore(button, fullContent) {
  const parent = button.parentElement;
  const content = parent.querySelector('p');
  if (content) {
      content.textContent = fullContent;
  }
  button.remove();
}
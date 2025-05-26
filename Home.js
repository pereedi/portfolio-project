
  // JavaScript for Hamburger Menu
  const sidebar = document.getElementById('sidebar');
  const hamburger = document.getElementById('hamburger');

  hamburger.addEventListener('click', () => {
    const icon = hamburger.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');

    // Toggle sidebar visibility
    sidebar.classList.toggle('translate-x-full');
    sidebar.classList.toggle('translate-x-0');
  });

   // Animate progress bars
   document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress-bar");
    progressBars.forEach((bar) => {
      const percentage = bar.getAttribute("data-percentage");
      bar.style.width = "0%"; // Start at 0%
      setTimeout(() => {
        bar.style.transition = "width 1.5s ease-in-out";
        bar.style.width = percentage + "%"; // Animate to the assigned percentage
      }, 100);
    });
  });

 //read more functionality
  function readMore(button, fullContent) {
    const parent = button.parentElement;
    const content = parent.querySelector('p');
    content.textContent = fullContent;
    button.remove();
  }


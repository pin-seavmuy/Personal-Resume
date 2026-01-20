// project-modal.js
document.addEventListener('DOMContentLoaded', function() {
  // Load modal HTML
  fetch('modal.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('modal-container').innerHTML = html;

      // Select all project links
      const projectLinks = document.querySelectorAll('.project-link');
      const modalTitle = document.getElementById('projectModalLabel');
      const modalDescription = document.getElementById('projectDescription');

      // Add click listener for each project
      projectLinks.forEach(link => {
        link.addEventListener('click', () => {
          const title = link.getAttribute('data-title');
          const description = link.getAttribute('data-description');
          modalTitle.textContent = title;
          modalDescription.textContent = description;
        });
      });
    })
    .catch(err => console.error('Failed to load modal:', err));
});

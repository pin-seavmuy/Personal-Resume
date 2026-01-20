document.addEventListener('DOMContentLoaded', function() {
  // Load modal HTML
  fetch('modal.html')
    .then(response => response.text())
    .then(html => {
      // Add modal to page
      document.getElementById('modal-container').innerHTML = html;

      // Wait a tick to ensure Bootstrap has initialized the modal
      setTimeout(() => {
        const projectLinks = document.querySelectorAll('.project-link');
        const modalTitle = document.getElementById('projectModalLabel');
        const modalDescription = document.getElementById('projectDescription');

        projectLinks.forEach(link => {
          link.addEventListener('click', () => {
            const title = link.getAttribute('data-title');
            const description = link.getAttribute('data-description');
            modalTitle.textContent = title;
            modalDescription.textContent = description;
          });
        });
      }, 100);
    })
    .catch(err => console.error('Failed to load modal:', err));
});

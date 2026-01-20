// Load modal HTML into page
fetch('modal.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('modal-container').innerHTML = html;

    // Once modal is loaded, attach event listeners
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
  });

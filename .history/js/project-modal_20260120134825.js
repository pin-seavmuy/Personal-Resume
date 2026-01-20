// project-modal.js

$(document).ready(function() {

    // Listen for clicks on any project image
    $('.project-img').on('click', function() {
        const $img = $(this);

        // Read data from the image
        const title = $img.data('title');
        const description = $img.data('description');
        const tech = $img.data('tech');
        const images = $img.data('images').split(',').map(i => i.trim());
        const link = $img.data('link');

        // Fill modal content
        $('#projectModalLabel').text(title);
        $('#projectDescription').text(description);
        $('#projectTech').text(tech);

        const $imagesContainer = $('#projectImages');
        $imagesContainer.empty(); // clear previous images

        images.forEach(src => {
            const $imgEl = $('<img>')
                .attr('src', src)
                .addClass('img-fluid me-2 mb-2')
                .css({'max-width': '150px', 'border': '1px solid #ddd', 'border-radius': '4px'});
            $imagesContainer.append($imgEl);
        });

        $('#projectLink').attr('href', link);
    });

});

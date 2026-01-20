// project-modal.js

$(document).ready(function() {

    // When any project image is clicked
    $('.project-img').on('click', function() {
        const $img = $(this);

        const title = $img.data('title');
        const description = $img.data('description');
        const tech = $img.data('tech');
        const images = $img.data('images').split(',').map(i => i.trim());
        const link = $img.data('link');

        // Set modal content
        $('#projectModalLabel').text(title);
        $('#projectDescription').text(description);
        $('#projectTech').text(tech);

        // Clear old images
        const $imagesContainer = $('#projectImages');
        $imagesContainer.empty();

        // Add new images
        images.forEach(src => {
            const $imgEl = $('<img>')
                .attr('src', src)
                .addClass('img-fluid me-2 mb-2')
                .css({'max-width': '150px', 'border': '1px solid #ddd', 'border-radius': '4px'});
            $imagesContainer.append($imgEl);
        });

        // Set project link
        $('#projectLink').attr('href', link);
    });

});

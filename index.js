
// The following code is from ChatGPT
// Get all the navigation links
const links = document.querySelectorAll('nav a');

// Add a click event listener to each link
links.forEach((link) => {
    link.addEventListener('click', () => {
        // Get the ID of the section to show
        const sectionId = link.getAttribute('href');

        // Remove the 'active' class from all the sections
        document.querySelectorAll('active').forEach((section) => {
            section.classList.remove('active');
        });

        // Add the 'active' class to the corresponding section
        document.querySelector(sectionId).classList.add('active');
    });
});

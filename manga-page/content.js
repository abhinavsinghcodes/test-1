    // Function to fetch and display images
    function displayImages() {
        var mangaContainer = document.getElementById('manga1');

        // Path to the folder containing images
        var folderPath = 'chapters/Chapter 1';

        // Number of images
        var numImages = 37; // Update with the actual number of images

        // Loop through each image and create <img> element
        for (var i = 1; i <= numImages; i++) {
            var img = document.createElement('img');
            img.src = folderPath + i + '.jpg'; // Update the extension if needed
            img.alt = 'Manga Page ' + i;
            mangaContainer.appendChild(img);
        }
    }

    // Call the function to display images when the page loads
    window.onload = displayImages;
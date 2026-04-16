// Image cycling functionality for the page hero sections.
// Each page has two hero images that rotate automatically to create motion.

// Home hero image cycle
// Continuous side-image cycler for the home page hero section.
document.addEventListener('DOMContentLoaded', function() {
    // Array of trumpet images facing right
    const leftImgs = [
        'images/home/trumpetfacingright.png',
        'images/home/trumpetfacingrightdown.png'
    ];
    // Array of trumpet images facing left
    const rightImgs = [
        'images/home/trumpetfacingleft.png',
        'images/home/trumpetfacingleftdown.png'
    ];

    // Track current image index for left and right trumpets
    let leftIndex = 0;
    let rightIndex = 0;

    // Get reference to both trumpet image elements
    const leftEl = document.getElementById('pic1');
    const rightEl = document.getElementById('pic2');

    // Function to cycle through both trumpet images at the same time
    function cycleImages() {
        // Move to next image in both arrays, loop back to start when reaching end
        leftIndex = (leftIndex + 1) % leftImgs.length;
        rightIndex = (rightIndex + 1) % rightImgs.length;

        // Update both images
        leftEl.src = leftImgs[leftIndex];
        rightEl.src = rightImgs[rightIndex];
    }

    // Change both images simultaneously every 500 milliseconds with no fading
    setInterval(cycleImages, 450);
});

// History
// Continuous side-image cycler
document.addEventListener('DOMContentLoaded', function() {
    // Array of trumpet images facing right
    const leftImgs = [
        'images/history/coquifacingleftup.png',
        'images/history/coquifacingleftdown.png'
    ];
    // Array of trumpet images facing left
    const rightImgs = [
        'images/history/coquifacingrightup.png',
        'images/history/coquifacingrightdown.png'
    ];

    // Track current image index for left and right trumpets
    let leftIndex = 0;
    let rightIndex = 0;

    // Get reference to both trumpet image elements
    const leftEl = document.getElementById('pic1history');
    const rightEl = document.getElementById('pic2history');

    // Function to cycle through both trumpet images at the same time
    function cycleImages() {
        // Move to next image in both arrays, loop back to start when reaching end
        leftIndex = (leftIndex + 1) % leftImgs.length;
        rightIndex = (rightIndex + 1) % rightImgs.length;

        // Update both images
        leftEl.src = leftImgs[leftIndex];
        rightEl.src = rightImgs[rightIndex];
    }

    // Change both images simultaneously every 500 milliseconds with no fading
    setInterval(cycleImages, 450);
});

// Music
// Continuous side-image cycler
document.addEventListener('DOMContentLoaded', function() {
    // Array of trumpet images facing right
    const leftImgs = [
        'images/music/bongofacingleftup.png',
        'images/music/bongofacingleftdown.png'
    ];
    // Array of trumpet images facing left
    const rightImgs = [
        'images/music/bongofacingrightup.png',
        'images/music/bongofacingrightdown.png'
    ];

    // Track current image index for left and right trumpets
    let leftIndex = 0;
    let rightIndex = 0;

    // Get reference to both trumpet image elements
    const leftEl = document.getElementById('pic1music');
    const rightEl = document.getElementById('pic2music');

    // Function to cycle through both trumpet images at the same time
    function cycleImages() {
        // Move to next image in both arrays, loop back to start when reaching end
        leftIndex = (leftIndex + 1) % leftImgs.length;
        rightIndex = (rightIndex + 1) % rightImgs.length;

        // Update both images
        leftEl.src = leftImgs[leftIndex];
        rightEl.src = rightImgs[rightIndex];
    }

    // Change both images simultaneously every 500 milliseconds with no fading
    setInterval(cycleImages, 450);
});

// Art
// Continuous side-image cycler
document.addEventListener('DOMContentLoaded', function() {
    // Array of trumpet images facing right
    const leftImgs = [
        'images/art/paintbrushfacingleftup.png',
        'images/art/paintbrushfacingleftdown.png'
    ];
    // Array of trumpet images facing left
    const rightImgs = [
        'images/art/paintbrushfacingrightup.png',
        'images/art/paintbrushfacingrightdown.png'
    ];

    // Track current image index for left and right trumpets
    let leftIndex = 0;
    let rightIndex = 0;

    // Get reference to both trumpet image elements
    const leftEl = document.getElementById('pic1art');
    const rightEl = document.getElementById('pic2art');

    // Function to cycle through both trumpet images at the same time
    function cycleImages() {
        // Move to next image in both arrays, loop back to start when reaching end
        leftIndex = (leftIndex + 1) % leftImgs.length;
        rightIndex = (rightIndex + 1) % rightImgs.length;

        // Update both images
        leftEl.src = leftImgs[leftIndex];
        rightEl.src = rightImgs[rightIndex];
    }

    // Change both images simultaneously every 500 milliseconds with no fading
    setInterval(cycleImages, 450);
});
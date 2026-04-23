// This file makes the side images switch back and forth.
// Each section has two image frames, and we swap between them quickly
// to create a simple animated look without using video or GIF files.

// Start changing one pair of images over and over.
// `leftId` and `rightId` are the image elements on the page.
// `leftImages` and `rightImages` are the image file paths used for each side.
function startImageCycle(leftId, rightId, leftImages, rightImages) {
    const leftElement = document.getElementById(leftId);
    const rightElement = document.getElementById(rightId);
    let leftIndex = 0;
    let rightIndex = 0;

    if (!leftElement || !rightElement) {
        return;
    }

    // Move to the next image in each list.
    // If we reach the end, go back to the start so the animation loops forever.
    function cycleImages() {
        leftIndex = leftIndex + 1;
        rightIndex = rightIndex + 1;

        if (leftIndex >= leftImages.length) {
            leftIndex = 0;
        }

        if (rightIndex >= rightImages.length) {
            rightIndex = 0;
        }

        leftElement.src = leftImages[leftIndex];
        rightElement.src = rightImages[rightIndex];
    }

    // Run the image swap every 450 milliseconds.
    setInterval(cycleImages, 450);
}

// Wait for the page to load before starting the image animations.
// Each call below sets up one page's left and right hero images.
document.addEventListener('DOMContentLoaded', function () {
    // Home page
    startImageCycle(
        'pic1',
        'pic2',
        [
            'images/home/trumpetfacingright.png',
            'images/home/trumpetfacingrightdown.png'
        ],
        [
            'images/home/trumpetfacingleft.png',
            'images/home/trumpetfacingleftdown.png'
        ]
    );

    // History page
    startImageCycle(
        'pic1history',
        'pic2history',
        [
            'images/history/coquifacingleftup.png',
            'images/history/coquifacingleftdown.png'
        ],
        [
            'images/history/coquifacingrightup.png',
            'images/history/coquifacingrightdown.png'
        ]
    );

    // Music page
    startImageCycle(
        'pic1music',
        'pic2music',
        [
            'images/music/bongofacingleftup.png',
            'images/music/bongofacingleftdown.png'
        ],
        [
            'images/music/bongofacingrightup.png',
            'images/music/bongofacingrightdown.png'
        ]
    );

    // Art page
    startImageCycle(
        'pic1art',
        'pic2art',
        [
            'images/art/paintbrushfacingleftup.png',
            'images/art/paintbrushfacingrightdown.png'
        ],
        [
            'images/art/paintbrushfacingrightup.png',
            'images/art/paintbrushfacingleftdown.png'
        ]
    );
});

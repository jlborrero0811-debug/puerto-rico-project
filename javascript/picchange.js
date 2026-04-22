// Image cycling functionality for the hero sections.
// Each content area uses a pair of decorative side images that swap between
// two frames to create a simple animated effect.

// Starts a repeating image swap for one left/right image pair.
// `leftId` and `rightId` are the image element ids on the page.
// `leftImages` and `rightImages` are ordered lists of image file paths that
// the function cycles through forever.
function startImageCycle(leftId, rightId, leftImages, rightImages) {
    const leftElement = document.getElementById(leftId);
    const rightElement = document.getElementById(rightId);
    let leftIndex = 0;
    let rightIndex = 0;

    if (!leftElement || !rightElement) {
        return;
    }

    // Move both images to the next frame and loop back to the beginning when
    // the end of either image list is reached.
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

    setInterval(cycleImages, 450);
}

// Start the animated image pairs for each page once the DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
    // Home hero instruments.
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

    // History page coqui images.
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

    // Music page bongo images.
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

    // Art page paintbrush images.
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

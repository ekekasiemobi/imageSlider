let images = ['image1.png', 'image2.png', 'image3.png', 'image4.png'];
let i = 0;
let canvas = document.getElementById('canvas');

// Set the initial background image
canvas.style.background = `url(./images/${images[i]})`;

// Add click event listeners for manual navigation
let arrows = document.querySelectorAll('.arrow');

arrows.forEach(function(arrow) {
    arrow.addEventListener('click', function(e) {
        if (e.target.id === 'left') {
            i--;
            if (i < 0) {
                i = images.length - 1;
            }
            canvas.style.background = `url(./images/${images[i]})`;
        } else if (e.target.id === 'right') {
            i++;
            if (i >= images.length) {
                i = 0;
            }
            canvas.style.background = `url(./images/${images[i]})`;
        }
    });
});

// Automatically slide images every 3 seconds
setInterval(function() {
    i++;
    if (i >= images.length) {
        i = 0;
    }
    canvas.style.background = `url(./images/${images[i]})`;
}, 3000); // 3000 milliseconds = 3 seconds

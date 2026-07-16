const upper = document.getElementsByClassName("upper")[0];
const originalLeaf = document.getElementsByClassName("leafs")[0];

const numberOfDivs = 5000; 
const fragment = document.createDocumentFragment();

const radius = upper.clientWidth / 2;

// Array of different leaf green colors
const greenShades = ['hsl(88, 67%, 36%)', 'hsl(134, 93%, 22%)', '#1de559', '#005a05', '#689f28'];

for (let i = 0; i < numberOfDivs; i++) {
    let clone = originalLeaf.cloneNode(true);
    
    // Position formula for a perfect circle distribution
    let alpha = Math.random() * 2 * Math.PI;
    let r = radius * Math.sqrt(Math.random());
    let randomX = radius + r * Math.cos(alpha);
    let randomY = radius + r * Math.sin(alpha);
    
    clone.style.left = `${randomX - 6}px`;
    clone.style.top = `${randomY - 6}px`;
    
    // VARIATION 1: Assign a random green shade to this leaf
    let randomColor = greenShades[Math.floor(Math.random() * greenShades.length)];
    clone.style.backgroundColor = randomColor;

    // VARIATION 2: Randomize sizes, rotations, and orientations
    let randomRotation = Math.random() * 360;
    let randomScale = 0.4 + Math.random() * 0.8; 
    clone.style.transform = `rotate(${randomRotation}deg) scale(${randomScale})`;
    
    // VARIATION 3: Give leaves subtle individual shapes via border-radius
    if (Math.random() > 0.5) {
        clone.style.borderRadius = "100% 0 100% 0"; // Left-facing leaf
    } else {
        clone.style.borderRadius = "0 100% 0 100%"; // Right-facing leaf
    }

    fragment.appendChild(clone);
}

upper.appendChild(fragment);
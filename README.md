
# Particle Animation with Sketch.js and Snap.svg
Overview
This project creates a dynamic particle animation with a fading effect using the Sketch.js library and an SVG background pattern using Snap.svg. The animation features particles moving across a canvas with a subtle hue shift, overlaid on a patterned SVG background.
## Features
Particle System: Generates up to 120 particles with random velocities, sizes, and lifespans.

Dynamic Animation: Particles move and fade over time, resetting when their lifespan expires.

Color Effects: Uses HSL colors with a gradually shifting hue for visual appeal.

SVG Pattern: Creates a repeating circular pattern as a background using Snap.svg.

Canvas Rendering: Utilizes Sketch.js for lightweight canvas-based animation.

### Prerequisites
To run this project, ensure you have the following:
A modern web browser (e.g., Chrome, Firefox).

Sketch.js library.

Snap.svg library.

A local web server (e.g., Live Server for VS Code) to serve the HTML file and avoid CORS issues.

#### Installation
Clone or Download the Repository:
bash

git clone <repository-url>
cd <repository-folder>

Install Dependencies:
Download Sketch.js and Snap.svg libraries and place them in a lib/ folder in your project directory, or include them via CDN in your HTML file.

Example CDN links:
html

<script src="https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.5.1/snap.svg.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/sketch.js/1.1/sketch.min.js"></script>

##### Project Structure:

particle-animation/
├── index.html
├── js/
│   └── main.js
├── lib/
│   ├── sketch.min.js
│   └── snap.svg.min.js
└── README.md



###### Sketch.js Setup:
Initializes a canvas with autoclear: false for a persistent trail effect.

Creates a particle array (particles) with up to max particles.

Each particle (P class) has properties like position (x, y), velocity (vx, vy), radius (r), and lifespan (life).

Particles are drawn as arcs with a semi-transparent HSL color, updated with each frame.

Particle Behavior:
Particles move based on their velocity, with vy inverted for upward motion.

When a particle's lifespan (life) exceeds maxLife or its radius shrinks to near zero, it resets with new random properties.

Canvas Update:
The canvas is filled with a semi-transparent background (clearColor) to create a fading effect.

The hue shifts slightly each frame for a dynamic color effect.

Snap.svg Pattern:
Creates an SVG circle pattern with a semi-transparent fill, rotated for visual interest.

Applied as a repeating background to the SVG element (#paper).

Contributing
Contributions are welcome! To contribute:
Fork the repository.

Create a new branch (git checkout -b feature-branch).

Make your changes and commit (git commit -m "Add feature").

Push to your branch (git push origin feature-branch).

Open a pull request.

###### Acknowledgments
Sketch.js for the lightweight canvas animation framework.

Snap.svg for SVG manipulation.

Inspired by creative coding experiments in particle systems.

Edit Image


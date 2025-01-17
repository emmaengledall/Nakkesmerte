<template>
    <div class="bubble-sketch rounded-3xl flex font-extralight">
      <div ref="sketchContainer" class="sketch-container"></div> <!-- This will hold the p5.js canvas -->
    </div>
  </template>
  
  <script>
  import p5 from 'p5'; // Import p5.js
  
  export default {
    name: 'BubbleSketch',
    mounted() {
      // Create a new p5.js sketch when the component is mounted
      this.sketch = new p5(this.sketchLogic, this.$refs.sketchContainer);
    },
    beforeDestroy() {
      // Remove the p5.js canvas when the component is destroyed
      if (this.sketch) {
        this.sketch.remove();
      }
    },
    methods: {
      sketchLogic(p) {
        let bubbles = [];
        let noiseOffsets = [];
  
        p.setup = function() {
          p.createCanvas(300, 500);
          for (let i = 0; i < 10; i++) {
            let x, y, radius;
            do {
              radius = p.random(30, 50);
              x = p.random(10 + radius, 300 - radius);
              y = p.random(10 + radius, 500 - radius);
            } while (!isInsideRectangle(x, y, radius));
  
            bubbles.push({ x, y, radius });
            noiseOffsets.push({ xOff: p.random(1000), yOff: p.random(1000) });
          }
        };
  
        p.draw = function() {
          p.background(32, 0);
          rectangle();
  
          // Check if there are no bubbles left
          if (bubbles.length === 0) {
            displayNoBubblesMessage(); // Display the message when no bubbles are left
            return; // Stop the rest of the draw loop
          }
  
          for (let i = 0; i < bubbles.length; i++) {
            let bubble = bubbles[i];
            let noiseOffset = noiseOffsets[i];
  
            // Highlight bubble if the mouse is over it
            if (p.dist(p.mouseX, p.mouseY, bubble.x, bubble.y) < bubble.radius) {
              if (p.mouseIsPressed) {
                bubbles.splice(i, 1); // Remove this bubble!
                noiseOffsets.splice(i, 1); // Remove its noise offset
                continue;
              }
              p.fill('#81B0FF');
            } else {
              p.fill('#81B0FF');
            }
  
            // Calculate offset for stroke to make it slightly off-center
            let strokeOffsetX = bubble.x + p.map(p.noise(noiseOffset.xOff + 500), 0, 1, -5, 5);
            let strokeOffsetY = bubble.y + p.map(p.noise(noiseOffset.yOff + 500), 0, 1, -5, 5);
  
            // Draw the stroke first
            p.noFill();
            p.stroke('#FF9924');
            p.strokeWeight(6);
            p.ellipse(strokeOffsetX, strokeOffsetY, bubble.radius * 2 + 6);
  
            // Draw the shiny bubble with a gradient fill
            p.noStroke();
            drawShinyBubble(bubble.x, bubble.y, bubble.radius);
  
            // Update bubble position using Perlin noise for smooth floating motion
            bubble.x += p.map(p.noise(noiseOffset.xOff), 0, 1, -1, 1);
            bubble.y += p.map(p.noise(noiseOffset.yOff), 0, 1, -1, 1);
  
            // Increment the noise offsets
            noiseOffset.xOff += 0.01;
            noiseOffset.yOff += 0.01;
  
            // Keep bubble inside the rectangle bounds
            bubble.x = p.constrain(bubble.x, 10 + bubble.radius, 290 - bubble.radius); // Fix the right boundary
            bubble.y = p.constrain(bubble.y, 10 + bubble.radius, 490 - bubble.radius); // Fix the bottom boundary
          }
        };
  
        function rectangle() {
          p.stroke(255);
          p.fill(255, 255, 255);
          p.rect(0, 0, 300, 500, 10);
        }
  
        function isInsideRectangle(x, y, radius) {
          return x - radius >= 0 && x + radius <= 300 && y - radius >= 0 && y + radius <= 500;
        }
  
        // Function to display a message when no bubbles are left
        function displayNoBubblesMessage() {
          p.textSize(20);
          p.textAlign(p.CENTER, p.CENTER);
          p.fill(0, 0, 0); // Black color for the message
          p.text("Du har ikke flere frihedsbobler!", p.width / 2, p.height / 2); // Display message at the center of the canvas
        }
  
        // Function to draw a shiny bubble with a highlight
        function drawShinyBubble(x, y, radius) {
          for (let i = 0; i < 10; i++) {
            let alpha = p.map(i, 0, 10, 150, 30); // Gradually decrease alpha for shiny effect
            let radiusOffset = p.map(i, 0, 10, 0, 4); // Slightly increase radius for the glossy effect
  
            p.fill(129, 176, 255, alpha); // Blue color with varying opacity
            p.ellipse(x, y, radius * 2 + radiusOffset);
          };
  
          p.fill(255, 255, 255); // Light white/opaque for the shiny spot
          p.ellipse(x - radius / 2, y - radius / 4, radius / 3, radius / 2); // Highlight in the top-left corner
        }
      }
    }

  }
  </script>
  
  <style>
  .bubble-sketch {
    position: relative;
    width: 100%;
    height: 100%;
    margin-top: 96px;
    padding-top: 96px;
    justify-content: center;
    
  }

  .p5Canvas {
    border-radius: 40px;
  }

  .sketch-container {
  }
  </style>
  
let count = 25;
let border = 50;

function setup() {
  createCanvas(650, 650);
  rectMode(CENTER)

  //Set Blur 
  let dc = drawingContext;
  dc.shadowColor = color(22, 22, 22, 100);
  dc.shadowBlur = 5;

  doArt()
}

function doArt() {
  let topC = random(colors);
  let bottomC = random(colors);
  let horizon = random(count / 2) + count / 4;

  background(255);

  //Set Stroke
  if (round(random())) {
    noStroke();
  } else {
    stroke(20);
  }

  //Make grid
  for (let x = 0; x < count; x++) {
    for (let y = 0; y < count; y++) {
      for (let j = 0; j < 6; j++) {
        let xspace = (width - border) / count;
        let yspace = (height - border) / count;
        let randSize = random(xspace)
        if (y > horizon) {
          fill(random(topC));
          rect(xspace * x + xspace / 2 + border / 2, y * yspace + yspace / 2 + border / 2, randSize, randSize)
        } else {
          fill(random(bottomC));
          ellipse(xspace * x + xspace / 2 + border / 2, y * yspace + yspace / 2 + border / 2, randSize, randSize);
        }
      }
    }
  }
}

function mousePressed() {
  doArt()
}
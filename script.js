const boxes = [
    { x: 10, y: 10, latura: 50, nr: 1 },
    { x: 70, y: 10, latura: 50, nr: 2 },
    { x: 130, y: 10, latura: 50, nr: 3 },
    { x: 190, y: 10, latura: 50, nr: 4 },
    { x: 250, y: 10, latura: 50, nr: 5 },
    { x: 310, y: 10, latura: 50, nr: 6 },
    { x: 370, y: 10, latura: 50, nr: 7 },
    { x: 10, y: 70, latura: 50, nr: 8 },
    { x: 70, y: 70, latura: 50, nr: 9 },
    { x: 130, y: 70, latura: 50, nr: 10 },
    { x: 190, y: 70, latura: 50, nr: 11 },
    { x: 250, y: 70, latura: 50, nr: 12 },
    { x: 310, y: 70, latura: 50, nr: 13 },
    { x: 370, y: 70, latura: 50, nr: 14 },
    { x: 10, y: 130, latura: 50, nr: 15 },
    { x: 70, y: 130, latura: 50, nr: 16 },
    { x: 130, y: 130, latura: 50, nr: 17 },
    { x: 190, y: 130, latura: 50, nr: 18 },
    { x: 250, y: 130, latura: 50, nr: 19 },
    { x: 310, y: 130, latura: 50, nr: 20 },
    { x: 370, y: 130, latura: 50, nr: 21 },
    { x: 10, y: 190, latura: 50, nr: 22 },
    { x: 70, y: 190, latura: 50, nr: 23 },
    { x: 130, y: 190, latura: 50, nr: 24 },
    { x: 190, y: 190, latura: 50, nr: 25 },
    { x: 250, y: 190, latura: 50, nr: 26 },
    { x: 310, y: 190, latura: 50, nr: 27 },
    { x: 370, y: 190, latura: 50, nr: 28 }
];

function setup() {
    createCanvas(800, 400);
    textSize(15); 
    textAlign(CENTER, CENTER); 

    for (let box of boxes) {
        box.culoare = color(random(255), random(255), random(255));
    }
}

function draw() {
    background(220);
    for (let box of boxes) {
        fill(box.culoare);
        rect(box.x, box.y, box.latura, box.latura);
        fill("black"); 
        text(box.nr, box.x + box.latura / 2, box.y + box.latura / 2);
    }
}
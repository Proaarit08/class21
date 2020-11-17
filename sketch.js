var fixedRect, movingRect,go1,go2,go3,go4

function setup() {
  createCanvas(1300,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  go1 = createSprite(100, 100, 50, 80);
  go2 = createSprite(200, 100, 50, 80);
  go3 = createSprite(300, 100, 50, 80);
  go4 = createSprite(400, 100, 50, 80);
  go1.shapeColor = "blue";
  go2.shapeColor = "white";
  go3.shapeColor = "yellow";
  go4.shapeColor = "pink";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if  (isTouching (movingRect,go4)){
movingRect.shapeColor = "red";
  go4.shapeColor = "red";}
else{
  movingRect.shapeColor = "green";
  go4.shapeColor = "pink";
 }
  drawSprites();
}




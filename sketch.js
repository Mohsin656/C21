var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 200, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.v;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityX = 5;

}

function draw() {
  background(0,0,0);  
  
/*if(isTouching(movingRect,fixedRect)) {
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
} else {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}*/
  bounceOff1(movingRect,fixedRect);
  drawSprites();
}

function bounceOff1(object1,object2) {
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
    movingRect.velocityX = movingRect.velocityX * (-1)
    }
}
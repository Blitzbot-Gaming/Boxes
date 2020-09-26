var movingRect,fixedRect;
var gameObject1, gameObject2, gameObject3, gameObject4

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 80,70);
  fixedRect = createSprite(200,300,90,80);
  gameObject1 = createSprite(100,100,50,50);
  gameObject2 = createSprite(200,100,50,50);
  gameObject3 = createSprite(300,100,50,50);
  gameObject4 = createSprite(400,100,50,50);
  gameObject1.shapeColor = "blue";
  gameObject2.shapeColor = "blue";
  gameObject3.shapeColor = "blue";
  gameObject4.shapeColor = "blue";
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";
  movingRect.velocityY = -5;
  gameObject3.velocityY = 5;  
  movingRect.velocityX = -5;
  gameObject3.velocityX = 5; 
}

function draw() {
  background("black");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(isTouching(movingRect,gameObject4)){
    movingRect.shapeColor ="red";
    gameObject4.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "blue";
  gameObject4.shapeColor = "blue";
  }
  bounceOff(movingRect,gameObject3);
  drawSprites();
}


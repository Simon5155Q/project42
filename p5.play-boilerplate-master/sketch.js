var bg;
var issImg, iss
var spaceCraft, spaceCraftImg, ScLImg, ScRImg, ScFImg, ScDImg;

function setup() {
  createCanvas(displayWidth - 50,displayHeight - 105);
  spaceCraftImg = loadImage("Docking-undocking/spacecraft1.png");
  spaceCraft = createSprite(displayWidth/2, displayHeight - 210, 50, 150);
  spaceCraft.addImage(spaceCraftImg);
  spaceCraft.scale = 0.4;

  issImg = loadImage("Docking-undocking/iss.png");
  iss = createSprite(displayWidth/2 - 550, displayHeight/4 - 40, 50, 50);
  iss.addImage(issImg);
  iss.setCollider("circle",-65,5,40);
  iss.debug = false;

  bg = loadImage("Docking-undocking/spacebg.jpg");

  ScLImg = loadImage("Docking-undocking/spacecraft3.png");
  ScRImg = loadImage("Docking-undocking/spacecraft4.png");
  ScFImg = loadImage("Docking-undocking/spacecraft2.png");
  ScDImg = loadImage("Docking-undocking/spacecraft5.png")


}

function k() {
  if(keyDown("UP")){
    spaceCraft.velocityY = -6;
    spaceCraft.addImage(ScFImg);
  }
 
  if(keyDown("DOWN")){
    spaceCraft.velocityY = 6;
    spaceCraft.addImage(spaceCraftImg);
  }
  
  if(keyDown("LEFT")){
    spaceCraft.velocityX = -6;
    spaceCraft.addImage(ScLImg);
  }

  if(keyDown("RIGHT")){
    spaceCraft.velocityX = 6;
    spaceCraft.addImage(ScRImg);
  }
 }

function draw() {
  background(bg); 
  spaceCraft.velocityX = 0;
  spaceCraft.velocityY = 0;
  spaceCraft.addImage(spaceCraftImg);

  if(spaceCraft.isTouching(iss)){
    spaceCraft.y = displayHeight/4 + 50;
    spaceCraft.x = displayWidth/2 - 580;
    spaceCraft.addImage(ScDImg);
  }
  else{
    k();
  }

  drawSprites();

  //console.log(mouseX);
  //console.log(mouseY);
}

 
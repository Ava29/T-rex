var trex, trex_running, trex_collided,cloudq;
var ground, invisibleGround, groundImage;
var O1,O2,O3,O4,O5,O6;  
var score =0;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  cloudq = loadImage("cloud.png");
  groundImage = loadImage("ground2.png")
  O1 = loadImage("obstacle1.png");
  O2 = loadImage("obstacle2.png");
  O3 = loadImage("obstacle3.png");
  O4 = loadImage("obstacle4.png");
  O5 = loadImage("obstacle5.png");
  O6 = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -8;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background(180);
  
  score = score + Math.round(getFrameRate()/60);
  text ("score"+score,500,50);
        
  if(keyDown("space")&&trex.isTouching(ground)) {
    trex.velocityY = -12;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  spawnClouds();
  spawnObstacles();
  
  drawSprites();
}

function spawnClouds() {
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y = random(80,120);
    cloud.addImage("cloudq",cloudq);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    cloud.lifetime = 210;
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
  }
  
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -8;
    var rand = Math.round(random(1,6));   
    switch (rand){
      case 1:obstacle.addImage (O1)
      break;  
      
      case 2:obstacle.addImage (O2)
      break;  
      
      case 3:obstacle.addImage (O3)
      break; 
      
      case 4:obstacle.addImage (O4)
      break;  
      
      case 5:obstacle.addImage (O5)
      break;  
      
      case 6:obstacle.addImage (O6)
      break;  
      }
    obstacle.scale = 0.5;
    obstacle.lifetime = 75;
  }
}



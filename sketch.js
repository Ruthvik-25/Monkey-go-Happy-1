var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime = 0;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(600,600)
  monkey = createSprite(80, 315, 20, 20)
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1


  ground = createSprite(400, 550, 1200, 20);
  ground.velocityX = -4
  ground.x = ground.width / 2;
  console.log(ground.x)
}


function draw() {
  background(255);

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  if (keyDown("space")) {
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  spawnBananas();
  spawnObstacles();


  obstaclesGroup = createGroup();
  bananaGroup = createGroup();

  monkey.collide(ground);

  stroke("white");
  textSize(20);
  fill("white")
  text("score:" + score, 500, 50);

  stroke("black");
  textSize(20);
  fill("black")
  survivalTime = Math.ceil(frameCount / frameRate())
  text("survival Time:" + survivalTime, 60, 30);



  drawSprites();


}
function spawnBananas(){
 if(frameCount%60===0) {
   banana=createSprite(600,Math.round(random(10,400)))
   banana.addImage(bananaImage )
   banana.velocityX=-4
   banana.lifetime=160
   banana.scale=0.1
   bananaGroup.add(banana)
   
 }
}
function spawnObstacles(){
  if(frameCount%200===0) {
   obstacle=createSprite(600,500)
   obstacle.addImage(obstacleImage )
   obstacle.velocityX=-4
   obstacle.lifetime=160
   obstacle.scale=0.2
   obstaclesGroup.add(obstacle)
   
 }
}

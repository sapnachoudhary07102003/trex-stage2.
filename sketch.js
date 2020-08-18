var trex,trexanimation,ground,ground1,groundimage,clouds,cloudimage, obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6,
obstaclegroup,cloudgroup,PLAY,END,gamestate,score;
   

function preload(){
  trexanimation=loadAnimation("trex1.png","trex3.png","trex4.png");
  ground1image=loadImage("ground2.png");
  cloudimage=loadImage("cloud.png");
  obstacle1=loadImage("obstacle1.png");
  obstacle2=loadImage("obstacle2.png");
  obstacle3=loadImage("obstacle3.png");
  obstacle4=loadImage("obstacle4.png");
  obstacle5=loadImage("obstacle5.png");
  obstacle6=loadImage("obstacle6.png");
  
}
function setup() {
  createCanvas(600, 200);
  trex=createSprite(50,165,20,20);
  trex.addAnimation("t1",trexanimation);
  ground=createSprite(300,185,600,10);
  ground.visible=false;
  ground1=createSprite(300,175,600,10);
  ground1.addImage("g1",ground1image);
  cloudgroup=new Group();
  obstaclegroup=new Group();
  PLAY=1;
  END=0;
  gamestate=PLAY;
  score=0;
  trex.scale=0.7;
}

function draw() {
  background(0);
  text("score:"+score,500,50);
  
  if (gamestate===PLAY){
    if (keyDown("space")){
    trex.velocityY=-15;
  }
    ground1.velocityX=-10;
    trex.velocityY=trex.velocityY+0.8;
    if (ground1.x<0){
    ground1.x=ground1.width/2;
    
  }
    clouds();
  obstacles();
  if (obstaclegroup.isTouching(trex)){
      gamestate=END;
      }
    score=score+Math.round(getFrameRate()/60);
    
  }
  
  if (gamestate===END){
    trex.velocityY=0;
    ground1.velocityX=0;
    cloudgroup.setVelocityXEach(0);
    obstaclegroup.setVelocityXEach(0);
    cloudgroup.setLifetimeEach(-1);
    obstaclegroup.setLifetimeEach(-1);
    
  }
  
  
        
  trex.collide(ground);
  
  
  drawSprites();
}

function clouds(){
if (frameCount%60===0){
cloud = createSprite(600,50,20,20);
cloud.y=random(50,100);
  cloud.velocityX=-5;
  cloud.lifetime=150;
  cloud.addImage(cloudimage);
cloudgroup.add(cloud);
}
}

function obstacles(){
  if (frameCount%100===0){
    obstacle=createSprite(600,160,20,20);
    var a =Math.round(random(1,6));
    switch(a){
        case 1:obstacle.addImage(obstacle1);
               break;
               
       case 2:obstacle.addImage(obstacle2);
               break;
        
       case 3:obstacle.addImage(obstacle3);
               break;
        
       case 4:obstacle.addImage(obstacle4);
               break;
        
      case 5:obstacle.addImage(obstacle5);
               break;
               
       case 6:obstacle.addImage(obstacle6);
               break;
               
       default:break;
    }
    obstacle.scale=0.7;
    obstacle.velocityX=-5;
    obstacle.lifetime=150;
    obstaclegroup.add(obstacle);
  }
}
    

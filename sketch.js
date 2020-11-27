var bullet;

var wall;

var weight, speed;

var thickness

function setup() {
  createCanvas(1600,400);
 
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83)

  bullet = createSprite(50, 200, 50, 50);

 wall = createSprite(1200,200,thickness,height/2);

 wall.shapeColor=color("white");

 bullet.velocityX= speed;
}

function draw() {
  background("black");  

  

if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }
  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
}


  drawSprites();
}

function hasCollided(bullet,wall){
  bulletleftRightEdge=bullet.x+bullet.width;
  wallleftRightEdge=wall.x;
  if(bulletleftRightEdge>=wall.LeftEdge){
    return true;
  }
  return false;
}
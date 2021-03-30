var bullet,wall,thickness;
var speed,weight;
var deformation;

thickness = random(22,83)
speed = random(223,321)
weight = random(30,52)

function setup() {
  createCanvas(1200,400);

   speed=random(55,90);
   weight=random(400,1500);
  bullet = createSprite(50, 200, 100, 10);
  bullet.velocityX=speed;
  wall = createSprite(790, 200, thickness, height/2);

}

function draw() {
  background("black");  
  
  if(wall.x-bullet.x <(bullet.width+wall.width)/2)
  {
    bullet.velocityX = 0;
   deformation = 0.5*weight*speed*speed/22500
  }
  
if(deformation>10)
{
  wall.shapeColor="red";
}
else if(deformation<10)
{
  wall.shapeColor="green";
}


  drawSprites();

}
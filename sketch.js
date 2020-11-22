var bullet, wall;
var speed, weight, thickness;
function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  speed = random(223,321)
  weight = random(30,52)
  thickness = random(22,83)

  bullet = createSprite(50,200,25,50);
  bullet.shapeColor=color(80,80,80)
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80)
  bullet.velocityX = speed;

}

function draw() {
  background(255,255,255);  

  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var damage=0.5 * weight *     speed * speed/(thickness * thickness * thickness);
    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10)
    {
      wall.shapeColor=color(0,250,0);
    }
    
  }
console.log(damage);
  drawSprites();
  }

  

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter .Bodies; 

var engine, world;
var raindrops , ground ;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  raindrops = new RAINDROPS(random(0,800),random(-5 , 400),random(1 , 20),random(1 , 10));
  ground = createSprite(800 , 350 , 10 , 400);
  
}

function draw() {
  background("yellow");
  Engine.update(engine);

    raindrops.display();
    ground.display();
    drawSprites();
  }


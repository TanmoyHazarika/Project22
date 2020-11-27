const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,ball,ground
function setup() {
  createCanvas(400,400);
  engine = Engine.create()
  world = engine.world
  var rest = {
    restitution:1
  }
  ball = Bodies.circle(200,100,20,rest)
  World.add(world,ball)
  var stat = {
    isStatic:true
  }
  ground = Bodies.rectangle(200,390,400,20,stat);
  World.add(world,ground)
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");  
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,10)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20);
  drawSprites();
}
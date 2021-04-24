const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bal;
var box1,box2,box3;
var ground;
var dustbinImage;
var dust;
var chain;
function preload()
{
	dustbinImage=loadImage("SPRITE/dustbingreen.png");
}
function setup() 
{
	createCanvas(1200, 700);
	
	engine = Engine.create();
	world = engine.world;    
    
 var object_options = {
	isStatic: true
}

ground= Bodies.rectangle(600,650,1200,10,object_options);
World.add(world,ground);
 
bal=new Ball(100,400)

	
 
 
box1=new Box1(800,620,260,50);
box2=new Box(630,520,50,250);
box3=new Box(950,520,50,250);

chain=new Slingshot(bal.body,{x:200,y:500})
   
	Engine.run(engine);
}
function draw() 
{
  rectMode(CENTER);
  background("white");

  rect(ground.position.x,ground.position.y,1200,10);
    
 bal.display();
  
 box1.display();
 chain.display();
//box2.display();
//box3.display();
 // rectMode(CENTER);
  //rect(dust.position.x,dust.position.y,100,80);

 
 
  drawSprites();
  
}
function mouseDragged(){

    Matter.Body.setPosition(bal.body,{x:mouseX,y:mouseY})
}
function mouseReleased()
{
  chain.fly();
}
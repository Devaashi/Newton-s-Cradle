
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var chain1,chain2,chain3,chain4,chain5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roof= new Roof(400,50,350,50);

	bob1= new Bob(300,350,50);
	bob2= new Bob(350,350,50);
	bob3= new Bob(400,350,50);
	bob4= new Bob(450,350,50);
	bob5= new Bob(500,350,50);

	chain1= new Chain({x:300, y:50},bob1.body);
	chain2= new Chain({x:350, y:50},bob2.body);
	chain3= new Chain({x:400, y:50},bob3.body);
	chain4= new Chain({x:450, y:50},bob4.body);
	chain5= new Chain({x:500, y:50},bob5.body);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("white");

  roof.display();
  
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
 
}




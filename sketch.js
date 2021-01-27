const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function preload(){

  binImage = loadImage("images/dustbinImage.png");

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(100, 400, 10);
paper.scale = 0.2;

ground = new Ground(400, 680, 800, 20);

bin = createSprite(625, 605, 30, 20);
bin.addImage(binImage);
bin.scale = 0.4;

leftside = new Dustbin(595, 620, 20, 100);
bottom = new Dustbin(625, 660, 80, 20);
rightside = new Dustbin(655, 610, 20, 110);

  
}


function draw() {
  rectMode(CENTER);

  background("skyblue");

  Engine.update(engine);

  paper.display();

  ground.display();

  leftside.display();
  rightside.display();
  bottom.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:15, y:-15})
 }
}
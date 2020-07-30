const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint; 

var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13;
var block14, block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25;

var platform1, platform2;
var hexagon, hexagonImg;
var slingShot;
var engine;
var score = 0;
/*
function preload(){
  hexagonImg = loadImage("hexagon2.png"); 
}
*/
function setup () { 
  createCanvas (1000,400); 
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  platform1 = new Platform(490,300,250,10);
  platform2 = new Platform(800,200,200,10);

  hexagon = new Hexagon(150,100,50,50);

  slingShot = new Slingshot(hexagon.body,{x:150, y:100});

  block1 = new Box(400,275,30,40);
  block2 = new Box(430,275,30,40);
  block3 = new Box(460,275,30,40);
  block4 = new Box(490,275,30,40);
  block5 = new Box(520,275,30,40);
  block6 = new Box(550,275,30,40);
  block7 = new Box(580,275,30,40);
  block8 = new Box(430,235,30,40);
  block9 = new Box(460,235,30,40);
  block10 = new Box(490,235,30,40);
  block11 = new Box(520,235,30,40);
  block12 = new Box(550,235,30,40);
  block13 = new Box(460,195,30,40);
  block14 = new Box(490,195,30,40);
  block15 = new Box(520,195,30,40);
  block16 = new Box(490,155,30,40);
  block17 = new Box(740,175,30,40);
  block18 = new Box(770,175,30,40);
  block19 = new Box(800,175,30,40);
  block20 = new Box(830,175,30,40);
  block21 = new Box(860,175,30,40);
  block22 = new Box(770,135,30,40);
  block23 = new Box(800,135,30,40);
  block24 = new Box(830,135,30,40);
  block25 = new Box(800,95,30,40);

  ground = new Platform(500,395,1000,10);
} 

function draw () { 
  background(0, 255, 255);
  textSize(20);
  textFont("Impact");
  noStroke();
  fill("blue");
  text("SCORE "+score, 900, 50);
  text("CAN YOU GET THE WHOLE OF 5000 POINTS?", 200, 50);
  strokeWeight(3);
  stroke("black");
  platform1.display();
  platform2.display();
  fill("gold");
  hexagon.display();
  fill("turquoise");
  slingShot.display();
  fill("orange");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("turquoise");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("lightgreen");
  block13.display();
  block14.display();
  block15.display();
  fill("silver");
  block16.display();
  fill("turquoise");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  fill("lightgreen");
  block22.display();
  block23.display();
  block24.display();
  fill("pink");
  block25.display();
  fill("black");
  ground.display();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
  getBackgroundImg();
  console.log(score);
  drawSprites (); 
}

function mouseDragged(){
  Matter.Body.setPosition(hexagon.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(hexagon.body);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if(hour>=06 && hour<=12){
    background(0,255,255);
  }
  else{
    background(225,0,255);
  }
}
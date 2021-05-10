const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world,constraint;
var box1, pig1;
var backgroundImg,platform,chain;
var log6;
var gameState="play";
var score=0;
var backgroundImg2;

function preload() {
  getBackground();
   // backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    //String
  var string="Dhruv";
  var string2=null;

   //Numerical
   var numeric=1;

   //Boolean
   var boolean=true;

   //array
   var array=["Dhruv",1,true]

   console.log(string);
   console.log(numeric);
   console.log(boolean);
   console.log(string2);
   console.log(array.length);

   array[2]=false;
   console.log(array)

   array.push("WhiteHat");
   console.log(array);

   var array2=["WhiteHat",true,"In Class"];
  array.push(array2);
   console.log(array[4][2]);
   console.log(array2);
   array2=[];
   console.log(array2)

    


    ground = new Ground(600,height,1200,20);
   platform = new Ground(150, 305, 300, 170);
  //Plat form created

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
    //log6=new Log(239,182,50,PI);

    bird = new Bird(235,58);

    chain=new SlingShot(bird.body,{x:217, y:60 });

    Engine.run(engine);

}

function draw(){
  if(backgroundImg)
    background(backgroundImg);
    Engine.update(engine);
  //  console.log(box2.body.position.x);
  //  console.log(box2.body.position.y);
  //  console.log(box2.body.angle);

 // console.log(mouseX+","+mouseY)
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();


    box5.display();
    log4.display();
    log5.display();
    //log6.display();

    chain.display();

    bird.display();
    platform.display();

    pig1.scores();
    pig3.scores();

    textSize(30);
    text("Score: "+ score,900,50);

    getBackground();
}
function mouseDragged(){
  if(gameState==="play")
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
  
}
function mouseReleased(){
  chain.fly();
  gameState="fly";
}

function keyPressed(){
  if(keyCode===32){
    chain.attach(bird.body);

    gameState="play";
    bird.trajectory=[];
  }
}


async function getBackground(){
  var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON=await response.json();


  var dateTime=responseJSON.datetime;

  var hour=dateTime.slice(11,13);
//  console.log(hour);

  if(hour>5&&hour<17){
    console.log("day Time");
    backgroundImg=loadImage("sprites/bg.png");
  }else{
    console.log("night Time");
    backgroundImg=loadImage("sprites/bg2.jpg");
  }
}
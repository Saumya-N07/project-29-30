const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var box1, box2, box3, box4, box5, box6;
var platform, polygon;
var slingshot;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1000,900);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1000,20);
    platform = new Ground(275, 300, 100, 20);

//top lvl
    box1 = new Box(390,155,30,40);
//middle lvl
    box2 = new Box(375,195,30,40);
    box3 = new Box(405,195,30,40);
//bottom lvl
    box4 = new Box(360,235,30,40);
    box5 = new Box(390,235,30,40);
    box6 = new Box(420,235,30,40);

    polygon = new Box(80,450,20,20);

    world.add(this.polygon,this.world);

    slingshot = new SlingShot(this.polygon.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
     
    box3.display();
    box4.display();
    pig3.display();
    box5.display();

    platform.display();
    polygon.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  launcherObject.attach(stoneObj.body);
	}
}
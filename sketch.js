const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var drops = [];
var particles = [];
var boy;

function preload(){
    //this.body_img = loadImage("boy.png") 
}

function setup(){
    createCanvas(400, 800);
    engine = Engine.create();
	world = engine.world;
    boy = new Umbrella(200,700,100,100);
    
    
      Engine.run(engine)
      
}

function draw(){
    Engine.update(engine);
    background("black");
    
    if(frameCount%1===0){
        console.log("hello")
       drops.push( new Drop(random(0, 200),0,4));
     
    }
    if(frameCount%1===0){
        console.log("hi")
       particles.push( new Particle(random(201, 400),0,4));
     
    }
      
    for (var j = 0; j < drops.length; j++) {
   
        drops[j].display();
      }
      for (var i = 0; i < particles.length; i++) {
   
        particles[i].display();
      }
      
      boy.display();
      
}   



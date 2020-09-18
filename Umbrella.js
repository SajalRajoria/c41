class Umbrella{
    constructor(x,y){
var options = {
    isStatic : true
}
this.radius  = 100;
this.body = Bodies.circle(x, y,this.radius,options);
this.image = loadImage("unnamed.png")
World.add(world,this.body);
    }
    display(){
       
        imageMode(CENTER);
        image(this.image,200,650,this.radius,this.radius);
        
        
    }
}
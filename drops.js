class Drop{
    constructor(x,y){
var options = {
    friction:0.7
}
this.radius  = 4;
this.body = Bodies.circle(x, y,this.radius,options);
World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(0,0, this.radius,this.radius);
        pop();
        
    }
}
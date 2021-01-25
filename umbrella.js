class Umbrella{
    constructor(x,y,r){
        var options = {
            isStatic :true
        }
        this.man = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(world,this.man);
    }
    display(){
        var pos = this.man.position;
        push();
        //ellipseMode(RADIUS);
        //ellipse(pos.x,pos.y,this.r,this.r);
        pop();
    }
}
class Paper {
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restiution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        World.add(world,this.body);
    }
    display(){
        ellipseMode(RADIUS);
        fill("blue");
        
        ellipse(this.body.position.y,this.body.position.y,this.radius,this.radius)
}}
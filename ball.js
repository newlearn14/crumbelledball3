class Ball{
    constructor(x,y){
        var options={
        isStatic:false,
		restitution:0.3,
		friction:0.2,
		density:1.2
         }
        this.body=Bodies.circle(x,y,20,options)
        this.image=loadImage("sprite/paper.png") 
        
        World.add(world,this.body);
         


    }
    display()
    {
        ellipseMode(RADIUS); 
        ellipse(this.body.position.x,this.body.position.y,20);
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,60,60);
    }
}
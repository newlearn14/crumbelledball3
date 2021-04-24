class Slingshot{
   
    constructor(bodyA,pointB)
    {
        var options={
        bodyA:bodyA,
        pointB:pointB,
        stifiness:0.1,
        length:20
        }
        this.bodyA=bodyA;
        this.pointB=pointB;
        this.body=Constraint.create(options)
        World.add(world,this.body);
    }
    fly(){
       
        this.body.bodyA=null;
    }
     
    display(){
        if(this.body.bodyA){
           
        
        strokeWeight(6);
        line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.pointB.x,this.pointB.y);
        }
  }
  
         
}
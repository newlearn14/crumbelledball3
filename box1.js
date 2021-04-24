class Box1{
    constructor(x, y, width, height) {
      var options = {
          
          isStatic:true
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("sprite/dustbingreen.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      push()
  
      translate(pos.x,pos.y);
      
      rectMode(CENTER);
      fill(255);
   
      rect(0, 0, this.width, this.height);
      pop();
      
     
     
      imageMode(CENTER);
      image(this.image,this.body.position.x,520,300,260);
     
     


    }
  }
  
class House {
    constructor(x,y,width,height,v1) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      if(stage === v1){
        World.add(world, this.body);
      }else if(stage < v1||stage>v1){
        World.remove(world, this.body);
      }
      
      
      this.image = loadImage("House.png");
    }
    display(){
      var pos =this.body.position;
         push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop();
    }
};
class House2 {
  constructor(x,y,width,height) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
    
    this.image = loadImage("Rpgtavern.png");
  }
  display(){
    var pos =this.body.position;
       push();
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.width,this.height);
      pop();
  }
};


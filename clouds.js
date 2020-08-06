 class Clouds {

   constructor(x , y , width , height){

     var options = {
         'gravity': 0.5,
         'density': 0.2,
         'mass':1.4,

     };
     this.body = bodies.rectangle(x , y , width , height , options);
     this.width = width;
     this.height=height;
     world.add(world,this.body);
   };
     display(){
        var pos =this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        translate(this.body.position.x, this.body.position.y);
          
  };

     }
  
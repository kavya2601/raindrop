class Ground {
constructor ( X , Y , width , height){
      var options = {
           'isStatic': 0.5,
      };
        this.body = Bodies.rectangle(X, Y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    };

        display(){
          var pos =this.body.position;
          rectMode(CENTER);
          fill("brown");
          rect(pos.x, pos.y, this.width, this.height);
          translate(this.body.position.x, this.body.position.y);
        };
};
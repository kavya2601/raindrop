class RAINDROPS{}
constructor(x, y , width , height , angle);
 {
    var options = {
      'density':1.5,
      'friction': 1.3,
      'restitution':1.5,
      'gravity':21,
    };
    this.body = Bodies.rectangle(X, Y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    raindrops.velocityY = random(1 , 10);
    raindrops.setLifetimeEach = 2;
    if(raindrops.velocityY === 23 && gravity < 21 && grvity >21 ){

       raindrops,displace(gr)
       raindrops.displace(clouds);
       raindrops.collide(ground);
    }
    
  }
  display();{
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.X, pos.Y);
    rotate(angle);
    translate(this.body.position.x, this.body.position.y);
    rectMode(CENTER);
    strokeWeight(3);
    stroke("green");
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
  }

class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
    this.trajectory= [];
    this.smokeImage = loadImage("sprites/smake.png")
  }
  display(){

    super.display();
    if(this.body.velocity.x>1 && this.body.position.x > 200) {
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }

    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
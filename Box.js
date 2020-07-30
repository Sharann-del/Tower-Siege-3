class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.visiblity = 255;
    }
    display(){
      if(this.body.speed<3.5){
        super.display();
      }
      else{
        World.remove(world, this.body);
        push();
        this.visiblity = this.visiblity-5;
        tint(255, this.visiblity);
        pop();
      }
    }

    score(){
      if(this.visiblity<0 && this.visiblity>-1005){
         score++;
      }
    }
}; 
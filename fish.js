class Fish{
    constructor(x,y,r){
        this.x = x;
        this.y = y;
        this.r = 30;
        this.angle =0;
       this.image = loadImage("fish left.png");
       this.image2 = loadImage("fishright.png");
    }
   move(){
       var dx = this.x -mouseX;
       var dy = this.y- mouseY;
       var t = Math.atan2(dy,dx);
       this.angle  = t;
       if(mouseX != this.x){
       this.x -= dx/2;
       }
       if(mouseY != this.y){
       this.y -= dy/2;
       }
   }
   
    show(){
        noStroke();
        push();
        translate(this.x,this.y);
        rotate(this.angle);
        ellipse(this.x,this.y,this.r*2);
        imageMode(CENTER);
        if(this.x >= mouseX){
       image(this.image,0,0);
    }
    else{
        image(this.image2,0,0);
    }
    pop();
}
}
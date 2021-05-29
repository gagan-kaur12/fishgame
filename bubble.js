class Bubble{
    constructor(x,y,r){
        this.x = x;
        this.y = y;
        this.r = r;
        this.distance;
        this.counted = false;
        this.image = loadImage("bubble.png");
        this.image1 = loadImage("pop.png");
        
    }
    move(){
     this.y -= 4;
     var dx = this.x - fish.x;
     var dy = this.y - fish.y;
     this.distance = Math.sqrt(dx*dx + dy*dy);

    }  
    stop(){
        this.y=0;
    }
          
      show(){
        noStroke();
        strokeWeight(3);
        noFill();
        ellipse(this.x,this.y,this.r*2);
        imageMode(CENTER);
      
        image(this.image,this.x,this.y,40,40);
    
        if( this.distance < this.r +fish.r+10) {
            image(this.image1,this.x,this.y,40,40);
        }
        
    }
}

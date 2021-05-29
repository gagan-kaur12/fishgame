class Enemy2{
    constructor(x,y,r){
        this.x = x;
        this.y = y;
        this.r = r;
        this.distance;
        this.counted = false;
        this.animation = loadAnimation("octopus1.png","octopus2.png","octopus3.png","octopus4.png");
        this.animation1 = loadAnimation("enemy1.png","enemy2.png","enemy3.png");
        
    }
    move(){
     this.x += 4;
     var dx = this.x - fish.x;
     var dy = this.y - fish.y;
     this.distance = Math.sqrt(dx*dx + dy*dy);
     
    }  
    stop(){
        this.x =0;
    }
          
      show(){
        noStroke();
        strokeWeight(3);
        noFill();
       //fill("red");
        ellipse(this.x,this.y,this.r*2);
        imageMode(CENTER);
     
        animation(this.animation1,this.x,this.y);
    
      
        
    }
}

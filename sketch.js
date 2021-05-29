var bubble, bubbles =[];
 var score,sound, y,sound2, bg, enemy,enemys = [],fish;
var enemy2, enemys2= [];
 var gameState ,n ,l1,l2,l3;
function setup(){
    createCanvas(windowWidth,600);
    fish = new Fish(width/2,300,30);
    score =0;
    gameState = "play";
    y = 3;
    n=0;
    sound = loadSound("bubbles-single2.wav");
   bg = loadImage("undersea back.jpg");
  sound2 = loadSound("sound2.mp3");
  
}
function draw(){
  

    background(bg);
   
    textSize(35);
    stroke(0)
    text("score  "+ score,50,50);
    text("Life  " + y,windowWidth-190,50);
   
    push();
    textSize(50);
    fill("red");
    if(y<3) {
     
      text("WARNING  " + n, windowWidth-350,100);
     
    }
   if(y=== 0){
     text(" you lost", windowWidth/3,300);
     distance = 0;
     bubble.stop();
     enemy.stop();
     enemy2.stop();
    gameState = "reset";
   }

   if(score === 50){
    text("  CONGRATULATIONS!! you won", windowWidth/4,300); 
    bubble.stop();
    enemy.stop();
    enemy2.stop();
    gameState = "reset";
   }
  
    pop()

spawnBubbles();

fish.show();
fish.move();

spawnEnemy();
spawnEnemy2();


  
}
  
   
 function spawnBubbles() {
if(frameCount%20 === 0){
     bubble = new Bubble(random(10,windowWidth-10),random(580,610),20);
   //  bubble.show();
     bubbles.push(bubble);
     console.log(bubbles.length);
}
for(var i = 0;i< bubbles.length; i++){
    bubbles[i].show();
    bubbles[i].move(); 
    }

    for(var i = 0;i< bubbles.length; i++){
       
        if(bubbles[i].y < 0){
        bubbles.splice(i,1);
        console.log(bubbles.length);
        }
        if(bubbles[i].distance < bubbles[i].r + fish.r){
            if(!bubbles[i].counted){
            score++;
            sound.play();
            bubbles[i].counted = true;
            bubbles.splice(i,1);
        }
}

}
 }

 function spawnEnemy() {
    if(frameCount%50 === 0){
         enemy = new Enemy(random(10,windowWidth-10),random(580,610),40);
       //  bubble.show();
         enemys.push(enemy);
    }
    for(var i = 0;i< enemys.length; i++){
        enemys[i].show();
        enemys[i].move();
       }
    
        for(var i = 0;i< enemys.length; i++){
           
            if(enemys[i].y < 0){
            enemys.splice(i,1);
         //   console.log(bubbles.length);
            }
            if(enemys[i].distance < enemys[i].r + fish.r){
                if(!enemys[i].counted){
               y--;
                sound2.play();
                n++;
               gameState = "warning";
                enemys[i].counted = true;
               // enemys.splice(i,1);
            }
        }
    
       }
     }
     function spawnEnemy2() {
        if(frameCount%50 === 0){
             enemy2 = new Enemy2(random(1,10),random(30,560),40);
           //  bubble.show();
             enemys2.push(enemy2);
        }
        for(var i = 0;i< enemys2.length; i++){
            enemys2[i].show();
            enemys2[i].move();
            }
        
            for(var i = 0;i< enemys2.length; i++){
               
                if(enemys2[i].x > windowWidth){
                enemys2.splice(i,1);
              // console.log(enemy2[i].x);
                }
                if(enemys2[i].distance < enemys2[i].r + fish.r){
                    if(!enemys2[i].counted){
                   y--;
                    sound2.play();
                    n++;
                    gameState = "warning";
                    enemys2[i].counted = true;
                   // enemys2.splice(i,1);
                }
             }
        
            }
         }
        //function mouseDragged(){
          
      
  
   
  
       
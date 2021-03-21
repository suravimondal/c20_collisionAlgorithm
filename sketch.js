  var fixedRect, movingRect;

    function setup() {
      createCanvas(800,400);

      fixedRect=createSprite(400,200,50,80);
      fixedRect.shapeColor= "red";

      movingRect=createSprite(150,120,80,30);
      movingRect.shapeColor="pink";

      fixedRect.debug= true;
      movingRect.debug= true;
      
    }

    function draw() {
      background(0);  

      movingRect.x=mouseX;
      movingRect.y= mouseY;

      console.log(movingRect.x-fixedRect.x);

      if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
        fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2){
        movingRect.shapeColor="blue";
      }
      else{
        movingRect.shapeColor="pink"; 
      }
      drawSprites();
    }
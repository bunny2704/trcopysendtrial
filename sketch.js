var ball;
var PlayerCount;
var database,position;
var gameState=0,form1,game1,player1,allplayers,car1,car2,car3,car4,cars,carimg1,carimg2,carimg3,carimg4,gimg,timg;

var distance=0;
function preload(){
  carimg1=loadImage("car1.png")
  carimg2=loadImage("car2.png")
  carimg3=loadImage("car3.png")
  carimg4=loadImage("car4.png")
  timg=loadImage("track.png")
  gimg=loadImage("ground.png")
}

function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    database=firebase.database();
    game1=new game()
    game1.getState();
    game1.start();



    
  
  //  ball = createSprite(250,250,10,10);
   // ball.shapeColor = "red";
   // var lococ=database.ref("Ball/Position");
 //   lococ.on("value",readop,showerror)
  
}

function draw(){
    background("white");
    if(PlayerCount===4){
      game1.update(1);
    }
    if(gameState===1){
      clear()
      game1.play();
    }
    if (gameState===2){
      game1.end();
    }
   // if(keyDown(LEFT_ARROW)){
   //     writePosition(-1,0);
  //  }
  //  else if(keyDown(RIGHT_ARROW)){
  //      writePosition(1,0);
  //  }
  //  else if(keyDown(UP_ARROW)){
  //      writePosition(0,-1);
  //  }
  //  else if(keyDown(DOWN_ARROW)){
  //     writePosition(0,+1);
  //  }
    drawSprites();

}





//function writePosition(x,y){
 //   database.ref("Ball/Position").set(
    //    {x:ball.x+x,y:ball.y+y}
    //    )
  //  ball.x = ball.x + x;
   // ball.y = ball.y + y;
//}
//function readop(data){
//    position=data.val()
  //  ball.x=position.x
  //  ball.y=position.y
//}
//function showerror(){
//console.log("error")


//}
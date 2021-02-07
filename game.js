class game{
    constructor(){


    }
    getState(){
        
        var gameStateref=database.ref('gameState')
        gameStateref.on("value",function(data){
         gameState = data.val()

        })

    }
    update(State){
        database.ref('/').update({gameState:State})
    }
    async start(){
        if(gameState===0){
            player1=new player()
           // player1.getCount();
            var PlayerCountref=await database.ref('PlayerCount').once("value")
            if(PlayerCountref.exists()){
                PlayerCount=PlayerCountref.val();
                player1.getCount()
            }
            form1=new form()
            form1.display()
        }
        car1=createSprite(100,200)
        car1.addImage("carm",carimg1)
        car2=createSprite(300,200)
        car2.addImage("caro",carimg2)
        car3=createSprite(500,200)
        car3.addImage("carv",carimg3)
        car4=createSprite(700,200)
        car4.addImage("care",carimg4)
        cars=[car1,car2,car3,car4]
        
            }
    play(){

        form1.hide()
        textSize(30)
        text("gameStart",120,100)
        player.getplayerinfo();

        if(allplayers!==undefined){
            background("#c68767")
            image(timg,0,-displayHeight*4,displayWidth,displayHeight*5)
            var index=0;
            var x=0;
            var y

            //var display_position=130
            for(var plr in allplayers){
            
                index=index+1
                x=x+200;
                y=displayHeight-allplayers[plr].distance;
                cars[index-1].x=x;
                cars[index-1].y=y;
                if(index===player.index){
                    cars[index-1].shapeColor=red;
    camera.position.x=displayWidth/2
    camera.position.y=cars[index-1].y
                }
                //if(plr=== "player1"+player1.index)
                //    fill("red");

                
               // else
                  //  fill("black");

                  //  display_position+=20
                  //  textSize(15)
                 //   text(allplayers[plr].name+":"+allplayers[plr].distance,120,display_position)
                
           // }
           
            }
            
        }
        if(keyIsDown(UP_ARROW)&& player1.index!==null){
            


            player1.distance+=50
            player1.update();

        }
        if(player1.distance>3860 ){
            gameState=2;
        }
        
    
    }
    end()
{
  console.log("GameEnded");
}


  
    }
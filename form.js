class form{
    constructor(){
        this.input=createInput("Name")
this.button=createButton('play')
this.greeting=createElement('h3')

    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    display(){
        var title=createElement('h2')
        title.html("Car  Race")
        title.position(displayWidth/2-50,0);


       // var input=createInput("Name")
      //  var button=createButton('play')
      
        this.input.position(displayWidth/2-40,displayHeight-80)
       this.button.position(displayWidth/2+30,displayHeight)
       this.button.mousePressed(()=>{
          this.input.hide();
            this.button.hide();
            player1.name =this.input.value();
            PlayerCount+=1
            player1.update();
            player1.index=PlayerCount;
            player1.updateCount(PlayerCount);
          //  var greeting=createElement('h3')
            this.greeting.html("Hallo"+player1.name)
            this.greeting.position(displayWidth/2-70,displayHeight/4)



        })
        
    }
}
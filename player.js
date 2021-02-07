class player{
    constructor(){

        this.index=null;
        this.distance=0;
        this.name=null;


    }
    getCount(){
      var PlayerCountref=database.ref('PlayerCount');
      
    PlayerCountref.on("value",(data)=>{
          PlayerCount=data.val();
          
      })}
    updateCount(Count){
        database.ref('/').update({ PlayerCount:Count })
    }
    update(){

        var playerIn="players/player1"+ this.index;
        database.ref(playerIn).set({name:this.name,distance:this.distance})
    }

   static getplayerinfo(){
       var playerinfo=database.ref('players')
       playerinfo.on("value",(data)=>{
           allplayers=data.val()
       })


    }
      
}
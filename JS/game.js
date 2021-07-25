class Game{
    constructor(){}

    
    gameState(){
       database.ref('gameState').on("value" ,(data)=>{
           gState = data.val();
       })
    }

    updateState(state){
     
        database.ref('/').update({
            gameState:state

        } )
    }

    start(){

        if(gState === 0){
            form = new Form()
            form.display()
         
            player = new Player();
            player.getPlayerCount();


        }

        p1 = createSprite(300,200,100,100);
        p1.addImage(player1Image);
        p1.scale = 0.09;

        p2 = createSprite(300,320,100,100);
        p2.addImage(player2Image);
        p2.scale = 0.09;

        p3 = createSprite(300,444,100,100);
        p3.addImage(player3Image);
        p3.scale = 0.09;

        PLAYER= [p1,p2,p3]
    

    }

    play(){

        form.hide()

        Player.getPlayerInfo();

        if(allPlayers !== undefined){
            
            image(bgImg , 0,-100, displayWidth*5,displayHeight+200);
        /*
            var place = 0; //index of PLAYER
            var x1
            var y1 = 200;

            //for in loop
            for(var plr in allPlayers){
                place = place + 1

                x1 = 300 + allPlayers[plr].distance

                y1 = y1 + 120

                PLAYER[place-1].x = x1
                
                PLAYER[place-1].y = y1

                if(place === player.index){
                   camera.position.x = PLAYER[place-1].x 
                   camera.position.y = displayHeight/2
                }
            }

            if(keyIsDown(RIGHT_ARROW) && player.index !== null){
                player.distance = player.distance + 20

                player.update();
            }
        
            */
        
            drawSprites();
        
        }
        

        
    }
   

    
}




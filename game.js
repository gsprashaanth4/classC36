class game
{
    constructor()
    {
       
    }

    getState()
    {
        var gameStateRefer = database.ref('gameState');
        gameStateRefer.on("value", function(data)
        {
            gameState = data.val();
        })
        
    }

    update(state)
    {
        database.ref('/').update({
            gameState : state
        });
       
    }

    start()
    {
        if(gameState === 0)
        {
            Player = new player();
            Player.getCount();
            form1 = new form();
            form1.display();
         
        }
    }
   
}

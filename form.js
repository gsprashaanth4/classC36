class form
{
    constructor(){}

    display()
    {
        var title = createElement('h3');
        title.html("mutiplayer car racing game");
        title.position(200,200);

        var input = createInput("name");
        input.position(150,200);

        var button = createButton('play');
        button.position(250,300);

        button.mousePressed(function()
        {
            input.hide();
            button.hide();
            var name = input.value();
            playerCount = playerCount + 1;
            Player.update(name);
            player.updateCount(playerCount);

            var input1 = createElement('h2');
            input1.html("hello"+name);
            input1.position(250,300);

            

        });
      

    }
}
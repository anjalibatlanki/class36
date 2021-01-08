class Form{
   constructor(){}

   display(){

    console.log("Hii");
       var title = createElement('h2');
       title.html ("ANJALI'S CAR RACING GAME");
       title.position(130,0);

       var input = createInput("Name");
       var button = createButton("PLAY");

       var greeting = createElement('h3');

       input.position(130,160);
       button.position(250,200);

       button.mousePressed(function(){
           input.hide();
           button.hide();

           var name = input.value();

           playerCount += 1;
           player.updateCount(playerCount);
           player.update(name);
           
           greeting.html("Helloooo "  + name);
           greeting.position(130,160);
       });
   }
}
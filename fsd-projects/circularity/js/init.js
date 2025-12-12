var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ///////////////////
        // PROGRAM SETUP //
        ///////////////////
        
        // TODO 1 : Declare and initialize our variables
        var circle; // variable to hold a single circle when creating circles / iterating
        var circles = []; // variable to store all circles in an array


        // TODO 2 : Create a function that draws a circle 
        function drawCircle() {
            circle = draw.randomCircleInArea(canvas, true, true, "#999", 2);
            physikz.addRandomVelocity(circle, canvas, 5, 5);
            view.addChild(circle);
            circles.push(circle);

}


        // TODO 3 : Call the drawCircle() function
    drawCircle(5);


        // TODO 7 : Use a loop to create multiple circles
        for (var i = 0; i < 25; i++) {

}



        ///////////////////
        // PROGRAM LOGIC //
        ///////////////////
        
        /* 
        This Function is called 60 times/second, producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the position of each circle using physikz.updatePosition()
            physikz.updatePosition(/* bracket notation to access the first circle */);
            physikz.updatePosition(/* bracket notation to access the second circle */);
            physikz.updatePosition(/* bracket notation to access the third circle */);
            physikz.updatePosition(/* bracket notation to access the fourth circle */);
            physikz.updatePosition(/* bracket notation to access the fifth circle */);
            
            // TODO 5 : Call game.checkCirclePosition() on your circles
           game.checkCirclePosition(/* bracket notation to access the first circle */);
            game.checkCirclePosition(/* bracket notation to access the second circle */);
            game.checkCirclePosition(/* bracket notation to access the third circle */);
            game.checkCirclePosition(/* bracket notation to access the fourth circle */);
            game.checkCirclePosition(/* bracket notation to access the fifth circle */);

            // TODO 8 / TODO 9 : Iterate over the array
           
            
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) {
                circle.x = 0;
            }
            
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            


            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DO NOT REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}

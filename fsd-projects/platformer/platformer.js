$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(500, 0, 20, 290);
createPlatform(1350, 400, 50, 50, "red");
    createPlatform(500, 0, 30, 250);
createPlatform(	255, 182, 193 "lightPink");
    createPlatform(500, 0, 40, 300);
createPlatform(1350, 400, 50, 50, "yellow");
    createPlatform(500, 0, 50, 330);
createPlatform(1350, 400, 50, 50, "blue");
    createPlatform(500, 0, 60, 500);
createPlatform(1350, 400, 50, 50, "lightGreen");
    createPlatform(500, 0, 70, 420);
createPlatform(1350, 400, 50, 50, "orange");

      createPlatform(100, 650, 200, 50, "red");
      createPlatform(400, 450, 100, 50, "lightPink");
      createPlatform(300, 550, 150, 50, "blue");
      createPlatform(500, 350, 250, 50, "lightGreen");
      createPlatform(300, 300, 100, 50, "orange", 300, 500, 1);


    // TODO 3 - Create Collectables

    createCollectable("diamond", 300, 170, 0.5, 0.7);
    createCollectable("kennedi", 450, 120, 0.2, 0.9, 100, 300, 2);
    createCollectable("grace", 300, 500, 0.9, 0.3);
    createCollectable("max", 600, 200, 0.7, 0.6);


    
    // TODO 4 - Create Cannons

    createCannon("top", 650, 1000);
    createCannon("right", 450, 2000);
    createCannon("bottom", 500, 3000);
    createCannon("left", 400, 2000);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

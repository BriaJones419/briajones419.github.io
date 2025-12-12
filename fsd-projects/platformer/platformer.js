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
      createPlatform(100, 500, 200, 50, "red");
      createPlatform(400, 450, 300, 20, "lightPink", 300, 500, 1);
      createPlatform(250, 350, 150, 50, "yellow");
      createPlatform(50, 250, 250, 50, "blue");
      createPlatform(500, 150, 150, 50, "lightGreen");
      createPlatform(350, 50, 50, 50, "orange");


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

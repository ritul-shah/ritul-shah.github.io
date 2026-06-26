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
   

    // TODO 2 - Create Platforms

    createPlatform(1150, 150, 750, 50, "yellow");
    createPlatform(500, 450, 50, 50, "amber");
    createPlatform(400, 350, 50, 50, "red");
    createPlatform(300, 250, 50, 50, "maroon");
    createPlatform(500, 150, 50, 50, "pink");
    createPlatform(650, 650, 50, 50, "lime");
    createPlatform(750, 550, 50, 50, "tan");
    createPlatform(850, 450, 50, 50, "teal");
    createPlatform(950, 350, 50, 50, "blue");
    createPlatform(1050, 250, 50, 50, "indigo");

    // TODO 3 - Create Collectables
    createCollectable("steve", 1350, 50);
    createCollectable("diamond", 200, 170, 0.5, 0.7);
    createCollectable("database", 750, 0, 0.2, 0.2);
    createCollectable("database", 500, 0, 0.2, 0.2);

    // TODO 4 - Create Cannons
    createCannon("top", 200, 1000);
    createCannon("right", 300, 2000);
    reateCannon("left", 500, 5000);
    reateCannon("top", 1200, 50);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

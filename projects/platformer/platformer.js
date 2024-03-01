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
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
    
    createPlatform(550, 300, 144, 20); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(1050, 650,200,19); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(1300, 525, 150, 15); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(1040, 400, 80, 10); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(875, 280, 90, 10); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(1150, 200, 165, 10); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(785, 150, 165, 9); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(425, 220, -95, 10); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(280, 220, 50, 10); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(275, 220, -80, 10); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(100, 220, 100, 10); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(260, 220, 10, 400); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(5, 105, 65, 10); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(1300, 30, 80, 10); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(1060, 60, 80, 8); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen




    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)

    createCollectable("steve", 4, 90, 20, 0.5); // creates a "steve" collectible at the coordinates (500, 300), falling with a high gravity of 20, and bouncing with 50% bounce
    createCollectable("grace", 1300, 25); // creates a "grace" collectible at the coordinates (500, 300), falling with default gravity and bouncing with default bounce %
    createCollectable("grace", 1350, 600); // creates a "grace" collectible at the coordinates (500, 300), falling with default gravity and bouncing with default bounce %
    createCollectable("grace", 550, 250); // creates a "grace" collectible at the coordinates (500, 300), falling with default gravity and bouncing with default bounce %
    createCollectable("grace", 1060, 30); // creates a "grace" collectible at the coordinates (500, 300), falling with default gravity and bouncing with default bounce %
    createCollectable("grace", 230, 150); // creates a "grace" collectible at the coordinates (500, 300), falling with default gravity and bouncing with default bounce %


    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

    createCannon("left", 600, 900); // cannon on left wall, 600px down, shooting once per second
    createCannon("left", 200, 1100); // cannon on right wall, 600px down, shooting once per 2 second
    createCannon("top", 650, 1300); // cannon on right wall, 600px down, shooting once per 2 second

    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});

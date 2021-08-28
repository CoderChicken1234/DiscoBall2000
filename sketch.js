let spriteman, spriteman_2;


function preload(){
  //Preloading Disco ball
  spriteman_2 =loadAnimation("Untitled.png", "@@@@@@@.png");
}


function setup() {
  //Disco ball code
  createCanvas(500,500);

  spriteman = createSprite(250,250,100,100);
  spriteman.addAnimation("running", spriteman_2);
  spriteman.scale = 0.4
}

function draw() 
//backround changer code
{
    background(0);
  if (keyDown("DOWN_ARROW")){
  background("blue");
  }
  if (keyDown("UP_ARROW")){
    background("Red");
    }
  if (keyDown("LEFT_ARROW")){
    background("Violet");
    }
  
  
drawSprites();


}


setup
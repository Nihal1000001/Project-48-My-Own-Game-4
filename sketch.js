var gameState;
var Castle,Finn_Dead,Finn_Jumping,Finn_Running,Finn_Running2,Finn_Sitting,Finn_Sliding,Finn_Sneaking,Finn_Walking,Finn_Img,Hallway_Img;
var titleImg,Title;
var soldier_Img,soldier_Img_2;
var four_Img,five_Img,nine_Img,nine_Img_2;
var soldier1,soldier2;
var King_Img,King;
var dark_Room;
var key_Img;
var hallway
var keyValue=0;
var door;
var key;
var four,five,nine1,nine2;

function preload(){
  Castle=loadImage("../Images/Castle.jpg");
  Finn_Dead=loadImage("../Images/Finn_Dead.png");
  Finn_Jumping=loadImage("../Images/Finn_Jumping.png");
  Finn_Running=loadImage("../Images/Finn_Running.png");
  Finn_Running2=loadImage("../Images/Finn_Running2.png");
  Finn_Sitting=loadImage("../Images/Finn_Sitting.png");
  Finn_Sliding=loadImage("../Images/Finn_Sliding.png");
  Finn_Sneaking=loadImage("../Images/Finn_Sneaking.png");
  Finn_Walking=loadImage("../Images/Finn_Walking.png");
  Finn_Img=loadImage("../Images/Finn.png");
  titleImg=loadImage("../Images/title.jpg");
  King_Img=loadImage("../Images/King.jpg");
  dark_Room=loadImage("../Images/Dark_Room.jpg");
  key_Img=loadImage("../Images/Key.jpg");
  Hallway_Img=loadImage("../Images/Hallway.jpg");
  soldier_Img=loadImage("../Images/soldier_Img.jpg");
  soldier_Img_2=loadImage("../Images/soldier_Img_2.jpg");
  four_Img=loadImage("../Images/Four.png");
  five_Img=loadImage("../Images/Five.png");
  nine_Img=loadImage("../Images/Nine.png");
  nine_Img_2=loadImage("../Images/Nine 2.png");
}

function setup(){
createCanvas(1200,500);
gameState = "Start";
Title=createSprite(600,50,10,10);
Title.addImage(titleImg);
Title.visible=false;
Finn=createSprite(50,390,100,50);
Finn.addImage(Finn_Img);
Finn.visible=false;
King=createSprite(1130,370,50,50);
King.addImage(King_Img);
King.visible=false;
door=createSprite(600,300,20,20);
door.visible=false;
soldier1=createSprite(400,350,20,20);
soldier1.addImage(soldier_Img);
soldier1.visible=false;
soldier2=createSprite(850,350,20,20);
soldier2.addImage(soldier_Img_2);
soldier2.visible=false;
four=createSprite(150,350,20,20);
four.addImage(four_Img);
four.visible=false;
nine1=createSprite(850,350,20,20);
nine1.addImage(nine_Img);
nine1.visible=false;
five=createSprite(350,350,20,20);
five.addImage(five_Img);
five.visible=false;
nine2=createSprite(550,350,20,20);
nine2.addImage(nine_Img_2);
nine2.visible=false;

}

function draw(){
  background("black"); 
  if(gameState==="Start"){
   Title.visible=true;
  Finn.visible=true;
  King.visible=true;
  //key.visible=false;
  Finn.velocityX=0;
  Finn.velocityY=0;
  textSize(25);
  fill("red");
text("James VIth has put Finn in jail in a black room because Finn was against James",130,275);
text("to limit his monarchial powers. Help Finn to escape the king’s (James VIth) castle",130,300);
text("using your skill and IQ to win the game and save Finn’s life or Finn will be sentenced",130,325);
text("to death by the king.Try your best to win the game and save Finn from the evil King!!!",130,350);
fill("white");
text("Press Space to start the game!!",400,450);
if(keyCode===32){
  gameState="level1";
  Title.visible=false;
  Finn.visible=false;
  King.visible=false;
  text.visible=false;
 }
 }
 

if(gameState==="level1"){
  Finn.visible=true;
  key=createSprite(1165,450,10,10);
key.addImage(key_Img);
  key.visible=true;
  key.debug=true;
  background(dark_Room);
  if(!(Finn.isTouching(door))){
  if(keyDown(UP_ARROW)){
    Finn.y=Finn.y-6;
    Finn.addImage(Finn_Running);
  }
  if(keyWentUp(UP_ARROW)){
    Finn.addImage(Finn_Img);
  }
  if(keyDown(DOWN_ARROW)){
    Finn.y=Finn.y+6;
    Finn.addImage(Finn_Running);
  }
  if(keyWentUp(DOWN_ARROW)){
    Finn.addImage(Finn_Img);
  }
  
  if(keyDown(LEFT_ARROW)){
    Finn.x=Finn.x-6
    Finn.addImage(Finn_Running2);
  }
  if(keyWentUp(LEFT_ARROW)){
    Finn.addImage(Finn_Img);
  }
  if(keyDown(RIGHT_ARROW)){
   Finn.x=Finn.x+6;
   Finn.addImage(Finn_Running);   
  }
if(keyWentUp(RIGHT_ARROW)){
  Finn.addImage(Finn_Img);
}
if(keyDown("Space")){
  Finn.addImage(Finn_Jumping);
  Finn.y=Finn.y-6;
}
if(keyWentUp("Space")){
  Finn.addImage(Finn_Img);
  Finn.y=Finn.y+6;
}
  }

textSize(25)
fill("white")
text("Key:" + keyValue, 1120, 30);

if(Finn.isTouching(key)){
  removeSprite(key);
  keyValue=keyValue+1;
  fill("red");
  textSize(25);
  text("You have found the key!!!Now go towards the door to complete the level....",200,250);
}
if(Finn.isTouching(door)&&(keyValue=1)){
  fill("red");
textSize(25);
  text("Good Job!!",550,150);
  text("Level 1 Complete!!",515,175);
  text("Press Shift to proceed to the next level.",400,200);
}

if(keyDown("Shift")){
  gameState="level2";
  Finn.visible=false;
  key.visible=false;
  door.visible=false;
  keyValue.visible=false;
  }

}


 if(gameState==="level2"){
  background(Hallway_Img);
  fill("Red");
  textSize(20);
  text("Get through the hallway and outside the door without getting detected by the guards to win the game!!",150,250);
  text("Press Space to continue.",500,275);
   if(keyCode===32){
    text.visible=false;
    Finn.visible=true;
    soldier1.visible=true;
    soldier2.visible=true;
    four.visible=true;
    nine.visible=true;
    five.visible=true;
   }
   
  
   
  
   if(keyDown(UP_ARROW)){
    Finn.y=Finn.y-6;
    Finn.addImage(Finn_Running);
  }
  if(keyWentUp(UP_ARROW)){
    Finn.addImage(Finn_Img);
  }
  if(keyDown(DOWN_ARROW)){
    Finn.y=Finn.y+6;
    Finn.addImage(Finn_Running);
  }
  if(keyWentUp(DOWN_ARROW)){
    Finn.addImage(Finn_Img);
  }
  
  if(keyDown(LEFT_ARROW)){
    Finn.x=Finn.x-6
    Finn.addImage(Finn_Running2);
  }
  if(keyWentUp(LEFT_ARROW)){
    Finn.addImage(Finn_Img);
  }
  if(keyDown(RIGHT_ARROW)){
   Finn.x=Finn.x+6;
   Finn.addImage(Finn_Running);   
  }
if(keyWentUp(RIGHT_ARROW)){
  Finn.addImage(Finn_Img);
}
if(keyDown("Space")){
  Finn.addImage(Finn_Jumping);
  Finn.y=Finn.y-6;
}
if(keyWentUp("Space")){
  Finn.addImage(Finn_Img);
  Finn.y=Finn.y+6;
} 

  }

 drawSprites();
}

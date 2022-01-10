const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,heart,heart2,heart3;
var lance,invisground,invisleft,invisright;
var house1,tree1,hin1;
var house2,tree2,tree3,hin2;
var house3,hin3;
var sword,goblin,goblin2,goblinImg;
var health = 3;
var coin;
var coins = 0;
var bed,bedImg;
var villager1;
var villager2;
var Trade = 0;
var tradeTab;
var bowImg,bow,bt,ca,cai,ca2,ca2i,buyb,buybi;
var bowget=false;
var swordget=false;
var wep="s";
var arrow,arrowImage,arrowImage2;
var arrows = 5;
var arrowcooldown = 0;
var jc = 0
var ars;
var gSword,swordImg;
var goblin3,goblin4,goblin5,goblin6;
var housestage =0;
var arrow2;
var img3;
var a3;
var traderShop;
var titleImg;
var titleButton;
var hinT;
var iwall,iwall2;


var stage =0;

var gameState = "notstart";

var txtstate = 0;

function preload(){
 goblinImg = loadImage("Goblin.png");
 bedImg = loadImage("bed.png");
 bowImg = loadImage("bow.png");
 cai = loadImage("coin.png");
 ca2i = loadImage("15.png");
 buybi = loadImage("buyb.png");
 arrowImage = loadImage("arrow.png");
 arrowImage2 = loadImage("arrow2.png");
 swordImg = loadImage("sword2.png")
 img3 = loadImage("3.png");
 titleImg = loadImage("title.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,400,900,70);



  lance = createSprite(400,346,30,50);
  lance.shapeColor = "red";
 



  invisground = createSprite(400,400,900,70);
  invisground.visible = false;
  invisleft = createSprite(-15,200,0.01,500);
  
  invisright = createSprite(815,200,0.01,500);
  


  house1 = new House(500,265,200,200);
  hin1 = createSprite(house1.body.position.x+0.5,house1.body.position.y+40,120,120);
  hin1.shapeColor = color(173,120,30);
 

  
  bed = createSprite(hin1.x-30,hin1.y+41,30,20);
  bed.addImage("bed",bedImg);
  bed.scale = 0.07;
  bed.visible = false;
 

  house3 = new House(300,265,200,200);
    hin1.visible = false;
  


  tree1 = new Tree(200,267,160,270);
   tree3 = new Tree(700,267,160,270);


  
  heart = new Hearts(25,25,50,50);
  heart2 = new Hearts(75,25,50,50);
  heart3 = new Hearts(125,25,50,50);

  coin = new Coins(700,15,30,30);
   
  sword = new Sword(lance.x ,340,40,40);
  bow = new Bow(lance.x,340,40,40);



  goblin = createSprite(100,330,30,50);
  goblin.visible = false;
  goblin2 = createSprite(-100,330,30,50);
  
  goblin3 = createSprite(-200,330,30,50);
  goblin4 = createSprite(1000,330,30,50);
  goblin5 = createSprite(1400,330,30,50);
  goblin6 = createSprite(-600,330,30,50);


  villager1= createSprite(150,340,30,50);
  villager1.shapeColor="green";
  villager1.visible = false;

 

  tradeTab = createSprite(400,140,300,100);
  tradeTab.shapeColor = color(173,120,30);
  tradeTab.visible = false;
  bt = createSprite(tradeTab.x-110,tradeTab.y,70,70);
  bt.addImage("bow",bowImg);
  bt.scale = 0.1;
  bt.visible = false;
  ca= createSprite(tradeTab.x,tradeTab.y,70,70);
  ca.addImage("coin",cai);
  ca.scale = 0.03;
  ca.visible = false;
  ca2= createSprite(tradeTab.x+50,tradeTab.y,70,70);
  ca2.addImage("coin2",ca2i);
  ca2.visible = false;
  buyb=createSprite(tradeTab.x+100,tradeTab.y+55,60,20);
  buyb.addImage("button",buybi);
  buyb.visible = false;
  
  arrowGroup = new Group(); 
  ars = createSprite(720,60,30,30);
  ars.addImage("arrows",arrowImage);
  ars.scale=2;
  ars.visible = false;

  gSword = createSprite(700,340,50,50);
  gSword.addImage("sword",swordImg);
  gSword.scale = 0.1;
  gSword.visible = false;
  
  arrow2 = createSprite(tradeTab.x-110,tradeTab.y,70,70);
  arrow2.addImage("arrow",arrowImage);
  arrow2.scale = 5;
  arrow2.visible = false;

  a3= createSprite(tradeTab.x+50,tradeTab.y,70,70);
  a3.addImage("coin2",img3);
  a3.visible = false;

  traderShop = new House2(400,220,500,300);
  
  titleButton = createSprite(386,310,310,100);
  titleButton.visible = false;

  hinT = createSprite(traderShop.body.position.x-38,traderShop.body.position.y+65,250,130);
  hinT.visible = false;
  hinT.shapeColor="#B38834";

  villager2= createSprite(hinT.x-105,hinT.y+40,30,50);
  villager2.shapeColor="green";
  villager2.visible = false;

  iwall =createSprite(traderShop.body.position.x-168,traderShop.body.position.y,10,400);
  iwall2 =createSprite(traderShop.body.position.x+90,traderShop.body.position.y,10,400);
  iwall.visible = false;
  iwall2.visible = false;
}

function draw() {
  if(gameState ==="notstart"){
    background(titleImg);  
   
    drawSprites();
    lance.visible = false;
    if(mousePressedOver(titleButton)){
      gameState ="started";
      lance.visible = true;
    }
   
  }
  //console.log(lance.x);

  if(gameState === "started"){
  background(135,206,235);  
  Engine.update(engine);

 
  lance.collide(invisground);
  
  
  textSize(40);
  fill("white")
  text("Stage: "+stage,340,50);

  textSize(30);
  text("X"+coins,720,25);
 



  //moving and attacking----------------------------------------
  if(keyDown("LEFT_ARROW")&&swordget===true&&wep==="s") {
    //lance.x = lance.x - 5;
    sword.body.position.x = lance.x - 40;
    
  }else if(keyDown("RIGHT_ARROW")&&swordget===true&&wep==="s") {
    //lance.x = lance.x + 5;
    sword.body.position.x = lance.x + 40;
  }else {
   sword.body.position.x=100000; 
  }

  if(keyDown("LEFT_ARROW")&&bowget===true&&wep==="b") {
    //lance.x = lance.x - 5;
    bow.body.position.x = lance.x - 40;
  }else if(keyDown("RIGHT_ARROW")&&bowget===true&&wep==="b") {
    //lance.x = lance.x + 5;
    bow.body.position.x = lance.x + 40;
  }else {
   bow.body.position.x=100000; 
  }

  if(keyDown("A")) {
    lance.x = lance.x - 5;
    //sword.body.position.x = lance.x - 40;
    
  }
  if(keyDown("D")) {
    lance.x = lance.x + 5;
    //sword.body.position.x = lance.x + 40;
  }

 if(keyDown("1")){
   wep="s";
 }else if(keyDown("2")){
  wep="b";
 }

 if(bowget===true&&wep==="b"){
   if(keyDown("LEFT_ARROW")){
    if(keyCode=== 70){
     Carrow(-20,lance.x-30,arrowImage);
    }
   }else if(keyDown("RIGHT_ARROW")){
    if(keyCode === 70){
     Carrow(+20,lance.x+30,arrowImage2);
    }
   }
   textSize(30);
   text("X"+arrows,740,70);
   ars.visible=true;
 }else{
  ars.visible=false;
 }
 if(bowget===true){
  
   //ca.destroy();
   ca2.destroy();
   bt.destroy();
   if(Trade === 1){
    arrow2.visible = true;
    a3.visible = true;
  }else if(Trade != 1){
   arrow2.visible = false;
   a3.visible = false;
 }
 }
 if(swordget === true){
   gSword.destroy();
 }

 if(bowget===true&&swordget === true){
  
 }
 if(arrowcooldown>0){
   arrowcooldown--;
 }

 if(keyCode===119&&jc===0){
   if(lance.y>339){
   lance.velocityY = -10;
   jc=40
   }
 }
  lance.velocityY = lance.velocityY+0.70;                                                        
 if(jc>0){
  jc--;
}




  //display------------------------------------
  lance.depth =lance.depth+1;

  house1.display();
  enh(520,475,0,1,32,"Press 'space' to enter",0);
  enh(520,475,1,0,101,"Press 'e' to exit",0);
 
  enh(520,475,0,2,32,"Press 'space' to enter",2);
  enh(520,475,2,0,101,"Press 'e' to exit",2);
  house3.display();
  enh(320,275,0,3,32,"Press 'space' to enter",2);
  enh(320,275,3,0,101,"Press 'e' to exit",2);

  traderShop.display();
  enh(430,380,0,4,32,"Press 'space' to enter",3);
  enh(800,0,4,0,101,"Press 'e' to exit",3);



  tree1.display();
 
  tree3.display();

  sword.display();
  bow.display();
  ground.display();
  heart.display();
  heart2.display();
  heart3.display();
  coin.display();


  

  

 //inside stages---------------------------- 
 if(lance.x===0&&stage<=4){
  stage = stage + 1;
  lance.x = 780;
}else{
  lance.collide(invisleft); 
}
if(lance.x===800&&stage>= -4){
  stage = stage - 1;
  lance.x = 20;
}else{
  lance.collide(invisright); 
}

  if(housestage ===1){
   lance.x = 505;
   lance.y = 340;
  }else if(housestage ===2){  
    lance.x = 505;
    lance.y = 340;
   }else if(housestage ===3){ 
    lance.x = 305;
    lance.y = 340;
   }else if(housestage ===4){ 
    //lance.x = 380;
    lance.y = 325;
    hinT.visible = true;
    lance.velocityY = 0;
    lance.collide(iwall);
    lance.collide(iwall2);
   }
 
   
  if(stage === -1&&swordget===false){
    gSword.visible = true;
  }else if(stage <-1||stage>-1){
    gSword.visible = false;
  }else{
    gSword.visible = false;
  }
 if(stage=== -1){
  if(lance.isTouching(gSword)&&swordget===false){
    push();
    textSize(20);
    text("Press 'E' to pick up",lance.x-100,lance.y-30);
    pop();
    if(keyCode === 101){
    swordget=true
    txtstate = 2;
    }
  
  }
 }
push();
textSize(30);
 if(txtstate === 0){
  
   text("Press 'W,A,S,D' to move  ",10,100);
   text("Press 'Space' to enter house,talk and 'e' to exit ",10,150);
   text("Press 'Space' to continue",10,200);
   if(keyCode === 32){
    txtstate = 1;
   }
 }

 if(txtstate === 2){
  
  text("Press left and right arrow keys to wield sword ",10,100);
  text("jump and hit enemyies to kill them",10,150);
  text("Press 'Space' to continue",10,200);
  if(keyCode === 32){
    txtstate = 1;
   }
 }

 if(txtstate === 3){
 
  text("Press '1' and '2' to switch weapons",10,100);
  text("Press left and right arrow keys to draw bow",10,150);
  text("Press 'F' to shoot an arrow",10,200);
  text("Press 'Space' to continue",10,250);
  if(keyCode === 32){
    txtstate = 1;
   }
 }
  
pop();
//health------------------------------
 if(health === 3){
  heart3.body.position.y = 25;
  heart2.body.position.y = 25;
  heart.body.position.y = 25;
 }
 if(health === 2){
 heart3.body.position.y = 2000;
 heart2.body.position.y = 25;
 heart.body.position.y = 25;
 }
 if(health === 1){
  heart3.body.position.y = 2000;
  heart2.body.position.y = 2000;
  heart.body.position.y = 25;
 }
 if(health === 0){
  heart3.body.position.y = 2000;
  heart2.body.position.y = 2000;
  heart.body.position.y = 2000;





  gameState = "GameOver";
 }
 

 



 
//stage objects----------------------------------------------------
sword.body.position.y =lance.y;
bow.body.position.y =lance.y;

 

  
  if(housestage === 1){
    hin1.x=house1.body.position.x+0.5;
    hin1.visible = true;
  }else if(housestage === 0){
   hin1.visible = false;
 }else if(housestage === 2){
  hin1.x=house1.body.position.x+0.5;
  hin1.visible = true;
}else if(housestage === 3){
  hin1.x=house3.body.position.x+0.5;
  hin1.visible = true;
}

  

  
  if(stage === 2||stage===0){
   house1.body.position.x = 500;
  }else if(stage != 2&&stage!=0){
    house1.body.position.x = 10000;
  }
  if(stage === 2){
    tree1.body.position.x = 100;
   }else if(stage ===0){
    tree1.body.position.x = 200;
   }else if(stage !=0&&stage!=2){
    tree1.body.position.x = 100000;
   }
  vis(bed,2,housestage);

  sta(2,house3,300);
 
  sta(3,traderShop,400);
  vis(hinT,4,housestage);
 



 
  sta(2,tree3,700);
  


  vis(villager1,2,stage);
  talk(195,100,"Thank you for defeating the goblins",2,villager1,stage);

  vis(villager2,4,housestage);
  trade(287,227,4,villager2,housestage);
  vis(tradeTab,1,Trade);
  vis(bt,1,Trade);
  vis(ca,1,Trade);
  vis(ca2,1,Trade);
  vis(buyb,1,Trade);
  
  if(mousePressedOver(buyb)&&bowget===false&&coins>=15&&Trade ===1&&bowget===false&&housestage===4){
    coins = coins-15;
    bowget=true;
    Trade  = 3;
    txtstate = 3;
  }
  if(mousePressedOver(buyb)&&bowget===true&&coins>=3&&Trade ===1&&bowget===true&&housestage===4){
    coins = coins-3;
    arrows++;
  }


  
  enemy(goblin,Math.round(random(6,10)),1,1);
  enemy(goblin2,Math.round(random(6,10)),1,1);

  enemy(goblin3,Math.round(random(6,10)),4,1);
  enemy(goblin4,Math.round(random(6,10)),4,1);
  enemy(goblin5,Math.round(random(6,10)),4,1);
  enemy(goblin6,Math.round(random(6,10)),4,1);
  


  drawSprites();
 }

 if(gameState === "GameOver"){
   textSize(131);
   fill(color(235,0,0));
   text("GAME OVER",0,250);
 }
}



//easy functions---------------------------------------------------
function sta(v1,v2,num1){
  if(stage < v1||stage>v1){
    v2.body.position.x = 10000;
  }else if(stage === v1){
    v2.body.position.x = num1;
  }
}
function vis(sprite,Stage,stage1){
 if(stage1 === Stage){
   sprite.visible = true;
 }else if(stage1 != Stage){
  sprite.visible = false;
}
}
function enh(x1,x2,stage1,stage2,key,txt,stage3){
  if(lance.x<=x1&&lance.x>=x2&&housestage ===stage1&&stage ===stage3){
    textSize(20);
    text(txt,lance.x-70,lance.y-110);
    if(keyCode === key){
      housestage = stage2;
    }
  } 
  
}
function enemy(gob,coi,stag,dmg){
  
  gob.addImage("goblin",goblinImg);
  gob.scale = 0.7;
  gob.setCollider("rectangle",0,0,30,50);
  vis(gob,stag,stage);
  if(lance.x - gob.x>gob.x-lance.x&&health>0&&stage ===stag){
    gob.velocityX =5;
    if(stage ===stag&&sword.body.position.x===gob.x&&wep==="s"&&jc>0){
     gob.destroy();
     gob.y = 1000;
    gob.x = 1000;
     coins = coins+coi;
    }
   }else if(lance.x - gob.x<gob.x-lance.x&&health>0&&stage ===stag){
    gob.velocityX =-5;
    if(stage ===stag&&sword.body.position.x===gob.x&&wep==="s"&&jc>0){
     gob.destroy();
     gob.y = 1000;
     gob.x = 1000;
     coins = coins+coi;
    }
    }else if(health === 0){
     gob.velocityX = 0;
   }else if(stage != stag){
    gob.velocityX = 0;
   }
   if(stage ===stag&&arrowGroup.isTouching(gob)&&wep==="b"){
    gob.destroy();
    gob.y = 1000;
    gob.x = 1000;
    coins = coins+coi;
    arrowGroup.destroyEach();
   }
   if(lance.isTouching(gob)&&health>0&&stage === stag){
    health = health -dmg;
    if(lance.x - gob.x>gob.x-lance.x&&stage === stag){
    lance.x = lance.x+30;
    gob.x = gob.x-30;
    }else if(lance.x - gob.x<gob.x-lance.x&&stage === stag){
      lance.x = lance.x-30;    
      gob.x = gob.x+30;
    }
  }
}
function talk(x,x2,tex,st,vil,stg){
  if(lance.x<=x&&lance.x>=x2&&stg===st){
    textSize(20);
    text("Press 'space' to talk",vil.x-50,vil.y-30);
   
    if(keyCode === 32&&stg===st){
      
      textSize(40);
      fill("green");
      text(tex,100,100);
      
      
      
    }
   }
} 
function trade(x,x2,st,vil,stg){
  if(lance.x<=x&&lance.x>=x2&&stg===st){
    textSize(20);
    fill("white");
    text("Press 'T' to trade",vil.x-200,vil.y-60);
   
    if(keyCode ===116){
      Trade = 1;
    }
  }else{
    tradeTab.visible = false;
    Trade =0; 
  }
}
function Carrow(va,va2,Img) {
  if (arrows>0&&arrowcooldown===0){
   arrow = createSprite (va2,lance.y,50,10)
   arrow.addImage(Img);
   arrow.scale = 2.5;
   arrow.velocityX=va;
   arrows--;
  // arrow.lifetime = 60;
  if(arrow.x>=800||arrow.x<=0){
   arrow.destroy();
  }
   arrowGroup.add(arrow); 
   arrowcooldown = 45;
   
  }
 
 }
 
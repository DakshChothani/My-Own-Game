var SERVE = 0;
var PLAY = 1;
var END = 2;
var gameState = SERVE;

var tank1,tank2,gun1,gun2,bullet1,bullet_2;
var back_img,back_img_2;
var person1_img,person2_img;
var tank1_img,tank2_img;
var gun1_img,gun2_img;
var bullet_img_1,bullet_img_2;
var bulletsGroup;
var health_1 = 200;
var health_2 = 100;
var start_play,play_img;


function preload() {
    back_img = loadImage("Back_img.jpg");
    back_img_2 = loadImage("Back_img_2.jpg");
    person1_img = loadImage("person_1.PNG");
    person2_img = loadImage("person_2.PNG");
    tank1_img = loadImage("tank1.png");
    tank2_img = loadImage("tank2.png");
    gun1_img = loadImage("gun1.PNG");
    gun2_img = loadImage("gun2.PNG");
    bullet_img_1 = loadImage("bullet_1.png");
    bullet_img_2 = loadImage("bullet_2.PNG");
    play_img = loadImage("play.png");
}

function setup(){
    createCanvas(displayWidth,displayHeight-115);

    bulletsGroup = createGroup();
    firesGroup = createGroup();

    tank1 = createSprite(1700,800,10,10);
    tank1.addImage("tankImage_1",tank1_img);
    tank1.scale = 0.8;

    tank2 = createSprite(200,800,10,10);
    tank2.addImage("tankImage_2",tank2_img);
    tank2.scale =0.2;

    start_play = createSprite(930,280,50,50);
    start_play.scale = 0.8;
    start_play.addImage("playdisplay",play_img);

}

function draw(){
    background(back_img,"displayImage");
    if(gameState === 0){
        tank1.visible = false;
        tank2.visible = false;
        if(mousePressedOver(start_play)){
            gameState = 1;
        }
    }


    if(gameState === 1){
        tank1.visible = true;
        tank2.visible = true;
        start_play.visible = false;
    if(keyWentDown("d")){
       tankFireBullet_1();
    }

    if(bulletsGroup.isTouching(tank1)){
        bulletsGroup.destroyEach();
        health_2 = health_2 - 20;
    }

    if(keyWentDown("a")){
        tankFireBullet_2();
     }
 
     if(firesGroup.isTouching(tank2)){
         firesGroup.destroyEach();
         health_1 = health_1 - 25;
     }

     if(health_1 === 0 && health_2 === 0){
         tank1.changeAnimation("person_image",person1_img);
     }
    }

    drawSprites();
  if(gameState === 1){
    fill("yellow");
    textSize(50);
    text("Level1",890,40);
    fill("blue");
    textSize(40);
    text("Pakistan",650,80);
    fill("blue");
    textSize(40);
    text("India",1100,80);
    fill(255);
    textSize(30);
    text(health_1,700,120);
    fill(255);
    textSize(30);
    text(health_2,1120,120);
 }
}
    
function tankFireBullet_1(){
    bullet1 = createSprite(430,694,10,10);
    bullet1.addImage("fireImage",bullet_img_1);
    bullet1.scale = 0.2;
    bullet1.velocityX =5;
    bullet1.depth = tank1.depth;
    tank1.depth = tank1.depth + 1;
    bulletsGroup.add(bullet1);

}

function tankFireBullet_2(){
    bullet2 = createSprite(1518,736,10,10);
    bullet2.addImage("fireImage_2",bullet_img_2);
    bullet2.scale = 0.2;
    bullet2.velocityX =-9;
    bullet2.depth = tank2.depth;
    tank2.depth = tank2.depth + 1;
    firesGroup.add(bullet2);

}
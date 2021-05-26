var starImg,bgImg,fairyImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy, fairyVoice;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
    bgImg = loadImage("images/starNight.png");
    //load animation for fairy here
    fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
    //fairyVoice = loadSound("sound/JoyMusic.mp3");
}

function setup() {
    createCanvas(800, 750);

    //write code to play fairyVoice sound
//fairyVoice.play();
    //create fairy sprite and add animation for fairy
    fairy = createSprite(200, 630);
    fairy.addAnimation("fairyflying",fairyImg);  
    fairy.scale =0.25;

    star = createSprite(650,30);
    star.addImage(starImg);
    star.scale = 0.2;

    engine = Engine.create();
    world = engine.world;

    starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
    World.add(world, starBody);
    
    Engine.run(engine);

}

function draw() {
  background(bgImg);
  star.x=starBody.position.x;
  star.y=starBody.position.y;

  keyPressed();
if(star.y>470 && starBody.position>470){
	matter.body.setStatic(starBody,true);
}
  

  drawSprites();

}

function keyPressed() {
    //write code here
    if(keyIsDown(LEFT_ARROW)){
        fairy.x=fairy.x-5;
    }
    if(keyIsDown(RIGHT_ARROW)){
        fairy.x=fairy.x+5;
    }
    if(keyIsDown(UP_ARROW)){
        fairy.y=fairy.y-5;
    }
    if(keyIsDown(DOWN_ARROW)){
        fairy.y=fairy.y+5;
        if(starBody.position.y>470){
            Bodies.setStatic(starBody,false);
        }
    }
}
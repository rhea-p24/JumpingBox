var canvas;
var music;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    

    surface1=createSprite(0,580,360,30);
    surface1.shapeColor="purple";
    surface2=createSprite(295,580,200,30);
    surface2.shapeColor="red";
    surface3=createSprite(515,580,200,30);
    surface3.shapeColor="blue";
    surface4=createSprite(740,580,220,30);
    surface4.shapeColor="yellow";





    //create box sprite and give velocity
    box=createSprite(random(20,700),100,30,30);
    box.shapeColor="white";
    box.velocityY=6;
    box.velocityX=6;



}

function draw() {
    background(rgb(169,169,169));
   
   edges=createEdgeSprites();
   box.bounceOff(edges); 
   //if(surface1.isTouching(box) && ball.bounceOff(surface1)) ball.shapeColor = rgb(0,0,255);
   

    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor="purple";
        }
     if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor="red";
            }
     if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor="blue";
                }
     if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor="yellow";
                    }


   drawSprites();
}

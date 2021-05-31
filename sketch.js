var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var snow = [];

var bgImg;  
var snowFalll


function preload(){

  bgImg = loadImage("snow1.jpg");

}


function setup() {
  createCanvas(800,400);
}

function draw() {
  background(bgImg);  

  for (var b = 0; b < snow.length; b++) {
    snow[b].display();
    }

    if(frameCount%90===0){
      snow.push(new Snow(random(width/2-10, width/2+10),10,15));
      console.log("hello");
    }
}

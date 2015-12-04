var forest;
var chara;
var charaX = 0;
var charaY = 400;

function preload(){
	forest = loadImage("assets/project/background.png");
	chara = loadImage("assets/project/chara.png");

}

function setup(){
	createCanvas(1200,500);
}

function draw(){
	background(forest,1200,500);
	image(chara,charaX,charaY,50,50);

}

function moveUp(){

}

function moveDown(){

}

function moveRight(){

}
function moveLeft(){
	
}
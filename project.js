var forest;
var chara;
var charaX = 0;
var charaY = 400;
var dY = 0;
var dX = 0;

var block;
var trees = [];

var bird;
var time = 0;

var GameOverText;
var GameWinText;
var restartButton;


function preload(){
	forest = loadImage("assets/project/background.png");
	chara = loadImage("assets/project/chara.png");
	bird = loadImage("assets/project/bird.png");
	block = loadImage("assets/project/block.png");
	
}

function setup(){
	createCanvas(1200,500);
	textAlign(CENTER);



	for(var i = 0; i < 60; i ++){
		var x = 100 + floor(random(0,20))*50;
		var y = 150 + floor(random(0,6))*50;
		trees.push(new Wall(x,y));
	}

	//Restart Options
	GameOverText = createElement("h2","Game Over");
	GameOverText.position(1200/2,500/2);
	GameOverText.style("font-size", 30 + "px");
	GameOverText.style("color","white");
	GameOverText.style("font-family","Helvetica");
	GameOverText.hide();

	GameWinText = createElement("h2","You Win!");
	GameWinText.position(1200/2,500/2);
	GameWinText.style("font-size", 30 + "px");
	GameWinText.style("color","white");
	GameWinText.style("font-family","Helvetica");
	GameWinText.hide();

	restartButton = createButton("Restart");
	restartButton.position(1200/2,500/2+100);
	restartButton.mousePressed(gameReset);
	restartButton.hide();
}

function draw(){
	background(forest,1200,500);
	image(chara,charaX + dX, charaY + dY,50,50);

	//that thing
	for(var i = 0; i < trees.length; i ++){
		trees[i].display();
	}

	//timer
	time = time += .6;
	if(time > 450){
		gameOver();
	}else if(time < 0){
		time = 0;
	}
	image(bird, 475 + time, 75, bird.width, bird.height);

	//Win Lose Conditions
	if(dX == 1150 && dY == -250){
		gameWin();
	}else if(time == 450){
		gameOver();
	}

	//In-game Restart
	if(mouseX > 1075 && mouseX < 1125){
		if(mouseY > -325 && mouseY > -275){
			if(mouseIsPressed){
				gameReset();
			}
		}
	}

	for(var i = 0; i < trees.length; i ++){
		if(charaX + dX == trees[i].x ) {
			if(charaY + dY == trees[i].y){
				console.log("stop");
			}
		}
	}

	

}

function keyPressed(){



	if(dX > 50 && dX < 1100){

		if(dY == -250){

			

			if(keyCode == RIGHT_ARROW){
				dX +=50;	
				for(var i = 0; i < trees.length; i ++){
					if(charaX + dX == trees[i].x ) {
						if(charaY + dY == trees[i].y){
							dX -=50;
						}	
					}
				}

			}if(keyCode == LEFT_ARROW){
				if(dX != 100){
					dX -=50;
					for(var i = 0; i < trees.length; i ++){
						if(charaX + dX == trees[i].x ) {
							if(charaY + dY == trees[i].y){
							dX +=50;
							}	
						}
					}
				}
			}if(keyCode == DOWN_ARROW){
				dY += 50;
				for(var i = 0; i < trees.length; i ++){
					if(charaX + dX == trees[i].x ) {
						if(charaY + dY == trees[i].y){
						dY -=50;
						}	
					}
				}
			}

		}else if(dY > -250 && dY < 0){
			if(keyCode == RIGHT_ARROW){
				if(dX != 1050){
					dX +=50;
					for(var i = 0; i < trees.length; i ++){
						if(charaX + dX == trees[i].x ) {
							if(charaY + dY == trees[i].y){
								dX -=50;
							}	
						}
					}
				}
			}if(keyCode == LEFT_ARROW){
				if(dX != 100){
					dX -=50;
					for(var i = 0; i < trees.length; i ++){
						if(charaX + dX == trees[i].x ) {
							if(charaY + dY == trees[i].y){
							dX +=50;
							}	
						}
					}
				}
			}if(keyCode == DOWN_ARROW){
				dY +=50;
				for(var i = 0; i < trees.length; i ++){
					if(charaX + dX == trees[i].x ) {
						if(charaY + dY == trees[i].y){
						dY -=50;
						}	
					}
				}
			}if(keyCode == UP_ARROW){
				dY -= 50;
				for(var i = 0; i < trees.length; i ++){
					if(charaX + dX == trees[i].x ) {
						if(charaY + dY == trees[i].y){
						dY +=50;
						}	
					}
				}
			}

		}else if(dY == 0){
			if(keyCode == RIGHT_ARROW){
				if(dX !=1050){
					dX +=50;
					for(var i = 0; i < trees.length; i ++){
						if(charaX + dX == trees[i].x ) {
							if(charaY + dY == trees[i].y){
								dX -=50;
							}	
						}
					}
				}
			}if(keyCode == LEFT_ARROW){
				dX -=50;
				for(var i = 0; i < trees.length; i ++){
					if(charaX + dX == trees[i].x ) {
						if(charaY + dY == trees[i].y){
						dX +=50;
						}	
					}
				}
			}if(keyCode == UP_ARROW){
				dY -=50;
				for(var i = 0; i < trees.length; i ++){
					if(charaX + dX == trees[i].x ) {
						if(charaY + dY == trees[i].y){
						dY +=50;
						}	
					}
				}
			}
		}
	
	}else if(dX < 100){

		if(dX > 0){
			if(keyCode == LEFT_ARROW){
				dX -=50;
				for(var i = 0; i < trees.length; i ++){
					if(charaX + dX == trees[i].x ) {
						if(charaY + dY == trees[i].y){
							dX +=50;
						}	
					}
				}
			}
		}if(keyCode == RIGHT_ARROW){
			dX +=50;
			for(var i = 0; i < trees.length; i ++){
				if(charaX + dX == trees[i].x ) {
					if(charaY + dY == trees[i].y){
						dX -=50;
					}	
				}
			}

		}

	}else if (dX > 1050){

		if(keyCode == LEFT_ARROW){
			dX -=50;
			for(var i = 0; i < trees.length; i ++){
				if(charaX + dX == trees[i].x ) {
					if(charaY + dY == trees[i].y){
						dX +=50;
					}	
				}
			}
		}if (dX < 1150){
			if(keyCode == RIGHT_ARROW){
					dX +=50;
					for(var i = 0; i < trees.length; i ++){
						if(charaX + dX == trees[i].x ) {
							if(charaY + dY == trees[i].y){
							dX -=50;
							}	
						}
					}

			}
		}
	}

}


function keyTyped(){
	if(key ==='x'){
		wallReset();
	}
}

function Wall(x,y){
	this.x = x;
	this.y = y;

	this.display = function(){
		image(block,this.x,this.y,50,50);
	}
}

function wallReset(){
	trees = [];

	for(var i = 0; i < 65; i ++){
		var x = 100 + floor(random(0,20))*50;
		var y = 150 + floor(random(0,6))*50;
		trees.push(new Wall(x,y));
		if(x == charaX+dX && y == charaY+dY){
			wallReset();
		}
	}



}


 function gameOver(){	
 	GameOverText.show();
	restartButton.show();
	time = time -= 3;
 }

function gameWin(){
	GameWinText.show();
	restartButton.show();
	time = time -= 3;
}

function gameReset(){
	GameWinText.hide();
	GameOverText.hide();
	restartButton.hide();
	wallReset();
 	dX = 0;
 	dY = 0;
 	time = 0;
}


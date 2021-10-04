canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
greencar_width=75;
greencar_height=100;
greencar_x = 5;
greencar_y = 255;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
greencar_speed = 10;

function add() {
  backgroundimgtag = new Image();
  backgroundimgtag.onload = background_image;
  backgroundimgtag.src = background_image;

 carimgtag = new Image();
 carimgtag.onload = greencar_image;
 carimgtag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(backgroundimgtag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(carimgtag,greencar_x,greencar_y,greencar_width,greencar_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up(){
 ctx.clearRect(greencar_x, greencar_y, canvas.width, canvas.height);
 uploadBackground();
 greencar_y -= greencar_speed;
 uploadgreencar();
}

function down(){
 ctx.clearRect(greencar_x, greencar_y, canvas.width, canvas.height);
 uploadBackground();
 greencar_y += greencar_speed;
 uploadgreencar();
}

function left(){
 ctx.clearRect(greencar_x, greencar_y, canvas.width, canvas.height);
 uploadBackground();
 greencar_x -= greencar_speed;
 uploadgreencar();
}

function right(){
 ctx.clearRect(greencar_x, greencar_y, canvas.width, canvas.height);
 uploadBackground();
 greencar_x += greencar_speed;
 uploadgreencar();
}
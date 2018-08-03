var canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth*0.8
canvas.height = window.innerHeight*0.7
var c = canvas.getContext("2d");
	c.fillStyle = "#000000";
	c.font = "20px Sans-Serif";
	c.textBaseline = "top";
	c.fillText ("Hello World!", 195, 80);

var helloWorldImage = new Image();
helloWorldImage.onload = function () {
	 context.drawImage(helloWorldImage, 160, 130);
	}
helloWorldImage.src = "lock.png";

c.strokeStyle = "#000000";
c.strokeRect(5, 5, 490, 290);

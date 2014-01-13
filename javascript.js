
/*
var imgObj = null;
function init(){
   imgObj = document.getElementById('myImage');
   imgObj.style.position= 'relative'; 
   imgObj.style.left = '0px'; 
}
function moveRight(){
   imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
*/

/*
var imageArray = new Array();

imageArray[0] = new Image();
imageArray[0].src = "images/aster.jpg";

imageArray[1] = new Image();
imageArray[1].src = "images/lizzy.jpg";

imageArray[2] = new Image();
imageArray[2].src = "images/lark.jpg";

imageArray[3] = new Image();
imageArray[3].src = "images/veronica.jpg";

imageArray[4] = new Image();
imageArray[4].src = "images/lily.jpg";

function imageLoop() {
     setTimeout("document.images['aster'].src = imageArray[0].src", 100);
     setTimeout("document.images['lizzy'].src = imageArray[1].src", 200);
     setTimeout("document.images['lark'].src = imageArray[2].src", 300); 
     setTimeout("document.images['veronica'].src = imageArray[3].src", 400); 
     setTimeout("document.images['lily'].src = imageArray[4].src", 500);
     setTimeout("document.images['veronica'].src = imageArray[3].src", 600); 
     setTimeout("document.images['lark'].src = imageArray[2].src", 700); 
     setTimeout("document.images['lizzy'].src = imageArray[1].src", 8000); 
     setTimeout("document.images['aster'].src = imageArray[0].src", 900);
}
*/

/*  Loop function (array) 
var imageLoop = document.getElementByClassName('imageLoop');
var loopPics = ['images/aster.jpg', 'images/lizzy.jpg', 'images/lark.jpg', 'images/veronica.jpg', 'images/lily.jpg'];
var totalPics = loopPics.length;
var i = 0;

function loop () {
	if (i > (totalPics - 1)) {
		i=0;
	}
	imageLoop.innerHTML = '<img src="images/butterflyorange.jpg'+loopPics[i]+'">';
	i++;
	loopTimer = setTimeout('loop()', 3000);
}
loop();
/*


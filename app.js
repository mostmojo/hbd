var cat = document.createElement("img");
document.body.appendChild(cat);

cat.src = "https://res.cloudinary.com/mostmojo/image/upload/v1574152282/cat.png";
cat.style.width = "280px";
cat.style.left = "0px";
cat.style.top = "0px";

cat.style.position = "absolute";

var boundaryX = window.innerWidth;
var boundaryY = window.innerHeight;

var speed = 3;
var x = 1;
var y = 1;

function screensaver () {
  var positionX = cat.offsetLeft;
  var positionY = cat.offsetTop;

  if (positionX + cat.offsetWidth > boundaryX || positionX < 0) {
	x = x *= -1;

  }

  if (positionY + cat.offsetHeight > boundaryY || positionY < 0) {
	y = y *= -1;
  }

  cat.style.left = cat.x + (speed * x) + 'px';
  cat.style.top = cat.y + (speed * y) + 'px';

  setTimeout(screensaver, 20);

}
setTimeout(screensaver, 20);
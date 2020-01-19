var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


c.fillStyle = "red";
c.fillRect(50, 50, 100, 100);
c.fillStyle = "blue";
c.fillRect(300, 300, 100, 100);
c.fillStyle = "green";
c.fillRect(159, 150, 100, 100);


c.fillText("what is this", 400, 400, 100);

//LIne
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.lineTo(50, 300);
c.strokeStyle = "blue";
c.stroke();

//Circle
c.beginPath();
c.arc(400, 600, 100, 0, 2* Math.PI , true);
c.stroke();


console.log(canvas);
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

function drawCircle(radius, xPos, yPos)
{
    c.fillText("Radius = " + radius, Math.round(radius) + Math.round(xPos), yPos);

    c.beginPath();
    c.arc(xPos, yPos, radius, 0, 2* Math.PI , true);
    c.stroke();

    //for (var i = 0; i < 10; i++ )
    //{
    //   c.beginPath();
    //    c.arc(Math.random()*window.innerWidth, Math.random()*window.innerHeight, radius++, 0, 2* Math.PI , true);
    //    c.stroke();
    //}
}


function drawRect()
{
    c.fillStyle = "red";
    c.fillRect(50, 50, 100, 100);
    c.fillStyle = "blue";
    c.fillRect(300, 300, 100, 100);
    c.fillStyle = "green";
    c.fillRect(159, 150, 100, 100);
}


function drawTriangle()
{
//Line
    c.beginPath();
    c.moveTo(50, 300);
    c.lineTo(300, 100);
    c.lineTo(400, 300);
    c.lineTo(50, 300);
    c.strokeStyle = "blue";
    c.stroke();
}

console.log(canvas);
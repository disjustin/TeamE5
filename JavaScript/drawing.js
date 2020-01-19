var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

function drawCircle(radius, xPos, yPos)
{
    c.fillText("Radius = " + radius, Math.round(xPos) + 0.8 * Math.round(radius), Math.round(yPos) - 0.8 * Math.round(radius), 100);

    c.beginPath();
    c.arc(xPos, yPos, radius, 0, 2* Math.PI , true);
    c.stroke();
}
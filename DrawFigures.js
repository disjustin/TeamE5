var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth / 2 ;
canvas.height = window.innerHeight / 3 * 2;

var c = canvas.getContext('2d');
const gridFactor = 10;


// function drawGrid()
// {
//     // Grid 
//     var xGrid = 0;
//     var yGrid = 0;
//     c.globalAlpha = 0.2;
//     for (var i = 0; i < canvas.width / gridFactor; i++)
//     {
//         c.beginPath();
//         c.moveTo(xGrid, 0);
//         c.lineTo(xGrid, canvas.height);
//         c.strokeStyle = "black";
//         c.stroke();
//         xGrid += gridFactor * 5;
//     }
//     for (var j = 0; j < canvas.height / gridFactor; j++)
//     {
//         c.beginPath();
//         c.moveTo(0, yGrid);
//         c.lineTo(canvas.width, yGrid);
//         c.strokeStyle = "black";
//         c.stroke();
//         yGrid += gridFactor * 5;
//     }
//     c.globalAlpha = 1;;
// }



function drawCircle(radius)
{
    if (radius > 0)
    {
        var xPos = parseInt(canvas.width) / 2 / gridFactor;
        var yPos = parseInt(canvas.height) / 2 / gridFactor;

        c.clearRect(0, 0, canvas.width, canvas.height);
        //drawGrid();
        c.fillText("Radius = " + radius, gridFactor * (Math.round(radius) + Math.round(xPos)) + 10, yPos * gridFactor);
        
        c.beginPath();
        c.arc(xPos * gridFactor, yPos * gridFactor, radius * gridFactor, 0, 2* Math.PI , true);
        c.stroke();
    }
    else
        alert("Values must be non-negative, duh");

}


function drawRect(width, height)
{
    if (width < 0 || height < 0)
    {
        alert("Values must be non-negative, duh");
    }
    else{
        var width = parseInt(width) * gridFactor;
        var height = parseInt(height) * gridFactor;
        var xPos = parseInt(canvas.width) / 2 ;
        var yPos = parseInt(canvas.height) / 2 ;
        c.clearRect(0, 0, canvas.width, canvas.height);
        //drawGrid(); 
        c.strokeStyle = "black";
        c.strokeRect(xPos - (width / 2), yPos - (height / 2), width, height);
    }
}


function drawTriangle()
{
    var xPos1, xPos2, xPos3, yPos1, yPos2, yPos3;

//Line
c.clearRect(0, 0, canvas.width, canvas.height);
//drawGrid();

    c.beginPath();
    c.moveTo(50, 300);
    c.lineTo(300, 100);
    c.lineTo(400, 300);
    c.lineTo(50, 300);
    c.strokeStyle = "blue";
    c.stroke();
}

console.log(canvas);
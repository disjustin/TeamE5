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


//When right triangle button is pressed

// function addtriangle(){
//  if(triangleadded == false) 
//      {
        
//         var div = document.getElementById("deftri");
//        var triangle = document.createElement("div");
//         triangle.className = "triangle-up";
//          triangleadded = true
//          div.appendChild(triangle)
//     }
//  }
// function addrectangle(){
//     if(rectangleadded == false)
// {
//     var div = document.getElementById("defrec");
//     var rectange = document.createElement("div");
//     rectange.className = "rectangle";
//     rectangleadded = true
//      div.appendChild(rectangle)
//      }
//  }
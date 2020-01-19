//When right triangle button is pressed
var triangleadded = false


function addtriangle(){
    if(triangleadded == false) 
    {
        var div = document.getElementById("deftri");
        var triangle = document.createElement("div");
        triangle.className = "triangle-up";
        triangleadded = true
        div.appendChild(triangle)
    }
    
}
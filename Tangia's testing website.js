
function tributton() {
    document.getElementById("circinterface").className = "hidden";
    document.getElementById("quadinterface").className = "hidden";
    document.getElementById("triinterface").className = "visible";
}
function rectbutton() {
    document.getElementById("circinterface").className = "hidden";
    document.getElementById("triinterface").className = "hidden";
    document.getElementById("quadinterface").className = "visible";
}
function circbutton() {
    document.getElementById("triinterface").className = "hidden";
    document.getElementById("quadinterface").className = "hidden";
    document.getElementById("circinterface").className = "visible";
}
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

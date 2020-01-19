function displayInputSquare(){
    document.getElementById("demo").innerHTML = "Input for square";
    hideAll();
    document.getElementById("side1s").className = "";
    document.getElementById("squarebtn").className = "";
}

function displayInputRectangle(){
    document.getElementById("demo").innerHTML = "Input for rectangle";
    hideAll();
    document.getElementById("side1r").className = "";
    document.getElementById("side2r").className = "";
    document.getElementById("btnRect").className = "";
}




function hideAll()
{
    document.getElementById("side1r").className = "hidden";
    document.getElementById("side2r").className = "hidden";
    document.getElementById("side1s").className = "hidden";
    document.getElementById("btnRect").className = "hidden";
    document.getElementById("squarebtn").className = "hidden";
}
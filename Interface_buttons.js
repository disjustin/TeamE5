
function tributton() {
    document.getElementById("circinterface").className = "hidden";
    document.getElementById("quadinterface").className = "hidden";
    document.getElementById("triinterface").className = "visible";
}
function quadbutton() {
    document.getElementById("circinterface").className = "hidden";
    document.getElementById("triinterface").className = "hidden";
    document.getElementById("quadinterface").className = "visible";
}
function circbutton() {
    document.getElementById("triinterface").className = "hidden";
    document.getElementById("quadinterface").className = "hidden";
    document.getElementById("circinterface").className = "visible";
}
function displayInputSquare() {
    document.getElementById("rectinterface").className = "hidden";
    document.getElementById("sqinterface").className = "visible";
}
function displayInputRectangle() {
    document.getElementById("sqinterface").className = "hidden";
    document.getElementById("rectinterface").className = "visible";
}
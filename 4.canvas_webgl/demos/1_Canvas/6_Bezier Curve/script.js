


function initiate()
{
    var elem = document.getElementById('canvas');
    var canvas = elem.getContext('2d');
    canvas.beginPath();
    canvas.moveTo(150, 50);
    canvas.bezierCurveTo(50, 100, 200, 150, 100,250);
    canvas.lineWidth = 5;
    canvas.lineCap = "round";
    canvas.stroke();



}

addEventListener("load", initiate);
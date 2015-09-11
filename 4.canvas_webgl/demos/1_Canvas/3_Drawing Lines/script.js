


function initiate()
{
    var elem = document.getElementById('canvas');
    var canvas = elem.getContext('2d');

    canvas.beginPath();
    canvas.moveTo(200, 200);
    canvas.lineTo(200, 400);
    canvas.lineTo(400, 400);
    canvas.closePath();
    canvas.stroke();
    canvas.fill();

}

addEventListener("load", initiate);
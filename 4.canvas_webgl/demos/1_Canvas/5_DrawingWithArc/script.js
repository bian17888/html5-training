


function initiate()
{
    var elem = document.getElementById('canvas');
    var canvas = elem.getContext('2d');
    canvas.beginPath();
   // canvas.arc(200, 200, 75, 0, Math.PI * 2, false);
    var radiansFromDegrees = Math.PI / 180 * 60;
    canvas.arc(200, 200, 75, 0, radiansFromDegrees, false);
    canvas.stroke();
}

addEventListener("load", initiate);
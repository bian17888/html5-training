


function initiate()
{
    var elem = document.getElementById('canvas');
    var canvas = elem.getContext('2d');
    canvas.beginPath();
    canvas.moveTo(100, 100);
    canvas.quadraticCurveTo(150, 200, 100, 300);
    canvas.stroke();

    canvas.beginPath();
    canvas.moveTo(100, 100);
    canvas.quadraticCurveTo(50, 150, 100, 300);
    canvas.stroke();


}

addEventListener("load", initiate);


function initiate()
{
    var elem = document.getElementById('canvas');
    var canvas = elem.getContext('2d');
    var gradient = canvas.createLinearGradient(200,0,0,200);
    gradient.addColorStop(0.3, '#d00');
    gradient.addColorStop(0.7, '#0d0');

    canvas.fillStyle = gradient;

    canvas.fillRect(0,0,200,200);
    canvas.fillRect(200, 300, 400, 400);

}

addEventListener("load", initiate);
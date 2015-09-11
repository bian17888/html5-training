


function initiate()
{
    var elem = document.getElementById('canvas');
    var canvas = elem.getContext('2d');
    canvas.font = "bold 20px segoe UI, sans-serif";
    canvas.textAlign = "start";
    canvas.textBaseline = "bottom";
    var message = "Hello Html5!";
    canvas.fillText(message, 200,220);
    var textSize = canvas.measureText(message);
    canvas.strokeRect(200, 200, textSize.width, 20);
}

addEventListener("load", initiate);
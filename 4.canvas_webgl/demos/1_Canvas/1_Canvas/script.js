
function initiate()
{
    var elem = document.getElementById('canvas');
    var canvas = elem.getContext('2d');
    canvas.fillStyle = "#cc0000";
    canvas.strokeStyle = "#000";

    canvas.strokeRect(100, 100, 120, 120);
    canvas.fillRect(110, 110, 100, 100);
    canvas.clearRect(130, 130, 30, 30);

}

addEventListener("load", initiate);
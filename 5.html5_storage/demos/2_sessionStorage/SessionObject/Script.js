


function initiate()
{
   var saveButton = document.getElementById('save');
   var retrieveButton = document.getElementById('retrieve');
   var deleteButton = document.getElementById('delete');
   var reviewButton = document.getElementById('review');
   var clearButton = document.getElementById('clear');

   saveButton.addEventListener('click', saveItem);
   retrieveButton.addEventListener('click', retrieveItem);
   deleteButton.addEventListener('click', deleteItem);
   reviewButton.addEventListener('click', reviewAll);
   clearButton.addEventListener('click', clearAll);
   addEventListener('storage', StorageReview);
}

function saveItem()
{
    var key = document.getElementById('key').value;
    var value = document.getElementById('value').value;
    localStorage[key] = value; 
}

function retrieveItem()
{
    var data = document.getElementById('data');
    var key = document.getElementById('key').value;
    var value = localStorage[key];
    data.innerHTML = '<div>' + key + ': ' + value + '</div>';
}

function deleteItem()
{
    if (confirm('Delete?'))
    {
        var key = document.getElementById('key').value;
        localStorage.removeItem(key);
        data.innerHTML = '<div>Deleted.</div>';
    }    
}

function clearAll()
{
    if (confirm('Clear?'))
    {
        localStorage.clear();
        data.innerHTML = '<div>Cleared.</div>';
    }    
}


function reviewAll()
{
    for(var i = 0; i < localStorage.length; i++)
    {
        var key = localStorage.key(i);
        var value = localStorage[key];
        data.innerHTML += '<div>' + key + ': ' + value + '<br></div>';

    }
}

function storageReview(e)
{
     data.innerHTML += '<div>' +
    'key: ' + e.key + '<br>' +
    'old value: ' + e.oldValue + '<br>' +
    'new value: ' + e.newValue + '<br>' +
    'url: ' + e.url + '<br>' +
    'storage area: ' + e.storageArea + '<br></div>';

}


addEventListener("load", initiate);
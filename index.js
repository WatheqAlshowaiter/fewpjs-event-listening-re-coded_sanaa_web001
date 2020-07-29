function addingEventListener() {
    alert('I was clicked!');
}

addingEventListener.addingEventListener('click', function()
{
  alert('I was clicked');
});


const input = document.getElementById('input');

input.addEventListener('click', addingEventListener);
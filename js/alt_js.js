const input = document.getElementById('command-in');
const history = document.getElementById('history');
const loc = document.getElementById('location');

function init_listeners() {
    input.addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            //const former textdocument.createElement('span');
            history.innerHTML += '<p>' + loc.innerText + ' ' + input.value + '</p>';
            input.value = '';
        }
    })
}

init_listeners();
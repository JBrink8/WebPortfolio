const input = document.getElementById('command-input');
const history = document.getElementById('history');

function init_listeners() {
    input.addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            var cmd = input.value.split('$')[0];
            history.innerHTML += '<p>' + input.value + '</p>';
            input.value = '';
        }
    })
}
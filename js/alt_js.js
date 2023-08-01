const input = document.getElementById('command-in');
const history = document.getElementById('history');
const loc = document.getElementById('location');

//No dict/hs structure in JS so I'll just use a js obj

/*                            terminal
    *                /       |       |     \ 
    *               /        |       |      \  
    *             Index   Projects  About   Blog
                             |               |
                        LIST OF ALL       LIST OF ALL

*/

const paths = {
    index: function () {
        window.location.href = 'index.html';
    },
    projects: function () {
        window.location.href = 'projects.html';
    },
    about: function () {
        window.location.href = 'about.html';
    },
    blog: function () {
        window.location.href = 'blog.html';
    },
}

const commands = {
    help: function() {
        history.innerHTML += '<br/>' + "Available commands:" + '<br/>' 
                          + '<ul>' 
                                + '<li>' + 'help' + '</li>' 
                                + '<li>' + 'ls' + '</li>' 
                                + '<li>' + 'cd' + '</li>'
                                + '<li>' + 'clear' + '</li>'
                                + '<li>' + 'page' + '</li>'
                          + '</ul>';
    },
    clear: function() {
        history.innerHTML = '';
    },
    ls: function() {
        history.innerHTML += '<br/>' + 'Available directories:' + '<br/>' 
                          + '<ul>' 
                                + '<li>' + 'index' + '</li>'
                                + '<li>' + 'projects' + '</li>'
                                + '<li>' + 'about' + '</li>' 
                                + '<li>' + 'blog' + '</li>'
                          + '</ul>';
    },
    cd: function() {
        var dir = input.value.split(' ')[1];
        console.log(dir);
        if (dir in paths) {
            paths[dir]();
        }
        else {
            history.innerHTML += '<br/>' + 'Invalid directory.';
        }
    }
}


function init_listeners() {
    input.addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            //const former textdocument.createElement('span');
            history.innerHTML += '<br/>' + loc.innerText + ' ' + input.value;
            var primary_arg = input.value.split(' ')[0];
            if (primary_arg in commands) { 
                commands[primary_arg]();
            }
            else {
                history.innerHTML += '<br/>' + 'Invalid command.';
            }
            input.value = '';
        }
    })
}

init_listeners();
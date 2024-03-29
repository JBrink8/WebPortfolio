const input = document.getElementById('command-in');
const history = document.getElementById('history');
const loc = document.getElementById('location');
const main = document.getElementById('main');


////////////////////////////////////////////////////////////////
/////////////////////// easel SHIT BELOW //////////////////////
///////////////////////////////////////////////////////////////

var canvas, ctx, flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_flag = false;

var x = "black",
    y = 2;

    
function color(obj) {
    switch (obj.id) {
        case "green":
            x = "green";
            break;
        case "blue":
            x = "blue";
            break;
        case "red":
            x = "red";
            break;
        case "yellow":
            x = "yellow";
            break;
        case "orange":
            x = "orange";
            break;
        case "black":
            x = "black";
            break;
        case "white":
            x = "white";
            break;
    }
    if (x == "white") y = 14;
    else y = 2;
}

function draw() {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = x;
    ctx.lineWidth = y;
    ctx.stroke();
    ctx.closePath();
}

function erase() {
    var m = confirm("Clear easel?");
    if (m) {
        ctx.clearRect(0, 0, w, h);
    }
}

function saveContent() {
    const content = easel.toDataURL();
    
    const downloadLink = document.createElement('a');
    downloadLink.href = content;
    downloadLink.download = 'easel.png';
    downloadLink.click();
}

function findxy(res, e) {
    if (res == 'down') {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - easel.offsetLeft;
        currY = e.clientY - easel.offsetTop;

        flag = true;
        dot_flag = true;
        if (dot_flag) {
            ctx.beginPath();
            ctx.fillStyle = x;
            ctx.fillRect(currX, currY, 2, 2);
            ctx.closePath();
            dot_flag = false;
        }
    }
    if (res == 'up' || res == "out") {
        flag = false;
    }
    if (res == 'move') {
        if (flag) {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - easel.offsetLeft;
            currY = e.clientY - easel.offsetTop;
            draw();
        }
    }
}

function init_easel() {
    easel = document.getElementById('easel');
    ctx = easel.getContext("2d");
    w = easel.width;
    h = easel.height;

    easel.addEventListener("mousemove", function (e) {
        findxy('move', e)
    }
    , false);
    easel.addEventListener("mousedown", function (e) {
        findxy('down', e)
    }
    , false);
    easel.addEventListener("mouseup", function (e) {
        findxy('up', e)
    }
    , false);
    easel.addEventListener("mouseout", function (e) {
        findxy('out', e)
    }
    , false);
}

////////////////////////////////////////////////////////////////
///////////////////// easel SHIT DONE /////////////////////////
////////////////////////////////////////////////////////////////

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
        let pos = loc.innerText.indexOf(':')
        loc.innerText = loc.innerText.slice(0, pos) + '/index' + loc.innerText.slice(pos);
        //loc.innerText += '/index';
        //window.location.href = 'index.html';
    },
    projects: function () {
        loc.innerText = loc.innerText.slice(0, pos) + '/projects' + loc.innerText.slice(pos);
        //window.location.href = 'projects.html';
    },
    about: function () {
        loc.innerText = loc.innerText.slice(0, pos) + '/about' + loc.innerText.slice(pos);
        //window.location.href = 'about.html';
    },
    blog: function () {
        loc.innerText = loc.innerText.slice(0, pos) + '/blog' + loc.innerText.slice(pos);
        //window.location.href = 'blog.html';
    },
}

const easel_cmnds = {
    make: function() {
        var arr = input.value.split(' ');
        if (arr.length != 4) {
            history.innerHTML += '<br/>' + 'Format input: easel make |len| |width|';
            return;
        }
        var len = arr[2];
        var width = arr[3];
        if (isNaN(len) || isNaN(width)) {
            history.innerHTML += '<br/>' + 'Invalid dimensions. Please enter two integers for length and width.';
            return;
        }
        if (!document.getElementById('easel')) {
            const easel = document.createElement('canvas');
            easel.id = 'easel';
            easel.width = len;
            easel.height = width;
            main.insertBefore(easel, main.firstChild);
            init_easel();
            return;
        }
        else {
            history.innerHTML += '<br/>' + 'easel already exists';
            return;
        }
    },
    clear: function() {
        if (!document.getElementById('easel')) {
            history.innerHTML += '<br/>' + 'easel does not exist';
        }
        else {
            document.getElementById('easel').remove();
        }
    },
    save: function() {
        if (!document.getElementById('easel')) {
            history.innerHTML += '<br/>' + 'easel does not exist';
        }
        else {
            saveContent();
        }
    },
    erase: function() {
        if (!document.getElementById('easel')) {
            history.innerHTML += '<br/>' + 'easel does not exist';
        }
        else {
            erase();
        }
    },
    paintColor: function() {
        if (!document.getElementById('easel')) {
            history.innerHTML += '<br/>' + 'easel does not exist';
        }
        else {
            var color_input = input.value.split(' ')[2];
            if (color_input) {
                x = color_input;
            }
        }
    }
}

const commands = {
    help: function() {
        history.innerHTML += '<br/>' + "Available commands:" + '<br/>' 
                          + '<ul>' 
                                + '<li>' + 'help' + '</li>' 
                                + '<li>' + 'ls' + '</li>' 
                                + '<li>' + 'cd' + '</li>'
                                + '<li>' + 'clear' + '</li>'
                                + '<li>' + 'easel' + '</li>'
                                + '<li>' + 'page' + '</li>'
                          + '</ul>';
    },
    clear: function() {
        history.innerHTML = '';
    },
    ls: function() {
        history.innerHTML += '<br/>' + 'Curr directory content:' + '<br/>' 
                          + '<ul>' 
                                + '<li>' + 'index.html' + '</li>'
                                + '<li>' + 'projects.html' + '</li>'
                                + '<li>' + 'about.html' + '</li>' 
                                + '<li>' + 'blog.html' + '</li>'
                                + '<li>' + 'SVG' + '</li>'
                                + '<li>' + 'js' + '</li>'
                                + '<li>' + 'css' + '</li>'
                                + '<li>' + 'static' + '</li>'
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
    },
    easel: function() {
        var args = input.value.split(' ');
        if (args.length === 1) {
            history.innerHTML += '<br/>' + 'Available easel commands:' + '<br/>' 
                          + '<ul>' 
                                + '<li>' + 'easel make |width| |length|' + '</li>'
                                + '<li>' + 'easel clear' + '</li>'
                                + '<li>' + 'easel save' + '</li>'
                                + '<li>' + 'easel erase' + '</li>'
                                + '<li>' + 'easel paintColor <color>' + '</li>'
                          + '</ul>';
        }
        else {
            if (args[1] in easel_cmnds) {
                easel_cmnds[args[1]]();
            }
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
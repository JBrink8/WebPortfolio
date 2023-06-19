const ZEUStile = document.getElementById('ZEUS-tile');
const SPARKtile = document.getElementById('SPARK-tile');
const MSCGtile = document.getElementById('MSCG-tile');
const PTtile = document.getElementById('PT-tile');
const SpatDAPytile = document.getElementById('SpatDAPy-tile');
const CHNtile = document.getElementById('CHN-tile');

const ZEUSdiscript = document.getElementById('ZEUS-discript');
const SPARKdiscript = document.getElementById('SPARK-discript');
const MSCGdiscript = document.getElementById('MSCG-discript');
const PTdiscript = document.getElementById('PT-discript');
const SpatDAPydiscript = document.getElementById('SpatDAPy-discript');
const CHNdiscript = document.getElementById('CHN-discript');

const tile_index = document.getElementById('tile_index');
const tile_title = document.getElementById('tile-title');

function displayZEUS() {
    tile_title.style.display = 'none';
    tile_index.style.display = 'none';
    ZEUSdiscript.style.display = 'block';
}

function displaySPARK() {
    tile_title.style.display = 'none';
    tile_index.style.display = 'none';
    SPARKdiscript.style.display = 'block';
}

function displayMSCG() {
    tile_title.style.display = 'none';
    tile_index.style.display = 'none';
    MSCGdiscript.style.display = 'block';
}

function displayPT() {
    tile_title.style.display = 'none';
    tile_index.style.display = 'none';
    PTdiscript.style.display = 'block';
}

function displaySpatDAPy() {
    tile_title.style.display = 'none';
    tile_index.style.display = 'none';
    SpatDAPydiscript.style.display = 'block';
}

function displayCHN() {
    tile_title.style.display = 'none';
    tile_index.style.display = 'none';
    CHNdiscript.style.display = 'block';
}

ZEUStile.addEventListener('click', displayZEUS);
SPARKtile.addEventListener('click', displaySPARK);
MSCGtile.addEventListener('click', displayMSCG);
PTtile.addEventListener('click', displayPT);
SpatDAPytile.addEventListener('click', displaySpatDAPy);
CHNtile.addEventListener('click', displayCHN)

var exitbuttons = document.getElementsByClassName('exit');

for (let i = 0; i < exitbuttons.length; ++i) {
    exitbuttons[i].addEventListener('click', function() { 
        window.location.reload();

    })
};
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
if (ZEUStile) {
ZEUStile.addEventListener('click', displayZEUS);
SPARKtile.addEventListener('click', displaySPARK);
MSCGtile.addEventListener('click', displayMSCG);
PTtile.addEventListener('click', displayPT);
SpatDAPytile.addEventListener('click', displaySpatDAPy);
CHNtile.addEventListener('click', displayCHN)
}

var exitbuttons = document.getElementsByClassName('exit');

for (let i = 0; i < exitbuttons.length; ++i) {
    exitbuttons[i].addEventListener('click', function() { 
        window.location.reload();

    })
};
if (document.getElementById('DropButton')) {    
document.getElementById('DropButton').addEventListener('click', function() {
    const menu = document.getElementById('dropdown-content');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    }
    else {
        menu.style.display = 'block';
    }
})
}


$(document).ready(function() {
    var containers = $('.container');

    if (containers.length) {
        containers.each(function() {
            var container = $(this);

            // Support small text - copy to fill screen width
            if (container.find('.scrolling-text').outerWidth() < $(window).width()) {
                var windowToScrolltextRatio = Math.round($(window).width() / container.find('.scrolling-text').outerWidth()),
                    scrollTextContent = container.find('.scrolling-text .scrolling-text-content').text(),
                    newScrollText = '';
                for (var i = 0; i < windowToScrolltextRatio; i++) {
                    newScrollText += ' ' + scrollTextContent;
                }
                container.find('.scrolling-text .scrolling-text-content').text(newScrollText);
            }

            // Init variables and config
            var scrollingText = container.find('.scrolling-text'),
                scrollingTextWidth = scrollingText.outerWidth(),
                scrollingTextHeight = scrollingText.outerHeight(true),
                startLetterIndent = parseInt(scrollingText.find('.scrolling-text-content').css('font-size'), 10) / 4.8,
                startLetterIndent = Math.round(startLetterIndent),
                scrollAmountBoundary = Math.abs($(window).width() - scrollingTextWidth),
                transformAmount = 0,
                leftBound = 0,
                rightBound = scrollAmountBoundary,
                transformDirection = container.hasClass('left-to-right') ? -1 : 1,
                transformSpeed = 200;

            // Read transform speed
            if (container.attr('speed')) {
                transformSpeed = container.attr('speed');
            }
        
            // Make scrolling text copy for scrolling infinity
            container.append(scrollingText.clone().addClass('scrolling-text-copy'));
            container.find('.scrolling-text').css({'position': 'absolute', 'left': 0});
            container.css('height', scrollingTextHeight);
        
            var getActiveScrollingText = function(direction) {
                var firstScrollingText = container.find('.scrolling-text:nth-child(1)');
                var secondScrollingText = container.find('.scrolling-text:nth-child(2)');
        
                var firstScrollingTextLeft = parseInt(container.find('.scrolling-text:nth-child(1)').css("left"), 10);
                var secondScrollingTextLeft = parseInt(container.find('.scrolling-text:nth-child(2)').css("left"), 10);
        
                if (direction === 'left') {
                    return firstScrollingTextLeft < secondScrollingTextLeft ? secondScrollingText : firstScrollingText;
                } else if (direction === 'right') {
                    return firstScrollingTextLeft > secondScrollingTextLeft ? secondScrollingText : firstScrollingText;
                }
            }
        
            $(window).on('wheel', function(e) {
                var delta = e.originalEvent.deltaY;
                
                if (delta > 0) {
                    // going down
                    transformAmount += transformSpeed * transformDirection;
                    container.find('.scrolling-text .scrolling-text-content').css('transform', 'skewX(10deg)');
                }
                else {
                    transformAmount -= transformSpeed * transformDirection;
                    container.find('.scrolling-text .scrolling-text-content').css('transform', 'skewX(-10deg)');
                }
                setTimeout(function(){
                    container.find('.scrolling-text').css('transform', 'translate3d('+ transformAmount * -1 +'px, 0, 0)');
                }, 10);
                setTimeout(function() {
                    container.find('.scrolling-text .scrolling-text-content').css('transform', 'skewX(0)');
                }, 500)
        
                // Boundaries
                if (transformAmount < leftBound) {
                    var activeText = getActiveScrollingText('left');
                    activeText.css({'left': Math.round(leftBound - scrollingTextWidth - startLetterIndent) + 'px'});
                    leftBound = parseInt(activeText.css("left"), 10);
                    rightBound = leftBound + scrollingTextWidth + scrollAmountBoundary + startLetterIndent;
        
                } else if (transformAmount > rightBound) {
                    var activeText = getActiveScrollingText('right');
                    activeText.css({'left': Math.round(rightBound + scrollingTextWidth - scrollAmountBoundary + startLetterIndent) + 'px'});
                    rightBound += scrollingTextWidth + startLetterIndent;
                    leftBound = rightBound - scrollingTextWidth - scrollAmountBoundary - startLetterIndent;
                }
            });
        })
    }
});


function checkForVisibility() {
    var headers = document.querySelectorAll(".header");
    headers.forEach(function(header) {
      if (isElementInViewport(header)) {
        header.classList.add("headerVisible");
      } else {
        header.classList.remove("headerVisible");
      }
    });

    var subheaders = document.querySelectorAll(".subheader");
    subheaders.forEach(function(subheader) {
        if (isElementInViewport(subheader)) {
            subheader.classList.add("subheaderVisible");
        } else {
            subheader.classList.remove("subheaderVisible");
        }
    });

}
  
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
  
  if (window.addEventListener) {
    addEventListener("DOMContentLoaded", checkForVisibility, false);
    addEventListener("load", checkForVisibility, false);
    addEventListener("scroll", checkForVisibility, false);
}



var michText = document.querySelectorAll('.goBlue');
michText.forEach(function(text) {
    var gBlues = text.innerText.split('!');
    text.innerText = '';

    for (let i = 0; i < gBlues.length; ++i) {
        const coloredGBlue = document.createElement('span');
        if (i % 2 == 0) {
        coloredGBlue.style.color = '#00274C';
        } else {
            coloredGBlue.style.color = '#FFCB05';
        }
        coloredGBlue.innerText = gBlues[i] += '!';
        text.appendChild(coloredGBlue);
    }
});


const nav = document.getElementById('nav');
$(window).on('scroll', function(){
    var s = $(window).scrollTop(),
        d = $(document).height();
  
    var scrollPercent = (s / d) * 100;
    
    if (scrollPercent > 55) {
        nav.classList.add('invertColors');
    }
    else {
        nav.classList.remove('invertColors');
    }
})

var opt = 0;
var options = document.querySelectorAll('.CoT');
options[opt].style.display = 'block';
const slide = document.getElementById('sliding');
var height = document.getElementById('getMe').offsetHeight;
height = (height/5);
console.log(height);
slide.style.paddingTop = height + 'px';
slide.style.paddingBottom = height + 'px';

function changeShow() {
    options[opt].style.display = 'none';
    opt++;
    if (opt > options.length - 1) {
        opt = 0;
    }
    options[opt].style.display = 'block';
}

setInterval(changeShow, 3500);


/*var allStylish = document.querySelectorAll('.stylishTextContain');
let largestWidth = 0;
var largestDiv = null;
allStylish.forEach(function(elems) {
    if (elems.offsetWidth > largestWidth) {
        largestWidth = elems.offsetWidth;
        largestDiv = elems;
    }
});
if (largestDiv) {
    allStylish.forEach(function(elems) {
        elems.style.width = largestWidth + 'px';
    });
}*/

let experience = [];
fetch("static/experience.json")
    .then(response => {
    return response.json();
    })
    .then(data => experience=data);


const eContain = document.getElementById('experWrap');

function populateCategory(keys, map) {
    keys.forEach(function(key) {
        if(map[key]) {
            const container = document.createElement('div');
            container.classList.add('whatUpDoe', 'sub-section');
            eContain.appendChild(container);
            const title = document.createElement('div');
            title.classList.add('StylishText', 'makeBlue');
            if (key === 'Web') {
                const italic = document.createElement('i');
                italic.innerText = "Web Systems \n & Development";
                title.appendChild(italic);
            }
            else if (key === 'DS&A') {
                const italic = document.createElement('i');
                italic.innerText = "Data Structures \n & Algorithms";
                title.appendChild(italic);
            }
            else if (key === 'Data') {
                const italic = document.createElement('i');
                italic.innerText = "Data-Driven \n Development";
                title.appendChild(italic);
            }
            else if (key === 'Leadership') {
                const italic = document.createElement('i');
                italic.innerText = "Leadership \n & Teamwork";
                title.appendChild(italic);
            }
            else if (key === 'Math') {
                const italic = document.createElement('i');
                italic.innerText = "Mathematics \n & Theory";
                title.appendChild(italic);
            }
            else {
                const italic = document.createElement('i');
                italic.innerText = key;
                title.appendChild(italic);
            }

            container.appendChild(title);
            const items = document.createElement('div');
            items.classList.add('listText', 'goCenter');
            container.appendChild(items);
            const unorderedList = document.createElement('ul');
            items.appendChild(unorderedList);
            const exps = map[key];
            exps.forEach(function(exp) {
                const listItem = document.createElement('li');
                listItem.innerText = exp.title + " - " + exp.subtitle;
                unorderedList.appendChild(listItem);
            });
            const line = document.createElement('div');
            line.classList.add('breakBlue');
            eContain.appendChild(line);
        }
    });
}

function sort(value) {
    
    const categoryContainer = {};
    var options = [];
    while (eContain.firstChild) {
        eContain.removeChild(eContain.firstChild);
    }
    if (value === "0") {

        var web = experience.filter(function(exp) {
            return exp.category === "Web";
        });
        if (web.length > 0) {
            categoryContainer['Web'] = web;
            options.push('Web');
        }

        var dsa = experience.filter(function(exp) {
            return exp.category === "DS&A";
        });
        if (dsa.length > 0) {
            categoryContainer['DS&A'] = dsa;
            options.push('DS&A');
        }

        var data = experience.filter(function(exp) {
            return exp.category === "Data";
        });
        if (data.length > 0) {
            categoryContainer['Data'] = data;
            options.push('Data');
        }

        var leadership = experience.filter(function(exp) {
            return exp.category === "Leadership";
        });
        if (leadership.length > 0) {
            categoryContainer['Leadership'] = leadership;
            options.push('Leadership');
        }

        var maths = experience.filter(function(exp) {
            return exp.category === "Math";
        });
        if (maths.length > 0) {
            categoryContainer['Math'] = maths;
            options.push('Math');
        }

        populateCategory(options, categoryContainer);
        
    }
    else {
        var optionsInt = [];
        experience.forEach(function(exp) {
            var Sdate = exp.start.split('/')[2];
            var Edate = exp.end.split('/')[2];
            if (Sdate != Edate) {
                var SdateInt = parseInt(Sdate);
                var EdateInt = parseInt(Edate);
                while (SdateInt <= EdateInt) {
                    let currYear = SdateInt.toString();
                    if (!categoryContainer[currYear]) {
                        categoryContainer[currYear] = [];
                        optionsInt.push(SdateInt);
                    }
                    categoryContainer[currYear].push(exp);
                    SdateInt++;
                }
            }
            else {
                if (!categoryContainer[Sdate]) {
                    categoryContainer[Sdate] = [];
                    optionsInt.push(parseInt(Sdate));
                }
                categoryContainer[Sdate].push(exp);
            }
        });
        if (value === "1") {
            optionsInt.sort(function(a, b) {
                a - b;
            });
        }
        else {
            optionsInt.sort();
        }
        optionsInt.forEach(function(option) {
            options.push(parseInt(option));
        });

        populateCategory(options, categoryContainer);
    }
}

const selector = document.getElementById('sort');
selector.addEventListener('click', function() {
    selector.addEventListener('change', sort(selector.value));
});

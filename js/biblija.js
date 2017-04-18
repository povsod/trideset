/* Show notes when users click the asterisk sign */

var IE = document.all ? true : false;
if (!IE) {
    document.captureEvents(Event.MOUSEMOVE)
}
document.onmousemove = getMouseXY;

var tempX = 0;
var tempY = 0;

function getMouseXY(e) {
    // grab the x-y pos.s if browser is IE
    if (IE) {
        tempX = e.clientX + document.body.scrollLeft;
        tempY = e.clientY + document.body.scrollTop;
    }
    // grab the x-y pos.s if browser is NS
    else {
        tempX = e.pageX;
        tempY = e.pageY;
    }
    if (tempX < 0) {
        tempX = 0;
    }
    if (tempY < 0) {
        tempY = 0;
    }
    return true;
}

function note(layer, image, g1, g2) {
    var g1 = (g1 == null) ? 'images/opomba.gif' : g1;
    var g2 = (g2 == null) ? 'images/opomba2.gif' : g2;
    showhide(layer, image, g1, g2);
}

function xref(layer, image) {
    var graphic1 = 'images/ref.gif';
    var graphic2 = 'images/ref2.gif';
    showhide(layer, image, graphic1, graphic2);
}

function showhide(layer, image, graphic1, graphic2) {
    var winW = window.innerWidth;
    var winH = window.innerHeight;

    var cx = tempX + 10;
    var cy = tempY - 10;
    if (cx + 200 > winW)
        cx = tempX - 220;
    if (cx < 5){
        cx = 5;
        cy = cy + 20;
    }

    var el = document.getElementById('wrapper');
	var leftPadding = window.getComputedStyle(el, null).getPropertyValue('padding-left');
    if (leftPadding == '250px') {
        cx = cx - 250;
    }
    cy = cy - 80;

    if (document.all[layer].style.visibility == "visible") {
        document.all[layer].style.visibility = "hidden";
        document.images[image].src = graphic1;
    }
    else {
        console.log(cx);
        console.log(cy);
    document.images[image].src = graphic2;
        document.all[layer].style.left = cx + 'px';
        document.all[layer].style.top = cy + 'px';
        document.all[layer].style.visibility = "visible";
    }
}

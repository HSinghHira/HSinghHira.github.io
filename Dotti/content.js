
var element = document.createElement("input");

element.type = 'button';
element.value = "Try Again My Man";

element.style.position = "fixed";
element.style.zIndex = "9999";
element.style.right = "50px";
element.style.bottom = "50px";
element.style.backgroundColor = '#9C8C42';
element.style.border = '2px solid #91782c';
element.style.color = '#FFF';
element.style.textAalign = 'center';
element.style.borderRradius = '4px';
element.style.padding = '3px';
element.style.cursor = 'pointer';

element.style.maxWidth = '150px';

element.onclick = function showText() { 
        document.getElementById("controls-group-retry").style.display="inline";
    }


document.body.insertBefore(element, document.body.firstChild);


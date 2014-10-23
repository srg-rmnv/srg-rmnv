$(document).ready(function(){
	//  new window on click with random width and ordinal number centered to screen
	$('.new')
		.data('counter', 0)                            
		.click(function() { 
						    var min  = 100;
						    var maxW = $(document).width()  - 800;
						    var maxH = $(document).height() - 200;
						    var randWidth  = min + Math.random()*(maxW+1-min);
						 	  var randHeight = min + Math.random()*(maxH+1-min);
						    randW = randWidth^0;
						    randH = randHeight^0;
						    var counter = $(this).data('counter');      
						    $(this).data('counter', counter + 1);
						    var offsetHorizont = $(document).width() / 2 - randW / 2;
						    var offsetVertical = $(document).height() / 2 - randH / 2;
						  	$("<div id='drag' class='dragme draggable index"+counter+"'style='width:"+randW+"px; left: "+offsetHorizont+"px;  top: "+offsetVertical+"px; height:"+randH+"px;' draggable><em>"+counter+"</em></div>").appendTo("body");           
	});


});

	// drag and drop section


function fixEvent(e, _this) {
  e = e || window.event;

  if (!e.currentTarget) e.currentTarget = _this;
  if (!e.target) e.target = e.srcElement;

  if (!e.relatedTarget) {
    if (e.type == 'mouseover') e.relatedTarget = e.fromElement;
    if (e.type == 'mouseout') e.relatedTarget = e.toElement;
  }

  if (e.pageX == null && e.clientX != null ) {
    var html = document.documentElement;
    var body = document.body;

    e.pageX = e.clientX + (html.scrollLeft || body && body.scrollLeft || 0);
    e.pageX -= html.clientLeft || 0;

    e.pageY = e.clientY + (html.scrollTop || body && body.scrollTop || 0);
    e.pageY -= html.clientTop || 0;
  }

  if (!e.which && e.button) {
    e.which = e.button & 1 ? 1 : ( e.button & 2 ? 3 : ( e.button & 4 ? 2 : 0 ) )
  }

  return e;
}

function getChar(event) {

  if (event.which!=0 && event.charCode!=0) {
    if (event.which < 32) return null;
    return String.fromCharCode(event.which)  
  }

  return null; 
}

function getCoords(elem) {
    var box = elem.getBoundingClientRect();
    var body = document.body;
    var docElem = document.documentElement;
    var scrollTop = window.pageYOffset;
    var scrollLeft = window.pageXOffset;
    var clientTop = docElem.clientTop || body.clientTop || 0;
    var clientLeft = docElem.clientLeft || body.clientLeft || 0;
    var top  = box.top;
    var left = box.left;

    return { top: top, left: left };
}


function addClass(elem, casta) {
  var c = elem.className.split(' ');
  for(var i=0; i<c.length; i++) {
    if (c[i] == casta) return;
  }

  if (elem.className == '') elem.className = casta;
  else elem.className += ' ' + casta;
}


function removeClass(elem, casta) {
  var c = elem.className.split(' ');
  for(var i=0; i<c.length; i++) {
    if (c[i] == casta) c.splice(i--, 1);
  }

  elem.className = c.join(' ');
}

function hasClass(el, cls) {
  for(var c = el.className.split(' '),i=c.length-1; i>=0; i--) {
    if (c[i] == cls) return true;
  }
  return false;
}




document.body.onmousedown = function(e) {
  e = fixEvent(e);

  var dragElement = e.target;

  if (!hasClass(dragElement, 'draggable')) return;

  var coords, shiftX, shiftY;
  
  startDrag(e.pageX, e.pageY);


  document.onmousemove = function(e) {
    e = fixEvent(e);
    moveAt(e.pageX, e.pageY);
  }

  dragElement.onmouseup = function() {
    finishDrag();
  }


  function startDrag(pageX, pageY) {

    coords = getCoords(dragElement);
    shiftX = pageX - coords.left;
    shiftY = pageY - coords.top;
    addClass(dragElement, "dragging");
    dragElement.style.position = 'absolute';
    document.body.appendChild(dragElement); 
    moveAt(pageX, pageY);
  }

  function finishDrag() {
    removeClass(dragElement, 'dragging');
    document.onmousemove = dragElement.onmouseup = null;
  }

  function moveAt(pageX, pageY) {
    var newX = pageX - shiftX; 
    var newY = pageY - shiftY; 
    var newBottom = newY + dragElement.offsetHeight;
    dragElement.style.left = newX + 'px';
    dragElement.style.top = newY + 'px';
  }

  return false;
}

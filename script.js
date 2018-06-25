//Written by Axel (https://twitter.com/axesve)
//Was going to use Jquery for this but realized it would be a very small project and thus Jquery will slow load speeds...

var banana = 15.24;
var items = [
{name:"Mount Everest",height:"884800"},
{name:"Eiffel Tower",height:"324000"},
{name:"Amazon River",height:"699200000"},];
var bananas = 0;

window.onload = function () {
items.sort( function ( a, b ) { return b.height - a.height; } );
	for (var i = items.length - 1; i >= 0; i--) {
		spawnItems(i,items[i].name,items[i].height);
	}
};

function spawnItems(i,n,h){
    var e = document.getElementById("c");

    var number = spaceFormat((h/15).toFixed(0));
	e.insertAdjacentHTML('afterbegin','<div class="item" onclick="toggle(this)"><div class="itemName">'+n+' - '+number+' Bananas</div><div class="itemBananas" id='+i+'>');
	var tBananas = (h/15240);
	tBananas--;	

	this.drawBanana(i,0,Math.abs(tBananas));
	
}

function spaceFormat(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function drawBanana(i,b,t) {
  setTimeout(function() {

    if (b++ < t) {
    	if(b > t){
	   		if(1 - Math.abs(t-b) >= 0.4){
		    		var e = document.getElementById(i);
					e.insertAdjacentHTML('beforeend','<img class="banana" src="imgs/banana2.png">');
				}else if(1 - Math.abs(t-b) <= 0.4){
					var e = document.getElementById(i);
					e.insertAdjacentHTML('beforeend','<img class="banana" src="imgs/banana3.png">');
				}else if(1 - Math.abs(t-b) >= 0.7){
					var e = document.getElementById(i);
					e.insertAdjacentHTML('beforeend','<img class="banana" src="imgs/banana1.png">');
				}
	    	}

	    if(t > 0){
    	var e = document.getElementById(i);
		e.insertAdjacentHTML('afterbegin','<img class="banana" src="imgs/banana.png">');
	}
		drawBanana(i,b,t);
	
    }
  }, 25);
};

function toggle(i){
	if(i.classList.contains("show")){
		i.classList.remove("show");
	}else{
		i.classList.add("show");
	}
}
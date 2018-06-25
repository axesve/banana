//Written by Axel (https://twitter.com/axesve)
//Was going to use Jquery for this but realized it would be a very small project and thus Jquery will slow load speeds...

var banana = 15.24;

//Want to help out? Add more landmarks, objects and things with correct cm height and name!
//No need to sort them by size, just add at the end and it will sort it self.

var items = [
{name:"Mount Everest (H)",height:"884800"},
{name:"Eiffel Tower (H)",height:"324000"},
{name:"Amazon River (L)",height:"699200000"},
{name:"Big Ben (H)",height:"9600"},
{name:"Leaning Tower of Pisa (H)",height:"5800"},
{name:"Empire State Building (H)",height:"38100"},
{name:"Golden Gate Bridge (L)",height:"273700"},
{name:"Colosseum (L)",height:"18900"},
{name:"Sagrada Família (H)",height:"17200"},
{name:"St. Basil's Cathedral (H)",height:"6500"},
{name:"Taj Mahal (H)",height:"7300"},
{name:"Kilimanjaro (H)",height:"589500"},
];


window.onload = function () {
items.sort( function ( a, b ) { return b.height - a.height; } );
	for (var i = items.length - 1; i >= 0; i--) {
		spawnItems(i,items[i].name,items[i].height);
	}
};

//Spawn items in content div
function spawnItems(i,n,h){
    var e = document.getElementById("c");

    var number = spaceFormat((h/15).toFixed(0));
	e.insertAdjacentHTML('afterbegin','<div class="item" onclick="toggle(this)"><div class="itemName">'+n+' - '+number+' Bananas</div><div class="itemBananas" id='+i+'>');
	var tBananas = (h/15240);

	this.drawBanana(i,0,Math.abs(tBananas));
	
}

//Format total banana text from etc. 46000 to 46 000
function spaceFormat(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}


function drawBanana(i,b,t) {
  setTimeout(function() {

    if (b++ < t) {

    	if(b > t){

    		//Bad way, unsure how well it works.
    		if(Math.abs(t-b)*1000 < 1000 && Math.abs(t-b)*1000 > 600){
					var e = document.getElementById(i);
					e.insertAdjacentHTML('beforeend','<img class="banana" src="imgs/banana3.png">');
    		}else if(Math.abs(t-b)*1000 <= 500){
    				var e = document.getElementById(i);
					e.insertAdjacentHTML('beforeend','<img class="banana" src="imgs/banana2.png">');
    		}else if(Math.abs(t-b)*1000 < 250){
    				var e = document.getElementById(i);
					e.insertAdjacentHTML('beforeend','<img class="banana" src="imgs/banana1.png">');
    		}
	    	}


	    	//Check if there is enough for 1 banana.
	    	if(b > 1){
		    	var e = document.getElementById(i);
				e.insertAdjacentHTML('afterbegin','<img class="banana" src="imgs/banana.png">');
			}

		drawBanana(i,b,t);
	
    }
  }, 20);
};

//Toggle show
function toggle(i){
	if(i.classList.contains("show")){
		i.classList.remove("show");
	}else{
		i.classList.add("show");
	}
}
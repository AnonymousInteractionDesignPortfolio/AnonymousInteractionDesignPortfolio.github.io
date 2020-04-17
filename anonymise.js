window.onload = function(){anonymisePage()};

function anonymisePage() {
	
	//add an increasing elipsis
	function addDot(){
	document.getElementById('anon').innerHTML += "<h1><b>Anonymising Page</b></h1>";
	}
	setInterval(addDot, 330);
	
	//remove name from elements and replace with Anonymous
	var allElements = document.getElementsByTagName('*');
		var counter;
			for (counter=0; counter<allElements.length; counter++){
				if (allElements[counter].innerHTML == "Sammy Arschavir"){
					allElements[counter].innerHTML = "Anonymous";
				}
			}

	//remove the div covering the page
	setTimeout(removeNotice, 1000);
	function removeNotice() {
		document.getElementById('anon').remove();
		}
}

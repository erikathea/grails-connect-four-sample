//TODO: Remove magic number 4

function play (row, col) {
	insertToken (row, col);
    checkForWinner();
    updateGameboard();
}

function insertToken (row, col) {
    var rows = document.getElementById("board").rows.length;
    
    for (var i = rows-1; i >= 0; i--) {
    	var id = "played_"+i+"_"+col
    	var cell = document.getElementById(id).value;
    	// checks if cell is empty
    	if(cell == ""){
    		document.getElementById(i+"_"+col).style.background = getPlayerColor ();
    		//inserted token virtually - the cell is played
    		document.getElementById(id).value = getPlayerName ();
    		break;
    	}
    }
    
}

function getPlayerColor () {
	var clicks = document.getElementById("clicks").value;
	if (clicks % 2 == 0) {		
		return 'rgb(248, 93, 93)'; // Player A
	}
	else {
		return 'rgb(97, 97, 255)'; //Player B
	}
}

function getPlayerName () {
	var clicks = document.getElementById("clicks").value;
	if (clicks % 2 == 0) {
		return document.getElementById("playerCellA").innerText;
	}
	else {
		return document.getElementById("playerCellB").innerText;
	}
}

function updateGameboard () {
	// add click count
	var clicks = document.getElementById("clicks").value;
	document.getElementById("clicks").value = (parseInt(clicks) + 1);
	
	//update colors
	var cell = document.getElementById("turnCell").style.background = getPlayerColor ();
}

function end () {
	alert("Wuzzaaa! "+ getPlayerName() + " win!" );
	var buttons = document.getElementsByClassName("cellButton buttons"); 
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].disabled = true;
	};
}

function checkForWinner () {
	var rows = document.getElementById("board").rows.length;
	var cols = document.getElementById('board').rows[0].cells.length;
	
	for (var x = rows-1; x >= 0; x--) {
		for (var y = 0; y < cols; y++) {
			var id = "played_"+x+"_"+y
	    	var cell = document.getElementById(id).value;
			
			// skips non-played cells
	    	if(cell == "") {
	    		continue;
	    	}
	    	
	    	//check for connected cells
	    	if(isHorizontallyConnected(x, y)) {
	    		end();
	    		return;
	    	}
	    	
	    	else if(isVerticallyConnected(x, y)) {
	    		end();
	    		return;
	    	} 
	    	
	    	else if (isDiagonallyUpwardConnected(x, y)) {
	    		end();
	    		return;
	    	}
	    	
	    	else if (isDiagonallyDownwardConnected(x, y)) {
	    		end();
	    		return;
	    	};
		}
		
	}
		
}

function isHorizontallyConnected (row, col) {
	var cols = document.getElementById('board').rows[0].cells.length;
	if(col+4 > cols) {
		return false;
	}
	
	var player = getPlayerName();
	
	for (var y = 0; y < 4 ; y++) {
		var id = "played_"+row+"_"+ (col+y)
		var cell = document.getElementById(id).value;
		
		if(cell == "" || cell != player) {
			return false;
		}
	}
		
	return true;
}

function isVerticallyConnected (row, col) {
	if(row-4 < 0) {
		return false;
	}
	
	var player = getPlayerName();
	
	for (var x = 0; x < 4; x++) {
		var id = "played_"+(row-x)+"_"+col
		var cell = document.getElementById(id).value;
		if(cell == "" || cell != player) {
			return false;
		}
	    	
	}
	
	return true;
}

function isDiagonallyUpwardConnected (row, col) {
	var cols = document.getElementById('board').rows[0].cells.length;
	if(col+4 > cols || row-3 < 0) {
		return false;
	}
	
	var player = getPlayerName();
	
	for (var z = 0; z < 4; z++) {
		var id = "played_"+(row-z)+"_"+(col+z)
		//alert(id);
		var cell = document.getElementById(id).value;
		if(cell == "" || cell != player) {
			return false;
		}
	    	
	}
	
	return true;
}

function isDiagonallyDownwardConnected (row, col) {
	var cols = document.getElementById('board').rows[0].cells.length;
	if(col-4 < cols || row-3 < 0) {
		return false;
	}
	
	var player = getPlayerName();
	
	for (var z = 0; z < 4; z++) {
		var id = "played_"+(row-z)+"_"+(col-z)
		var cell = document.getElementById(id).value;
		if(cell == "" || cell != player) {
			return false;
		}
	    	
	}
	
	return true;
}
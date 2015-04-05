//TODO: Rename these constants
const CLOSEST = 1;
const CLOSER = 2;
const CLOSE = 3;
const FOUR = 4;

$('#board button').on('click', function() {
	insertToken($(this).data('col'));
	if(!checkForWinner()) {
		updateBoard()
	}
});

function updateBoard() {
	// update click count
	var count = parseInt($('input#clicks').val());
	count += 1;
	$('input#clicks').val(count);

	$('td#turnCell').removeClass('player-a').removeClass('player-b').addClass(getPlayerClass());
}

function insertToken(col) {
	$.each(($('#board tr td.'+col)).get().reverse(), function(){
		var button = $(this).find('button').get();
		if (!($(button).hasClass('player-a') || $(button).hasClass('player-b'))) {
			$(button).addClass(getPlayerClass());
			$(button).text(getPlayerId());
			$(button).prop('disabled', true);
			return false;
		}
	});
}

function checkForWinner() {
	var rows = $('table#board tr').length;
	var cols = $('table#board tr.0 td').length;
	var tokens = $('.'+ getPlayerClass())
	if (tokens.size() >= FOUR) {
		if (isHorizontallyConnected(rows, tokens) ||
			isVerticallyConnected(cols, tokens) ||
			isDiagonallyConnected(tokens)
		) {
			endGame();
			return true;
		}
	}
	return false;
}

function endGame () {
	$.each($('#board button'), function(){
		$(this).prop('disabled', true);
	});
	$('td#turnCell h1').text(getPlayerName() +'WINS!!!');
	alert("Wuzzaaa! "+ getPlayerName() + " wins!" );
}

function isHorizontallyConnected(rows, tokens) {
	return isHVConnected(rows, tokens, 'row', 'col');
}

function isVerticallyConnected(cols, tokens) {
  return isHVConnected(cols, tokens, 'col', 'row');
}

function isDiagonallyConnected(tokens) {
	var ret_value = false;
	$.each(tokens, function(){
		var row = $(this).data('row');
		var col = $(this).data('col');
		if (isUDDiagonalConnected(tokens, row, col, 'up') ||
			isUDDiagonalConnected(tokens, row, col, 'down')) {
			ret_value = true;
			return ret_value;
		}
	});
	return ret_value;
}

function isHVConnected(cells, tokens, type, data_type) {
	var ret_value = false;
	for(var cell = cells-1; cell >= 0; cell--) {
		var cell_tokens = tokens.filter('[data-'+ type +'='+ cell +']');
		if (cell_tokens.length < FOUR) {
			continue;
		}

		$.each(cell_tokens, function() {
			var this_cell = $(this).data(data_type);
			if (cell_tokens.filter('[data-'+ data_type +'='+ (this_cell+CLOSEST) +']').length != 0 &&
				cell_tokens.filter('[data-'+ data_type +'='+ (this_cell+CLOSER) +']').length != 0 &&
				cell_tokens.filter('[data-'+ data_type +'='+ (this_cell+CLOSE) +']').length != 0
				) {
				ret_value = true;
				return ret_value;
			}
		});
  }
  return ret_value;
}

function isUDDiagonalConnected(cell_tokens, row, col, direction) {
	var close = CLOSE;
	var closer = CLOSER;
	var closest = CLOSEST;

	if (direction=='down') {
		close *= -1;
		closer *= -1;
		closest *= -1;
	}

	if (cell_tokens.filter('[data-row='+ (row-CLOSE) +']').filter('[data-col='+ (col+close) +']').length != 0 &&
		cell_tokens.filter('[data-row='+ (row-CLOSER) +']').filter('[data-col='+ (col+closer) +']').length != 0 &&
		cell_tokens.filter('[data-row='+ (row-CLOSEST) +']').filter('[data-col='+ (col+closest) +']').length != 0
		) {
		ret_value = true;
		return ret_value;
	}
}

function getPlayerClass() {
	if (parseInt($('input#clicks').val()) % 2 == 0) {
		return 'player-a';
	}
	else {
		return 'player-b';
	}
}

function getPlayerId() {
	if (parseInt($('input#clicks').val()) % 2 == 0) {
		return 'A';
	}
	else {
		return 'B';
	}
}

function getPlayerName() {
	if (parseInt($('input#clicks').val()) % 2 == 0) {
		return $("#playerCellA").text().trim();
	}
	else {
		return $("#playerCellB").text().trim();
	}
}

/*function play (row, col) {
	insertToken (row, col);
  checkForWinner(row, col);
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
}*/
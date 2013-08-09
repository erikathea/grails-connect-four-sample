package game.connect

class ConnectController {
	def index() {
		
	}
	
	def play = {
		int rows = Integer.parseInt(params.rows)
		int cols = Integer.parseInt(params.cols)
		[board:new Board(rows, cols), playerA:params.playerA, playerB:params.playerB]
	}
	
}

package game.connect

class ConnectController {
	def index() {}

	def play = {
		int rows = params.row ? Integer.parseInt(params.rows) : 6
		int cols = params.col ? Integer.parseInt(params.cols) : 7
    def playerA = params.playerA ? params.playerA : "Player A"
    def playerB = params.playerB ? params.playerB : "Player B"
		[board:new Board(rows, cols), playerA: playerA, playerB: playerB]
	}

}

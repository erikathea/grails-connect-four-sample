package game.connect

class Board {
	def rows
	def cols
	def cells = []
	
	public Board() {
		this.rows = 6
		this.cols = 7
		populateCells()
	}
	
	public Board(int rows, int cols) {
		this.rows = rows
		this.cols = cols
		populateCells()
	}
	
	private void populateCells() {
		for(int x = 0; x < this.rows; x++) {
			for(int y = 0; y < this.cols; y++) {
				Cell cell = new Cell()
				cell.x = x
				cell.y = y
				cells << cell
			}
		}
	}
	
}

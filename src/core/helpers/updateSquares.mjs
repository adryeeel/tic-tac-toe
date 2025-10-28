const updateSquares = (squares, turn, i) =>
	squares.map((sq, j) => (j === i ? turn : sq));

export { updateSquares };

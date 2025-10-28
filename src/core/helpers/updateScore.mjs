const updateScore = (score, turn) => ({
	...score,
	[turn]: score[turn] + 1,
});

export { updateScore };

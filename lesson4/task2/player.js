const player = {

	x: 0,
	y: 0,

	move(nextPoint) {
		if (nextPoint.x < 0) {
			this.x = 0;
		} else if (nextPoint.x == config.rowsCount) {
			this.x = config.rowsCount - 1;
		} else {
			this.x = nextPoint.x;
		}
		if (nextPoint.y < 0) {
			this.y = 0;
		} else if (nextPoint.y == config.colsCount) {
			this.y = config.colsCount - 1;
		} else {
			this.y = nextPoint.y;
		}
	},
};

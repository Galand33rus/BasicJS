let mover = {
	getDirection() {
		const availableDirections = [2, 4, 6, 8, 1, 3, 7, 9];
		while (true) {
			let direction = parseInt(prompt('Введите число 2, 4, 6, 8 для перемещения в стороны или 1, 3, 7, 9 для перемещения по диагонали, "Отмена" для выхода.'));
			if (isNaN(direction)) {
				return null;
			}
			if (!availableDirections.includes(direction)) {
				alert('Для перемещения необходимо ввести одно из чисел 1, 2, 3, 4, 6, 7, 8, 9');
				continue;
			}
			return direction;
		}
	},
	getNextPosition(direction) {
		const nextPosition = {
			x: player.x,
			y: player.y
		};
		switch (direction) {
			case 2:
				nextPosition.y++;
				break;
			case 4:
				nextPosition.x--;
				break;
			case 6:
				nextPosition.x++;
				break;
			case 8:
				nextPosition.y--;
				break;
			case 1:
				nextPosition.x--;
				nextPosition.y++;
				break;
			case 3:
				nextPosition.x++;
				nextPosition.y++;
				break;
			case 7:
				nextPosition.x--;
				nextPosition.y--;
				break;
			case 9:
				nextPosition.x++;
				nextPosition.y--;
				break;
		}
		return nextPosition;
	}
};
let game = {

	run() {
		while (true) {
			const direction = mover.getDirection();
			if (direction === null) {
				log('Игра окончена');
				return;
			}
			const nextPoint = mover.getNextPosition(direction);
			renderer.clear();
			player.move(nextPoint);
			renderer.render();
		}
	},

	init() {
		log('Ваше положение на поле в виде О');
		renderer.render();
		log('Чтобы начать игру наберите game.run() и нажмите Enter');
	}
};

game.init();


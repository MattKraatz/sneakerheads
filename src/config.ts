import { BootScene } from './scenes/boot-scene';
import { GameScene } from './scenes/game-scene';

export const GameConfig: Phaser.Types.Core.GameConfig = {
	title: 'Sneaker Heads',
	url: 'https://github.com/MattKraatz/global-game-jam-2021',
	version: '0.1',
	width: 320,
	height: 240,
	zoom: 3,
	type: Phaser.AUTO,
	parent: 'game',
	scene: [BootScene, GameScene],
	physics: {
		default: 'arcade',
		arcade: {
			debug: false
		}
	},
	input: {
		keyboard: true
	},
	backgroundColor: '#3A99D9',
	render: { pixelArt: true, antialias: false }
};

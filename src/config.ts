import { BootScene } from './scenes/boot-scene';
import { DeathScene } from './scenes/death-scene';
import { GameScene } from './scenes/game-scene';
import { StartScene } from './scenes/start-scene';
import { WinScene } from './scenes/win-scene';

export const GameConfig: Phaser.Types.Core.GameConfig = {
	title: 'Sneakerheads',
	url: 'https://github.com/MattKraatz/sneakerheads',
	version: '0.1',
	width: 320,
	height: 240,
	zoom: 2,
	type: Phaser.AUTO,
	parent: 'game',
	scene: [StartScene, BootScene, GameScene, DeathScene, WinScene],
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

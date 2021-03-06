import { AnimationHelper } from '../helpers/animation-helper';

export class DeathScene extends Phaser.Scene {
	private canContinue: boolean = false;

	constructor() {
		super({
			key: 'DeathScene'
		});
	}

	create(): void {
		const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
		const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
		this.add.text(screenCenterX, screenCenterY - 20, 'GAME OVER', { fontSize: '32px' }).setOrigin(0.5);
		this.add.text(screenCenterX, screenCenterY + 10, 'Press any key to reset').setOrigin(0.5);

		this.time.delayedCall(3000, () => this.canContinue = true);
		this.input.keyboard.on('keydown', () => {
			if (this.canContinue) {
				this.startScene();
			}
		});
	}

	preload(): void {
		this.cameras.main.setBackgroundColor(0x000000);
	}

	update(): void { }

	private startScene() {
		this.scene.start('StartScene');
	}
}

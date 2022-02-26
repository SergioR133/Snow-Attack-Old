/** @type {import("../typings/phaser")} */

import 'phaser';
import config from './config/config';
import MainScene from './scenes/MainScene';
import SnowBallFightScene from './scenes/SnowBallFightScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);

    this.scene.add('MainScene', MainScene)
    this.scene.add('SnowBallFightScene', SnowBallFightScene)

    this.scene.start('MainScene')
  }
}
// Create new instance of game

window.sizeChanged = () => {
  if (window.game.isBooted) {
    setTimeout(() => {
      // window.game.scale.resize(window.innerWidth, window.innerHeight);
      window.game.canvas.setAttribute(
        'style',
        `display: block; width: ${window.innerWidth}px; height: ${window.innerHeight}px;`,
      );
    }, 100);
  }
};
window.onresize = () => window.sizeChanged();

window.onload = function () {
  window.game = new Game();
}

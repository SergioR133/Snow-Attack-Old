import 'phaser';

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, spriteKey) {
    super(scene, x, y, spriteKey);
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.world.enable(this)
    this.facing = {
      left: false,
      right: false,
      up: false,
      down: false,
      lastFacing: ''
    }
  }

  updateMovement(cursors) {
    if (cursors.left.isDown) {
      this.setVelocityX(-150);
      this.facing.left = true;
      this.facing.right = false;
      this.facing.lastFacing = 'left';
      this.play('runLeft', true)
    } else if (cursors.right.isDown) {
      this.setVelocityX(150);
      this.facing.right = true;
      this.facing.left = false;
      this.facing.lastFacing = 'right';
      this.play('runRight', true)
    } else if (cursors.up.isDown) {
      this.setVelocityY(-150);
      this.facing.up = true;
      this.facing.down = false;
      this.facing.lastFacing = 'up';
      this.play('runUp', true)
    } else if (cursors.down.isDown) {
      this.setVelocityY(150)
      this.facing.down = true;
      this.facing.up = false;
      this.facing.lastFacing = 'down';
      this.play('runDown', true)
    } else {
      if (this.facing.lastFacing === 'left') {
        this.setVelocityX(0);
        this.setVelocityY(0);
        this.play('idleLeft', true)
      }
      if (this.facing.lastFacing === 'right') {
        this.setVelocityX(0);
        this.setVelocityY(0);
        this.play('idleRight', true)
      }
      if (this.facing.lastFacing === 'up') {
        this.setVelocityX(0);
        this.setVelocityY(0);
        this.play('idleUp', true)
      }
      if (this.facing.lastFacing === 'down') {
        this.setVelocityX(0);
        this.setVelocityY(0);
        this.play('idleDown', true)
      }
    }
  }
  
  update(cursors) {
    this.updateMovement(cursors)
  }
}

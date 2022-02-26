import 'phaser';
import Phaser from 'phaser';

export default class LoadingScene extends Phaser.Scene {
    constructor() {
        super('LoadingScene');
    }

    preload() {

    }
    
    create() {
        console.log('Loading Scene was created!')

    }
    
    update(time, delta) {
        // << DO UPDATE LOGIC HERE >>
    }
}
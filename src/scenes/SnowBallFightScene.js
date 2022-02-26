import 'phaser';
import Phaser from 'phaser';
import Player from '../entity/Player';

export default class SnowBallFightScene extends Phaser.Scene {
    constructor() {
        super('SnowBallFightScene');
    }

    preload() {
        this.load.spritesheet('Alex', 'assets/spriteSheets/AlexSpritesheet.png', {
            frameWidth: 16,
            frameHeight: 32,
        })

        this.load.tilemapTiledJSON(
            'map',
            'assets/tilemaps/json/SnowBallFightMap.json'
        )

        this.load.image('fence', 'assets/tilemaps/tiles/fence.png');
        this.load.image('house1', 'assets/tilemaps/tiles/house1.png');
        this.load.image('house2', 'assets/tilemaps/tiles/house2.png');
        this.load.image('lamp-post', 'assets/tilemaps/tiles/lamp-post.png');
        this.load.image('main-tree', 'assets/tilemaps/tiles/main-tree.png');
        this.load.image('path-tilemap', 'assets/tilemaps/tiles/path-tilemap.png');
        this.load.image('small-tree', 'assets/tilemaps/tiles/small-tree.png');
        this.load.image('snowman1', 'assets/tilemaps/tiles/snowman1.png');
    }
    
    create() {
        const scene = this;

        let map = this.make.tilemap({ key: 'map'})    

        const floorTiles = map.addTilesetImage('path-tilemap', 'path-tilemap');
        const fenceTiles = map.addTilesetImage('fence', 'fence');
        const bigTreeTiles = map.addTilesetImage('main-tree', 'main-tree');
        const smallTreeTiles = map.addTilesetImage('small-tree', 'small-tree');
        const HouseOneTiles = map.addTilesetImage('house1', 'house1');
        const HouseTwoTiles = map.addTilesetImage('house2', 'house2');
        const lampPostTiles = map.addTilesetImage('lamp-post', 'lamp-post');
        const snowmanTiles = map.addTilesetImage('snowman1', 'snowman1');

        const floor = map.createDynamicLayer( 'Flooring', floorTiles, 0, 0)
        const fence = map.createDynamicLayer( 'Fence', fenceTiles, 0, 0)
        const bigTrees = map.createDynamicLayer( 'Big Tree', bigTreeTiles, 0, 0)
        const smallTrees = map.createDynamicLayer( 'Small Trees', smallTreeTiles, 0, 0)
        const houseNumOne = map.createDynamicLayer( 'House1', HouseOneTiles, 0, 0)
        const houseNumTwo = map.createDynamicLayer( 'House2', HouseTwoTiles, 0, 0)
        const lampPosts = map.createDynamicLayer( 'Lamp Post', lampPostTiles, 0, 0)
        const snowmen = map.createDynamicLayer( 'Snowman', snowmanTiles, 0, 0)

        fence.setCollisionByProperty({ collides: true })
        bigTrees.setCollisionByProperty({ collides: true })
        smallTrees.setCollisionByProperty({ collides: true })
        houseNumOne.setCollisionByProperty({ collides: true })
        houseNumTwo.setCollisionByProperty({ collides: true })
        lampPosts.setCollisionByProperty({ collides: true })
        snowmen.setCollisionByProperty({ collides: true })

        this.player = new Player(this, 20, 200, 'Alex').setScale(1)

        this.physics.add.collider(this.player, fence);
        this.physics.add.collider(this.player, bigTrees);
        this.physics.add.collider(this.player, smallTrees);
        this.physics.add.collider(this.player, houseNumOne);
        this.physics.add.collider(this.player, houseNumTwo);
        this.physics.add.collider(this.player, lampPosts);
        this.physics.add.collider(this.player, snowmen);

        this.cursors = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
          });

        this.createAnimations(); 

        this.cameras.main.startFollow(this.player, true, 0.08, 0.08)
        this.cameras.main.setZoom(4)

    }    
    
    createAnimations() {
        this.anims.create({
          key: 'runRight',
          frames: this.anims.generateFrameNumbers('Alex', { start: 38, end: 42 }),
          frameRate: 10,
          repeat: -1,
        });
        this.anims.create({
            key: 'runLeft',
            frames: this.anims.generateFrameNumbers('Alex', { start: 49, end: 54 }),
            frameRate: 10,
            repeat: -1,
          });
          this.anims.create({
            key: 'runUp',
            frames: this.anims.generateFrameNumbers('Alex', { start: 43, end: 48 }),
            frameRate: 10,
            repeat: -1,
          });
          this.anims.create({
            key: 'runDown',
            frames: this.anims.generateFrameNumbers('Alex', { start: 55, end: 60 }),
            frameRate: 10,
            repeat: -1,
          });
          this.anims.create({
            key: 'idleRight',
            frames: [{ key: 'Alex', frame: 0 }],
            frameRate: 10,
          });
          this.anims.create({
            key: 'idleLeft',
            frames: [{ key: 'Alex', frame: 2 }],
            frameRate: 10,
          });
          this.anims.create({
            key: 'idleUp',
            frames: [{ key: 'Alex', frame: 1 }],
            frameRate: 10,
          });
          this.anims.create({
            key: 'idleDown',
            frames: [{ key: 'Alex', frame: 3 }],
            frameRate: 10,
          });
      }
    
    update(time, delta) {
        this.player.update(this.cursors);
        // this.physics.arcade.collide(this.player, 'fence')
        // console.log(this.physics)
    }
}
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv', { preload: preload, create: create, update: update });

function preload() {
    
    game.load.image('background', '../images/StarBackground.png') //Background
    game.load.image('player', '../images/SpaceShip.png') //Player Character
    
}

var sprite;
var cursors;

function create() {

    // Add background
    game.add.sprite(0, 0, 'background');
    
    // Add player sprite
    player = game.add.sprite(375, game.world.height - 150, 'player');
    
    // Add physics to player
    game.physics.arcade.enable(player);
    
}

function update() {
    
    cursors = game.input.keyboard.createCursorKeys();
    
    // Movement
    if (cursors.up.isDown) {
        
        game.physics.arcade.accelerationFromRotation(player.rotation, 200, player.body.acceleration);
    
    } else {
        
        player.body.acceleration.set(0);
    
    }

    // Rotation
    if (cursors.left.isDown) {
    
        player.body.angularVelocity = -300;
    
    } else if (cursors.right.isDown) {
    
        player.body.angularVelocity = 300;
    
    } else {
        
        player.body.angularVelocity = 0;
    
    }
}


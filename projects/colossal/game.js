/*//var readline = require('readline-sync');
//var input = readline.question('What phrase would you like to encrypt?
/*
var readlineSync = require('readline-sync'),
  animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'],
  index = readlineSync.keyInSelect(animals, 'Which animal?');
console.log('Ok, ' + animals[index] + ' goes to your room.');
*/

var readlineSync = require('readline-sync');
var navigation = ["Walk", "Meditate", "Inventory", "Rest", "Exit"];
var enemies = ["Theif", "Rogue Monk", "Bengal Tiger"];
var inventory = ["Health Pot"];
var room = 20;
var position = 0;
var meditationCount = 0;
var player1 = {
    name: "",
    health: 40,
    attack: 10,
}
var playerInput = 1;
navigate();

function navigate() {
    var playerInput = readlineSync.keyInSelect(navigation, "Please select an action: ");
    console.log(playerInput);
    if (playerInput == 0) {
        walk();
    } else if (playerInput == 1) {
        meditate();
    } else if (playerInput == 2) {
        playerInventory();
    } else if (playerInput == 3) {
        rest();
    } else if (playerInput == 4) {
        exit();
    }
}


function walk() {
    meditationCount--;
    if (position == 19) {
        youWin();
    } else {
        position++;
    }
    roll = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(roll);
    if (roll == 4) {
        combat();
    } else {
        console.log("You traveled onward for 1 day");
        navigate();
    }
}

function meditate() {
    meditationCount++;
    if (meditationCount > 0) {
        console.log("You have already attempted meditation recently. You must travel before attempting to meditate again.");
        navigate();
    } else {
        var roll = Math.floor(Math.random() * (4 - 0) + 0);
        if (roll == 0) {
            console.log("Your meditations were unstable and rushed...you failed to restore any health...");
            navigate();
        } else {
            player1.health += roll;
            console.log("Your meditations were serene and productive...gain " + roll + " HP!");
        }
    }
    navigate();
}

function fightWin(newEnemy) {
    if (newEnemy.health < 0) {
        var roll = Math.floor(Math.random() * (2 - 1) + 1);
        player1.attack += roll;
        console.log("CONGRATULATIONS! You've defeated the enemy. Through your struggles you have honed your skills to increase your attack damage by " + roll + ". You now have " + player1.attack + " attack damage!");
    }
}

function fight(newEnemy) {
    newEnemy.health -= player1.attack;
    console.log("You attack " + newEnemy.name + " for " + player1.attack + " DMG!");
    player1.health -= newEnemy.attack;
    console.log("The enemy has counterattacked for " + newEnemy.attack + " DMG!");
    console.log("Your health is " + player1.health + " and the enemies health is " + newEnemy.health);
}



function playerInventory() {
    //var playerInput = readlineSync.keyInSelect(inventory, "Please select an action: ");
    //console.log(playerInput);
    console.log(inventory.toString());
}

function combat() {
    var actions = ["Run", "Attack"];
    var rollName = Math.floor(Math.random() * (2 - 0) + 0);
    var rollAttack = Math.floor(Math.random() * (15 - 5) + 5);
    var rollHealth = Math.floor(Math.random() * (35 - 2) + 2);
    var name = enemies[rollName];
    var newEnemy = new enemy(name, rollAttack, rollHealth)
    console.log("You have been attacked by a " + newEnemy.name + "!");
    console.log("It has " + newEnemy.health + " HP, and " + newEnemy.attack + " attack DMG!");
    if (newEnemy.health > 0) {
        var playerInput = readlineSync.keyInSelect(actions, "Please select an action: ");
        if (playerInput == 0) {
            function tryRun() {
                var roll = Math.floor(Math.random() * (1 - 0) + 0);
                if (roll == 1) {
                    console.log("You deftly escaped the encounter and resume your travels...");
                    navigate();
                } else {
                    player1.health -= 3;
                    console.log("You took 3 DMG while escaping!");
                    navigate();
                }
                playerInput = readlineSync.keyInSelect(ctions, "Please select an action: ");
            }
        } else if (playerInput == 1) {
            fight(newEnemy);
        }
        fight(newEnemy);
    }
    fightWin(newEnemy);
    navigate();

}

function rest() {
    console.log("You have " + player1.health + " HP, and " + player1.attack + " attack DMG. You are " + position + " days into your journey.");
    navigate();
}

function enemy(name, attack, health) {
    this.name = name;
    this.attack = attack;
    this.health = health;
}

function exit() {
    throw new Error("Your adventure has come to an end...");

}
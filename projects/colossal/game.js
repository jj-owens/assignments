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
var actions = ["Run", "Attack"];
var water = 30;
var position = 0;
var meditationCount = 0;
var newEnemy = {};
var waterstate = "You have " + water + " units of water left. Ration carefully."
var player1 = {
    name: "",
    health: 40,
    attack: 10,
}
if (water <= 0) {
    return died();
}
var playerInput;
player1.name = readlineSync.question("Please enter your name, wanderer: ");
console.log(player1.name + ", you have been raised in the small village of Kandu- a remote refuge of the last pactitioners of the lost art of Yongli Woquan kung fu. You are one of very few males born to this village, and it is imperitive you complete your right of passage and take your rightful place as a warrior of the Kandu. Times are hard, and every able bodied man and woman are desperately needed for the survival of your village. You must not fail! Your test shall be to traverse the valley of trials, a place traveled by dangerous foes and with limited resources. It will take 20 days of walking to reach the other side of the valley and complete your trial.")
var start = readlineSync.keyInYN("Are you ready to continue?");
navigate();

function navigate() {
    var playerInput = readlineSync.keyInSelect(navigation, "Please select an action: ");
    console.log(playerInput);
    if (playerInput == 0) {
        return walk();
    } else if (playerInput == 1) {
        return meditate();
    } else if (playerInput == 2) {
        return playerInventory();
    } else if (playerInput == 3) {
        return rest();
    } else if (playerInput == 4) {
        return exit();
    }
}

function walk() {
    meditationCount--;
    if (position == 19) {
        return winGame();
    } else {
        position++;
        water--;
    }
    roll = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(roll);
    if (roll == 4) {
        return combat();
    } else {
        console.log("You traveled onward for 1 day and your remaining units of water are " + water);
        return navigate();
    }
}

function meditate() {
    meditationCount += 2;
    if (meditationCount > 1) {
        console.log("You have already attempted meditation too recently. You must travel before attempting to meditate again.");
        return navigate();
    } else {
        var roll = Math.floor(Math.random() * (4 - 0) + 0);
        if (roll == 0) {
            console.log("Your meditations were unstable and rushed...you failed to restore any health...");
            return navigate();
        } else {
            player1.health += roll;
            console.log("Your meditations were serene and productive...gain " + roll + " HP!");
        }
    }
    return navigate();
}

function fight(newEnemy) {
    newEnemy.health -= player1.attack;
    console.log("You attack " + newEnemy.name + " for " + player1.attack + " DMG!");
    player1.health -= newEnemy.attack;
    console.log("The enemy has counterattacked for " + newEnemy.attack + " DMG!");
    console.log("Your health is " + player1.health + " and the enemies health is " + newEnemy.health);
}

function fightWin(newEnemy) {
    var roll = Math.floor(Math.random() * (3 - 1) + 1);
    var roll2 = Math.floor(Math.random() * (4 - 0) + 0);
    player1.attack += roll;
    console.log("CONGRATULATIONS! You've defeated the enemy. Through your struggles you have honed your skills to increase your attack damage by " + roll + ". You now have " + player1.attack + " attack damage!");
    water--;
    if (roll2 == 3) {
        inventory.push("Water Flask");
        console.log("You received 1 water flask worth 3 units of water! Use in inventory to add to total water reserves.");
    }
    return navigate();
}

function playerInventory() {
    console.log(inventory);
    var playerInput = readlineSync.question("Please type the name of the item you wish to use, or exit to return: ");
    console.log(playerInput);
    if (playerInput === "health pot") {
        player1.health = player1.health + 5;
        console.log("5 HP has been added to your health!");
    } else if (playerInput === "water flask") {
        water = water + 3;
        console.log("3 units of water have been added to your water reserves!");
    } else {
        console.log("Sorry, invalid entry");
    }
    return navigate();
}

function combat() {
    var actions = ["Run", "Attack"];
    var rollName = Math.floor(Math.random() * (2 - 0) + 0);
    var rollAttack = Math.floor(Math.random() * (15 - 5) + 5);
    var rollHealth = Math.floor(Math.random() * (35 - 2) + 2);
    var name = enemies[rollName];
    var newEnemy = new enemy(name, rollAttack, rollHealth);
    console.log("You have been attacked by a " + newEnemy.name + "!");
    console.log("It has " + newEnemy.health + " HP, and " + newEnemy.attack + " attack DMG!");
    console.log(newEnemy);
    var playerInput = readlineSync.keyInSelect(actions, "Please select an action: ");
    while (player1.health >= 0 && newEnemy.health >= 0) {
        if (playerInput == 0) {
            return tryRun();

            function tryRun() {
                var roll = Math.floor(Math.random() * (2 - 1) + 1);
                if (roll == 2) {
                    console.log("You deftly escaped the encounter and resume your travels...");
                    water--;
                    return navigate();
                } else if (roll < 2) {
                    player1.health -= 4;
                    console.log("You took 4 DMG while escaping!");
                    water--;
                    return navigate();
                }
                //                playerInput = readlineSync.keyInSelect(actions, "Please select an action: ");
            }
        } else if (playerInput == 1) {
            fight(newEnemy);

            function fight(newEnemy) {
                newEnemy.health -= player1.attack;
                console.log("You attack " + newEnemy.name + " for " + player1.attack + " DMG!");
                player1.health -= newEnemy.attack;
                console.log("The enemy has counterattacked for " + newEnemy.attack + " DMG!");
                console.log("Your health is " + player1.health + " and the enemies health is " + newEnemy.health);
                playerInput = readlineSync.keyInSelect(actions, "Please select an action: ");
            }

        }
    }
    if (player1.health <= 0) {
        console.log("...Alas....you were not strong enough to travel through the valley. Your energy has returned to the realm from which it came...go in peace.");
        return exit();
    } else if (newEnemy.health <= 0) {
        return fightWin();
    }

}

function rest() {
    water - 2;
    console.log("You have " + player1.health + " HP, and " + player1.attack + " attack DMG. You are " + position + " days into your journey.");
    console.log("You have " + water + " water left. Ration carefully.");
    return navigate();
}

function enemy(name, attack, health) {
    this.name = name;
    this.attack = attack;
    this.health = health;
}

function exit() {
    return console.log("Game Over");

}

function winGame() {
    console.log("You have traveled for many days through the valley of trails, and have overcome many obsticles. Your meditations have brought new enlightenment and endowed you with new power and purpose to take your rightful place in your village. Your training is now complete.");
    console.log("CONGRATULATIONS, you have successfully completed The Wanderer's Trials! If you like this software, buy it! Support game developers. Don't do drugs.");
    return exit();
}

function died() {
    console.log("Alas...you have died. Your energy has returned to the realm from which it came...go in peace.")
    return exit();
}
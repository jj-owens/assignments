var player = {
    name: "name",
    totalCoins: 0,
    status: "small",
    star: false,
    gameActive: true,
    setName: function (namePicked) {
        this.name += namePicked;
    },
    gotHit: function (hit) {
        if (hit == true && this.status == "small") {
            this.status += "dead, ";
            this.gameActive = false;
        } else {
            this.status = "small";
        }
    },
    gotPowerup: function (item) {
        if (item == true) {
            this.status += "Big, ";
            return true;
        }
    },
    addCoin: function () {
        this.totalCoins++;
    },
    print: function () {
        console.log("Name: " + this.name);
        console.log("Status: " + this.status);
        console.log("Star: " + this.star);
        console.log("Total Coins: " + this.totalCoins);
    },
    randomRange: function () {
        var roll = Math.floor(Math.random() * (3 - 0) + 0);
        if (roll == 0) {
            this.gotHit(true);
        } else if (roll == 1) {
            this.gotPowerup(true);
        } else if (roll == 2) {
            this.addCoin();
        }
        this.print();
    }
}



player.randomRange();
player.randomRange();
player.randomRange();
var accountbalance = 4000;
var phonestotal = 0;
var accessoriestotal = 0;
const taxrate = .07;
const phoneprice = 899.99;
const accessoryprice = 19.99;


function calcpurchase(item, taxrate){
    var price = item * taxrate + item;
    return price;
}

function buyphone(){
    console.log("You have " + "$" + accountbalance.toFixed(2) + " in your bank account.")
    var phonepricecalc = calcpurchase(phoneprice, taxrate);
    var accessorypricecalc = calcpurchase(accessoryprice, taxrate);
    if (accountbalance - phonepricecalc > 0){
        phonestotal += 1;
        accountbalance -= phonepricecalc;
        console.log("Added 1 phone to your total purchase.")
        return buyphone();
    } else if (accountbalance - accessorypricecalc > 0) {
        accessoriestotal += 1;
        accountbalance -= accessorypricecalc;
        console.log("Added 1 accessory to y our total purchase.")
        return buyphone();
    } else {
        console.log("Your account balance is $" + accountbalance.toFixed(2) + ". You have purchased " + phonestotal + " phones, and " + accessoriestotal + " accessories!");
    }
}

buyphone();

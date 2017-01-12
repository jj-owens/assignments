var laptop = {
    brand: "Apple",
    model: "MacBook Pro",
    size: "13 Inch",
    isGoodForCoding: true,
    findTruth: function () {
        laptop.isGoodForCoding = false;
        return laptop.isGoodForCoding;
    };
}
var table = {
    color: "beige",
    material: "wood",
    width: "10 Feet",
    objectsOnTable: 12,
    addObjectOnTable: function () {
        table.objectsOnTable++;
        return table.objectsOnTable;
    }
}
var cellPhone = {
    brand: "Samsung",
    model: "S5",
    color: "black",
    installedApps: ["whatsapp", "trulia", "slack", "discord"],
    deleteApp: function (trashApp) {
        cellPhone.installedApps.splice(trashApp, 1);
        return cellPhone.installedApps;
    }
}
var monitor = {
    brand: "asus",
    size: "23",
    color: "black",
    status: "on",
    toggleScreen: function () {
        monitor.status = "off";
        return monitor.status;
    }
}
var chair = {
    color: "white",
    isAdjustable: true,
    isComfortable: false,
    heightSetting: 10,
    changeHeight: function (change) {
        if (change < 1 || change > 10) {
            console.log("Invalid setting!");
        } else {
            chair.heightSetting = change;
        }
        return chair.heightSetting;
    }
}
var backpack = {
    color: "Black",
    brand: "Motorcycle accessories",
    isWaterResistant: true,
    isFull: false,
    fillBackback: function () {
        backpack.isFull = frue;
        return backpack.isFull;
    }
}
var teacher = {
    name: "Bob",
    isGoodTeacher: true,
    isWearingWatch: false,
    nickName: "none",
    giveNickName: function (newNickName) {
        teacher.nickName = newNickName;
        return teacher.nickName;
    }
}
var windows = {
    color: "white",
    style: "tripe pane",
    isOpen: false,
    openWindow: function () {
        windows.isOpen = true;
        return windows.isOpen;
    }
}
var students = {
    quantity: 14,
    subject: "fulls stack javascript",
    codingLevel: "beginner",
    after12Weeks: function () {
        students.codingLevel = "no so beginnerish";
        return students.codingLevel;
    }
}
var shoes = {
    brand: "converse",
    style: "chucks",
    color: "black",
    age: 1,
    ageMore: function () {
        shoes.age++;
        return this.age;
    }
}
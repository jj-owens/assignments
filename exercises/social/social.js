var vanityProfile = {
    firstName: "Jay",
    lastName: "Traverse",
    age: 28,
    hobbies: ["guitar", "gaming"],
    girlfriends: [
        {
            name: "Angie",
            age: 22,
            cute: true,
            birthday: "February 28th",
            favoriteDates: [
                {
                    location: "Dave n Busters",
                    time: 1030,
                    isAlcohol: true,
                },
                {
                    location: "Brio",
                    time: 830,
                    isAlcohol: true,
                }
            ]
        },
        {
            name: "Chrissy",
            age: 26,
            cute: true,
            birthday: "September 21st",
            favoriteDates: [
                {
                    location: "Shooting Range",
                    time: 330,
                    isAlcohol: false
                },
                {
                    location: "Wild Animal Park",
                    time: 130,
                    isAlcohol: false
                }]
        },
        {
            name: "Tamara",
            age: 31,
            cute: false,
            birthday: "March 3rd",
            favoriteDates: [
                {
                    location: "Area 31",
                    time: 1130,
                    isAlcohol: true
                },
                {
                    location: "Bedroom",
                    time: 100,
                    isAlcohol: true
                }]

        }
        ]
};


var jaysLadies = [];
for (var i = 0; i < vanityProfile.girlfriends.length; i++) {
    jaysLadies.push(vanityProfile.girlfriends[i].name);
}
console.log("Jay's ladies are " + jaysLadies[0].toString() + ", " + jaysLadies[1].toString() + "," + " and " + jaysLadies[2].toString() + ".");
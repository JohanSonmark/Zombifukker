var zombieFakker = {
    beginning: {
        title: "One quite night...",
        img: "Images/cottage.jpg",
        bread: "...you sit in your favourite chair at the cozy fireplace you just lit.<br>" +
            "Suddenly you hear wierd scratching noices on the walls. You go to a window to see<br>" +
            "who or what is making the sound. What then meets your eyes makes your blood run cold.<br>",
        choice: "Make a choice",
        options: [{text:"Next", to:"next"},{text:"Skip", to:"rucksack"}]
    },
    next: {
        title: "Zombies!",
        img: "Images/ZombieSwarm.jpg",
        bread: "Countless movies, books, series and videogames have been made of the dead walkers outside.<br>"+
            "They are countless and seems to try to get inside your cabin. Without hesitagion you<br>" +
            "start the radio to check if there has gone out an imergency call from the government.<br>" +
            "There is one ongoing message that says: 'A pandemic has broken loose turning people into<br>" +
            "flesheating zombies. It contaiges by blood. If you are not bitten head to...'. Location and<br>" +
            "instructions to find the different safe zones follows. You quickly start to pack your rucksack<br>"+
            "as you listens to the radio.",
        choice: "Make a choice",
        options: [{text:"Next", to:"rucksack"}]
    },
    rucksack: {
        title: "Rucksack",
        img: "Images/Rucksack.jpg",
        bread: "Of all items you have gathered from the cabin only a few will fit the bag so choose wisely.",
        choice: "Make a choice",
        options: [{text:"Next", to:"boom"}
        ]
    }
};

var stuffs = {
    woodAxe: {
        title: "Wood axe",
        img: "Images/WoodAxe.jpg",
        bread: "An axe used for shopping wood but its exellent at shopping zombies too you bet.<br><br>" +
            "+3 attack, +1 survival",
        choice: "Do you want to add it to your backpack?",
        options: [{text:"Yes", to:"yes"}]
    }
};
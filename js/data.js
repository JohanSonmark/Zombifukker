var zombieFakker = {
    beginning: {
        title: "One quite night...",
        img: "Images/cottage.jpg",
        bread: "...you sit in your favourite chair at the cozy fireplace you just lit.",
        options: [{text:"Next", to:"next"},{text:"Skip", to:"rucksack"}]
    },
    next: {
        title: "Zombies!",
        img: "Images/ZombieSwarm.jpg",
        bread: "Countless movies, books, series and videogames have been made of the dead walkers outside.",
        options: [{text:"Next", to:"rucksack"}]
    },
    rucksack: {
        title: "Rucksack",
        img: "Images/Rucksack.jpg",
        bread: "Of all items you have gathered from the cabin only a few will fit the bag so choose wisely.",
        options: [{text:"Start over", to:"beginning"}]
    }
};
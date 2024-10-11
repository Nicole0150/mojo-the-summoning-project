const {db, Model, DataTypes} = require("../db/config");

let User = db.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    username: DataTypes.STRING,
});

let Deck = db.define("Deck", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    name: DataTypes.STRING,
    xp: DataTypes.INTEGER
});

let Card = db.define("Card", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    name: DataTypes.STRING,
    mojo: DataTypes.INTEGER,
    stamina: DataTypes.INTEGER,
    imgUrl: DataTypes.STRING,
});

let Attack = db.define("Attack", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    title: DataTypes.STRING,
    mojoCost: DataTypes.INTEGER,
    staminaCost: DataTypes.INTEGER,
});

module.exports = {
    User,
    Deck,
    Card,
    Attack,
}
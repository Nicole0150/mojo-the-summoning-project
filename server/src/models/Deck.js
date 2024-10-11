const {db, Model, DataTypes} = require("../db/config");

let Deck = db.define("Deck", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    name: DataTypes.STRING,
    xp: DataTypes.INTEGER
});

module.exports = {
    Deck,
}
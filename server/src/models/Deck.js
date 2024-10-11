const {db, DataTypes} = require("../db/config");

let Deck = db.define("deck", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    name: DataTypes.STRING,
    xp: DataTypes.INTEGER
});

module.exports = {
    Deck,
};
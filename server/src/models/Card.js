const {db, DataTypes} = require("../db/config");

let Card = db.define("card", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    name: DataTypes.STRING,
    mojo: DataTypes.INTEGER,
    stamina: DataTypes.INTEGER,
    imgUrl: DataTypes.STRING,
});

module.exports = {
    Card,
};
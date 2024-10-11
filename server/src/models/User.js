const {db, DataTypes} = require("../db/config");

let User = db.define("user", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    username: DataTypes.STRING,
    allowNull: false,
});

module.exports = {
    User,
    db,
}
module.exports = function (sequelize, DataTypes) {
    var Actlist = sequelize.define("Actlist", {
        activity: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
          },
    });
    return Actlist;
}
module.exports = function (sequelize, DataTypes) {
    var Activities = sequelize.define("Activities", {
        actList_Id: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        starttime: {
            type: DataTypes.TIME,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        endtime: {
            type: DataTypes.TIME,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true,
            len: [1],
            max: 50
        },
    });

    // Associating Activities with multiple actList
    // When Activities is deleted, deleted any associated actList
    Activities.associate = function (models) {
        Activities.hasMany(models.Actlist, {
            onDelete: "cascade"
        });
    };

    // Activities must belong to a Child
    // a activity must have Child to be created
    Activities.associate = function (models) {
        Activities.belongsTo(models.Child, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Activities;
}
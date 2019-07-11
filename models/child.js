module.exports = function (sequelize, DataTypes) {
    var Child = sequelize.define("Child", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
        dob: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    });

    // Associating Child with multiple activities
    // When Child is deleted, deleted any associated activities
    Child.associate = function (models) {
        Child.hasMany(models.Activities, {
            onDelete: "cascade"
        });
    };

    // Child must belong to a User
    // a child must have User to be created
    Child.associate = function (models) {
        Child.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Child;
}
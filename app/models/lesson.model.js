module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    name: {
      type: Sequelize.STRING
    },
    startDate: {
      type: Sequelize.DATE
    },
    duration: {
      type: Sequelize.NUMBER
    }
  });
  return User;
};

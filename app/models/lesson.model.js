module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("lessons", {
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

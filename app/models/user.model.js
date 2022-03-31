module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    childName: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    phoneNumber: {
      type: Sequelize.NUMBER
    },
    countryCode: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    confirmPassword: {
      type: Sequelize.STRING
    },
    grade: {
      type: Sequelize.STRING
    }
  });

  return User;
};

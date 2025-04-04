module.exports = {
    up: async (queryInterface) => {
      return queryInterface.bulkInsert('Events', [
        { title: 'Music Festival', location: 'NYC', createdAt: new Date(), updatedAt: new Date() },
        { title: 'Tech Conference', location: 'San Francisco', createdAt: new Date(), updatedAt: new Date() }
      ]);
    },
    down: async (queryInterface) => {
      return queryInterface.bulkDelete('Events', null, {});
    }
  };
  
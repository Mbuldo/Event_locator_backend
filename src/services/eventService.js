const { Event } = require('../models');

const getAllEvents = async () => {
  return await Event.findAll();
};

const getEventById = async (id) => {
  return await Event.findByPk(id);
};

module.exports = { getAllEvents, getEventById };

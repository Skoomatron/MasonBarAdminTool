const db = require('../../DB/index.js');
const {Event} = require('../../DB/schema.js');

const postEvent = async (params) => {
  console.log('made it to models with data: ', params)
  const filter = {eventTitle: params.eventTitle};
  const update = {
    day: params.day,
    month: params.month,
    start: params.start,
    end: params.end,
    eventTitle: params.eventTitle,
    eventDescription: params.eventDescription,
  };
  const options = {upsert: true};
  try {
    await Event.findOneAndUpdate(filter, update, options)
  } catch (error) {
    return error;
  }
}

module.exports = {
  postEvent,
}
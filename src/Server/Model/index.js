const db = require('../../DB/index.js');
const {Event, Welcome, WelcomeImage} = require('../../DB/schema.js');

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

const postImage = async (params) => {
  const filter = {photoURL: params.photoURL}
  const update = {
    photoURL: params.photoURL,
    photoCaption: params.photoCaption,
  }
  const options = {upsert: true};
  try {
    await WelcomeImage.findOneAndUpdate(filter, update, options)
  } catch (error) {
    return error;
  }
}

const postWelcome = async (params) => {
  const filter = {_id: '62d691ee1de061f4d763d28e'}
  const update = {
    welcomeMessage: params.welcomeMessage
  }
  const options = {upsert: true};
  try {
    await Welcome.findOneAndUpdate(filter, update, options)
  } catch (error) {
    return error;
  }
}

module.exports = {
  postEvent,
  postImage,
  postWelcome,
}
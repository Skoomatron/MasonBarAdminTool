const db = require('../../DB/index.js');
const {Event, Welcome, WelcomeImage, Menu} = require('../../DB/schema.js');

const postEvent = async (params) => {
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

const postMenu = async (params) => {
  const filter = {name: params.name}
  const update = {
    name: params.name,
    category: params.category,
    description: params.description,
    price: params.price
  }
  const options = {upsert: true};
  try {
    await Menu.findOneAndUpdate(filter, update, options)
  } catch (error) {
    return error;
  }
}

const findMenu = async (params) => {
  try {
    return await Menu.find({})
  } catch (error) {
    return error;
  }
}

const findEvent = async (params) => {
  try {
    return await Event.find({})
  } catch (error) {
    return error;
  }
}

const findImage = async (params) => {
  try {
    return await WelcomeImage.find({})
  } catch (error) {
    return error;
  }
}

const findWelcome = async (params) => {
  try {
    return await Welcome.find({})
  } catch (error) {
    return error;
  }
}

const removeEventData = async (params) => {
  const collection = params.key;
  const payload = params._id;
  console.log(collection, payload, 'model')
  try {
    Event.find({_id: payload}).findOneAndDelete({_id: payload});
  } catch (error) {
    return error;
  }
}

module.exports = {
  postEvent,
  postImage,
  postWelcome,
  postMenu,
  findMenu,
  findWelcome,
  findImage,
  findEvent,
  removeEventData
}
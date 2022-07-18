const db = require('../../DB/index.js');
const {Information} = require('../../DB/schema.js');

const postWelcome = async (params) => {
  console.log('made it to models with data: ', params)
  const filter = {test: params.test};
  const update = {text: params.test};
  const options = {upsert: true};
  try {
    await Information.findOneAndUpdate(filter, update, options)
  } catch (error) {
    return error;
  }
}

module.exports = {
  postWelcome,
}
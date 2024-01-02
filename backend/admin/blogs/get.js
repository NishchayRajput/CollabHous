const models = {
  blogs: require('../../blogs/models/blogs'),
  commune: require('../../blogs/models/commune'),
  hero: require('../../blogs/models/hero'),
  interaction: require('../../blogs/models/interaction'),
  notification: require('../../blogs/models/notification'),
  userInfo: require('../../ecommerce/models/userInfo'),
};

async function getData(model, conditions = {}, sort = { createdAt: -1 }) {
  try {
      const data = await model.find(conditions).sort(sort);
      return data;
  } catch (error) {
      console.error(`Error fetching data from ${model.modelName}: ${error}`);
      throw new Error(`Error fetching data from ${model.modelName}`);
  }
}

async function getIndividualData(model, id) {
  try {
      const data = await model.findById(id);
      return data;
  } catch (error) {
      console.error(`Error fetching individual data from ${model.modelName}: ${error}`);
      throw new Error(`Error fetching individual data from ${model.modelName}`);
  }
}

async function handleRequestAsync(handler, req, res) {
  try {
      await handler(req, res);
  } catch (error) {
      console.error(`Error handling request: ${error.message}`);
      res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getBlogs(req, res) {
  const data = await models.blogs.find({}).populate({path : 'user_id', select : 'name email _id'}).exec();
  res.send(data);
}

async function getCommune(req, res) {
  const data = await getData(models.commune);
  res.send(data);
}

async function getHero(req, res) {
  const data = await getData(models.hero);
  res.send(data);
}

async function getInteraction(req, res) {
  const data = await getData(models.interaction);
  res.send(data);
}

async function getNotification(req, res) {
  const data = await getData(models.notification);
  res.send(data);
}

async function getUserinfo(req, res) {
  const data = await getData(models.userInfo);
  res.send(data);
}

async function getIndiBlogs(req, res) {
  const id = req.params.id;
  const data = await getIndividualData(models.blogs, id);
  res.send(data);
}

async function getIndiCommune(req, res) {
  const id = req.params.id;
  const data = await getIndividualData(models.commune, id);
  res.send(data);
}

async function getIndiInteraction(req, res) {
  const id = req.params.id;
  const data = await getIndividualData(models.interaction, id);
  res.send(data);
}

async function getIndiHero(req, res) {
  const id = req.params.id;
  const data = await getIndividualData(models.hero, id);
  res.send(data);
}

async function getIndiNotification(req, res) {
  const id = req.params.id;
  const data = await getIndividualData(models.notification, id);
  res.send(data);
}

async function getIndiUserinfo(req, res) {
  const id = req.params.id;
  const data = await getIndividualData(models.userInfo, id);
  res.send(data);
}

module.exports = {
  getBlogs,
  getCommune,
  getHero,
  getInteraction,
  getNotification,
  getUserinfo,
  getIndiBlogs,
  getIndiCommune,
  getIndiInteraction,
  getIndiHero,
  getIndiNotification,
  getIndiUserinfo,
};

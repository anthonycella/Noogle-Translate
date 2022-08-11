const Contributions = require('../../db/models/Contribution');

function getAllTopics(callback) {
  // Contributions.deleteMany({ topic: 'Define a function', language: 'c++' }, (error, result) => {
  //   if (error) {
  //     console.log(error);
  //   }
  //   console.log(result);
  // });
  Contributions.find({}, 'topic').distinct('topic', (error, topics) => {
    callback(error, topics);
  });
}

function addContribution(entry, callback) {
  Contributions.findOneAndUpdate(entry, entry, { upsert: true }, (error, result) => {
    callback(error, result);
  });
}

function getContributions(topic, callback) {
  Contributions.find({ topic }, ['language', 'code'], (error, result) => {
    callback(error, result);
  });
}

module.exports = {
  getAllTopics,
  addContribution,
  getContributions,
};

const Contributions = require('../../db/models/Contribution');

function getAllTopics(callback) {
  Contributions.find({}, 'topic').distinct('topic', (error, topics) => {
    callback(error, topics);
  });
}

module.exports = {
  getAllTopics,
};

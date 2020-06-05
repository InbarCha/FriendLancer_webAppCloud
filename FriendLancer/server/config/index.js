const path = require('path');
const _ = require('lodash');

/**
 * Configuration settings for DB and application
 */
const all = {
  // secrets used to encrypt session data
  secrets: {
    // this secret is used to encrypt express session logs as well as user password
    session: 'sample-secret'
  },
  // Mongo Db settings
  mongo: {
    // Connection data - Atlas
    connection: {
      useMongoClient: true,
      uri: 'mongodb://cloudUser:23951001@friendlancermeancloud-shard-00-00-yhr6v.mongodb.net:27017,friendlancermeancloud-shard-00-01-yhr6v.mongodb.net:27017,friendlancermeancloud-shard-00-02-yhr6v.mongodb.net:27017/friendLancer?ssl=true&replicaSet=FriendLancerMEANCloud-shard-0&authSource=admin&retryWrites=true&w=majority'
    },
    // Mongo DB Options
    options: {
      db: {
        safe: true
      }
    }
  },
  // Application Roles
  userRoles: ['guest', 'user', 'admin'],
};

// Export all settings
module.exports = _.merge(
  all
);

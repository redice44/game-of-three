var ContentHandler = require('./content');

function Routes(app) {
  var contentHandler = new ContentHandler();
  app.get('/', contentHandler.start);
}

module.exports = Routes;

var ContentHandler = require('./content');

function Routes(app) {
  var contentHandler = new ContentHandler();
  app.get('/', contentHandler.start);

  app.get('/mode', contentHandler.mode);
}

module.exports = Routes;

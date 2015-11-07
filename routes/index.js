var ContentHandler = require('./content');

function Routes(app) {
  var contentHandler = new ContentHandler();
  app.get('/', contentHandler.start);

  app.get('/mode', contentHandler.mode);

  app.get('/classic', contentHandler.classic);
}

module.exports = Routes;

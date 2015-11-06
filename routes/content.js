function ContentHanlder() {
  this.start = function(req, res, next) {
    return res.render('start');
  };

  this.mode = function(req, res, next) {
    return res.render('mode');
  };
}

module.exports = ContentHanlder;

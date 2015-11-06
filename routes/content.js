function ContentHanlder() {
  this.start = function(req, res, next) {
    return res.render('start');
  };
}

module.exports = ContentHanlder;

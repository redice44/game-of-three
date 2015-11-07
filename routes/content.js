function ContentHanlder() {
  this.start = function(req, res, next) {
    return res.render('start');
  };

  this.mode = function(req, res, next) {
    return res.render('mode');
  };

  this.classic = function(req, res, next) {
    return res.render('classic', {'test': 'testing'});
  };
}

module.exports = ContentHanlder;

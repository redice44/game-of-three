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

  this.victory = function(req, res, next) {
    var time = req.query.time;
    var number = req.query.number;
    var errors = req.query.errors || 0;
    return res.render('victory', {
      'time': time,
      'number': number,
      'errors': errors
    });
  };
}

module.exports = ContentHanlder;

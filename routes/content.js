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
    var timer = req.query.time;
    var solution = req.query.solution.split('_');
    return res.render('victory', {'time': timer, 'solution': solution});
  };
}

module.exports = ContentHanlder;

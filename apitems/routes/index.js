
/*
 * GET home page.
 */
var data = {}

exports.index = function(req, res){
  res.render('index', { title: 'AP Items' })
};
exports.items = function(req, res){
  res.render('items', { title: 'AP Items' })
};
exports.champ_chart = function(req, res){
  res.render('champ_chart', { title: 'AP Items' })
};
exports.champ_page = function(req, res){
  res.render('champ_page', {id: req.param.id, ap: req.query.ap})
};
exports.about = function(req, res){
  res.render('about', { title: 'AP Items' })
};

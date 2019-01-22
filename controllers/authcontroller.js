var exports = module.exports = {}

exports.signup = function(req,res){

	res.render('kitchen'); 

}

exports.signin = function(req,res){

	res.render('kitchen'); 

}

exports.dashboard = function(req,res){

	res.render('kitchen'); 

}

exports.logout = function(req,res){

  req.session.destroy(function(err) {
  res.redirect('/');
  });

}
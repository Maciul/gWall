var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex.table('posts').select().then(function (posts){
    res.render('gwall', {posts: posts});
  });
});

router.get('/post', function(req, res){
  res.render('post');
});

router.post('/post', function(req, res) {
  // extract values from form
    var username = req.body.username;
    var image = req.body.image;
    var rant = req.body.rant;
    knex.table('posts').insert({
        username: username,
        image: image,
        rant: rant

    }).then(function() {
      console.log('you did it');
    res.redirect('/gwall');

  }).catch(function (error) {
    next(error);
});
});
module.exports = router;

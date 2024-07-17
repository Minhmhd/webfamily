var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
 // URL: Localhost:4000/dem
router.get('/demo',(req,res) =>{
  // duong dan cua duong link tren
  res.render('demo')
})

router.get('/bo',(req,res) =>{
  // duong dan cua duong link tren
  res.render('bo')
})

router.get('/me',(req,res) =>{
  // duong dan cua duong link tren
  res.render('me')
})

router.get('/anhtrai',(req,res) =>{
  // duong dan cua duong link tren
  res.render('anhtrai')
})

router.get('/chidau',(req,res) =>{
  // duong dan cua duong link tren
  res.render('chidau')
})

router.get('/toi',(req,res) =>{
  // duong dan cua duong link tren
  res.render('toi')
})




module.exports = router;

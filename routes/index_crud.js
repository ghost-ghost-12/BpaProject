const express = require('express');
const router = express.Router();
//var app = express();
var bodyParser = require('body-parser')
const Task = require('../models/products');

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())


router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.render('crud/index', {
    tasks
  });
});

router.get('/add' ,  async (req, res) => {
  const tasks = await Task.find();
  res.render('crud/index', {
    tasks
  });
});

router.post('/add', async (req, res, next) => {
  const task = new Task(req.body);
  console.log(req.body);
  await task.save();
  res.redirect('/crud');
});


router.get('/edit/:id', async (req, res, next) => {
  const task = await Task.findById(req.params.id);
  res.render('crud/edit', { task });
});

router.post('/edit/:id', async (req, res, next) => {
  console.log(req.body)
  const { id } = req.params;
  await Task.updateOne({_id: id}, req.body);
  res.redirect('/crud');
});

router.get('/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await Task.remove({_id: id});
  res.redirect('/crud');
});

module.exports = router;

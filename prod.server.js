var express = require('express')
var config = require('./config/index')

var port = process.env.PORT || config.build.port

var app = express()

var router = express.Router()

router.get('/', function (req, res, next) {
  req.url = '/index.html'
  next()
})

app.use(router)

var appdata = require('https://raw.githubusercontent.com/yuanxianmo/Demo-master/master/data.json')
var goods = appdata.goods

var apiRoutes = express.Router()

apiRoutes.get('/goods', function (req, res) {
  res.json({
    error: 0,
    data: goods
  })
})
app.use('/api', apiRoutes)

app.use(express.static('./dist'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})

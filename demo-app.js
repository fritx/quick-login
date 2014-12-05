var app = require('express')()
var _ = require('lodash')

app.use(require('./')(function checkAuth(data, next){
  next(null, data.name === 'fritx' &&
    data.pass === 'momo')
}))

app.get('/', function(req, res){
  res.send('Hello!')
})

app.listen(3000)

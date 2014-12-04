var app = require('express')()

app.use(require('./')(function(user, next){
  next(null, user.name === 'fritx' &&
    user.pass === 'momo1')
}))

app.get('/', function(req, res){
  res.send('Hello!')
})

app.listen(3000)

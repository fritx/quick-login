# quick-login

Quick login for express app, basic-auth only

## Usage

```js
app.use(require('./')(function(user, next){
  next(null, user.name === 'fritx' &&
    user.pass === 'momo1')
}))
```

## Todo

- onVisit/onFail page display
- beautiful dialog and ajax
- even passwordless support

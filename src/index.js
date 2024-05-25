const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router()
// get 请求
router.get('/test', (ctx, next) => {
  ctx.body = {
    code: 0,
    data: { name: '井柏然-get' }
  }
})
// post 请求
router.post('/test', (ctx, next) => {
  ctx.body = {
    code: 0,
    data: { name: '井柏然-post' }
  }
})
app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000);
/**
 * Created by Will Bean on 2017/3/6.
 */
// 'use strict';
const Koa = require('koa');
const app = new Koa();
// const views = require('koa-views');
const render = require('koa-render');
const router = require('koa-router')();
// const cors = require('koa-cors');
const routes = require('./routes');
const convert = require('koa-convert');
const bodyparser = require('koa-bodyparser')();

let port = 8889;

router.use('/', routes.routes());

app.use(convert(bodyparser));
app.use(require('koa-static')(__dirname + '/public'));
app.use(render());
app.use(router.routes());

app.listen(port);

/**
 * Created by Will Bean on 2017/3/6.
 */
'use strict';
const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const cors = require('koa-cors');
const routers = require('./routes');

let repPort = 8888;

router.use('/', routers.routes(), routers.allowedMethods());

app.use(cors());
app.use(router.routes(), router.allowedMethods());

app.listen(repPort)

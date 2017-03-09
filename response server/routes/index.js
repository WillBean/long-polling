/**
 * Created by Will Bean on 2017/3/9.
 */
const router = require('koa-router')()
const EL = require('../EventListener');
const el = new EL();

router.post('btServer',  function *(next) {// 客户端服务器请求
    let resBody = 0;
    el.sendEnsureMsg();
    yield new Promise((resolve, reject)=> {
        el.once('receive', ()=> {
            if (el.status === 'yes') {
                resBody = 200;
            } else if (el.status === 'no') {
                resBody = 204;
            }
            resolve();
        });
    });
    this.body = resBody;
    this.status = 200;
}).get('ensure',function* (next) { //向客户端推送信息
    let self = this;
    this.set("content-type","text/event-stream");
    yield new Promise((resolve, reject)=> {
        el.once('ensure', ()=> {
            console.log('Has send');
            resolve();
        });
    });
    self.body = 'data: ensure\n\n';
    this.status = 200;
}).post('sure', function*(next) { //客户端相应推送
    el.receiveEnsureMsg(this.request.body.data)
    this.status = 200;
});

module.exports = router;
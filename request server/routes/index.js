/**
 * Created by Will Bean on 2017/3/9.
 */
const router = require('koa-router')()
const rp = require('request-promise');

let resHostname = 'localhost';
let resPort = 8889;

router.get('longPolling', function* (next){
    let options = {
        uri : `http://${resHostname}:${resPort}/btServer`,
        method : 'post'
    };
    
    yield rp(options).then(data=>{
        this.status = parseInt(data);
        console.log('Finished')
    }).catch(err=>{
        console.log(`error message:${err}`)
    });
});

module.exports = router;
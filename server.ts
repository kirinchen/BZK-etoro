import http = require('http');
import { EtoroSpider, MarketCategory } from './spider/EtoroSpider';
import { PropertiesCofigLoad } from 'bzk/lib/comm/config/Config';
import { CronMarketRecorder } from './demo/CronMarketRecorder';

const port = process.env.port || 1337
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);



let a = async () => {

    await PropertiesCofigLoad.load("./myconfig/bzk.properties");
    let cmr = new CronMarketRecorder();
    cmr.register();
    /*let es: EtoroSpider = new EtoroSpider();
    await es.init();
    await es.fetchMarket(MarketCategory.commodities);*/
};

a();


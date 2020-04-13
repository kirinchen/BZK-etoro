import http = require('http');
import { EtoroSpider, MarketCategory } from './spider/EtoroSpider';
import { Config } from 'bzk';
const port = process.env.port || 1337
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);

let c: Config = new Config({});

let a = async () => {
    let es: EtoroSpider = new EtoroSpider();
    await es.init(c);
    await es.fetchMarket(MarketCategory.commodities);
};

a();


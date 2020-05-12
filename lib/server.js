"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const Config_1 = require("bzk/lib/comm/config/Config");
const CronMarketRecorder_1 = require("./demo/CronMarketRecorder");
const port = process.env.port || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);
let a = () => __awaiter(void 0, void 0, void 0, function* () {
    yield Config_1.PropertiesCofigLoad.load("./myconfig/bzk.properties");
    let cmr = new CronMarketRecorder_1.CronMarketRecorder();
    cmr.register();
    /*let es: EtoroSpider = new EtoroSpider();
    await es.init();
    await es.fetchMarket(MarketCategory.commodities);*/
});
a();
//# sourceMappingURL=server.js.map
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
const EtoroSpider_1 = require("./spider/EtoroSpider");
const Config_1 = require("bzk/lib/comm/config/Config");
const EtoroRecordService_1 = require("./record/EtoroRecordService");
const port = process.env.port || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);
let a = () => __awaiter(void 0, void 0, void 0, function* () {
    yield Config_1.PropertiesCofigLoad.load("./myconfig/bzk.properties");
    /*let cmr = new CronMarketRecorder();
    cmr.register();*/
    yield EtoroRecordService_1.EtoroRecordService.getInstance().saveByMarketCategory(EtoroSpider_1.MarketCategory.indices);
    /*let ed = EtoroDao.getInstance();
    for (let i = 0; i < 30; i++) {
        let et: MarketRow = {
            buyQuote: 1,
            maxQuoteYear: 2,
            minQuoteYear: 3 + i,
            name: "TestMarket",
            riseDay: 1,
            risePtg: 2,
            sellQuote: 3,
            sentimentBuyPtg: 4
        };
        ed.insertMarketRow(et);
        await UntilsUtils.waitSeconds(100, "");
    }
    ed.flush();*/
    console.log("DONE!!!");
    /*let es: EtoroSpider = new EtoroSpider();
    await es.init();
    await es.fetchMarket(MarketCategory.commodities);*/
});
a();
//# sourceMappingURL=server.js.map
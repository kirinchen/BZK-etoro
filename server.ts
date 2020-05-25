import http = require('http');
import { EtoroSpider, MarketCategory, MarketRow } from './spider/EtoroSpider';
import { PropertiesCofigLoad } from 'bzk/lib/comm/config/Config';
import { CronMarketRecorder } from './demo/CronMarketRecorder';
import { EtoroRecordService } from './record/EtoroRecordService';
import { BaseDao, Entity, ValueMap } from 'bzk/lib/record/BaseDao';
import { UntilsUtils } from 'bzk/lib/UntilsUtils';
import { EtoroDao } from './record/EtoroDao';

const port =  9901
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);



let a = async () => {

    await PropertiesCofigLoad.load("./myconfig/bzk.properties");
    let cmr = new CronMarketRecorder();
    cmr.register();
    //await EtoroRecordService.getInstance().saveByMarketCategory(MarketCategory.indices);


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
};

a();


import { SeleniumKit } from 'selenium-kit/lib/tool/SeleniumKit';
import { ConfigEnum } from '../ConfigEnum';
import { Config } from 'bzk/lib/comm/config/Config';
import { Builder, By, Key, until, ThenableWebDriver, WebDriver, WebElement } from "selenium-webdriver";
const chrome = require('selenium-webdriver/chrome');


export enum MarketCategory {
    commodities = 'https://www.etoro.com/discover/markets/commodities',
    indices = 'https://www.etoro.com/discover/markets/indices',


}

export class EtoroSpider {
    spiderKit: SeleniumKit = new SeleniumKit();
    get config(): Config { return Config.provide(); }
    get timeout(): number { return this.config.get(ConfigEnum.seleniumTimeout); }

    public async init() {
        let we = this.config.get(ConfigEnum.seleniumWebdriver);
        const screen = {
            width: 1680,
            height: 1000
        };
        console.log("we:" + we);
        await this.spiderKit.init(new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().headless().addArguments(['--headless', '--no-sandbox', '--disable-dev-shm-usage']).windowSize(screen)));
        await this.spiderKit.driver.manage().window().setRect({ width: 1680, height: 1000, x: 0, y: 0 });


    }

    public async fetchMarket(mc: MarketCategory): Promise<Array<MarketRow>> {
        let u = mc;
        console.log("u:" + u);
        await this.spiderKit.driver.get(u);
        console.log("fetchMarket!!!");
        let firstResult = await this.spiderKit.driver.wait(until.elementLocated(By.css('div.mode.sprite')), this.timeout);
        await firstResult.click();
        let ans = new Array<MarketRow>();
        await this.fetchCurrentPage(ans);
        await this.spiderKit.driver.close();
        return ans;
    }

    private async fetchCurrentPage(ans: Array<MarketRow>) {
        let sentimentResult = await this.spiderKit.driver.wait(until.elementLocated(By.css("[automation-id='watchlist-item-list-instrument-sentiment-data-title']")), this.timeout);
        console.log("sentimentResult:" + sentimentResult);
        let trs = await this.spiderKit.driver.findElements(By.css('et-instrument-trading-row'));
        console.log("trs size:" + trs.length);
        for (let i = 0; i < trs.length; i++) {
            let v = await this.parseRow(trs[i]);
            ans.push(v);
            console.log("v:" + JSON.stringify(v));
        }
    }

    private async parseRow(e: WebElement): Promise<MarketRow> {
        let s = await e.getText();

        let sa = s.split('\n');
        let rpt = sa[2];
        var NUMERIC_REGEXP = /\d+\.\d{2}/g;
        let rptv = parseFloat(rpt.match(NUMERIC_REGEXP)[0]);


        let checkSe = sa[10];
        let bsv = checkSe == 'BUYING' ? parseFloat(sa[9]) : 1 - parseFloat(sa[9]);

        return {
            name: sa[0],
            riseDay: parseFloat(sa[1]),
            risePtg: rptv,
            sellQuote: parseFloat(sa[4]),
            buyQuote: parseFloat(sa[6]),
            minQuoteYear: parseFloat(sa[7]),
            maxQuoteYear: parseFloat(sa[8]),
            sentimentBuyPtg: bsv
        };
    }





}


export class MarketRow {

    name: string;
    riseDay: number;
    risePtg: number;
    buyQuote: number;
    sellQuote: number;
    maxQuoteYear: number;
    minQuoteYear: number;
    sentimentBuyPtg: number;




}

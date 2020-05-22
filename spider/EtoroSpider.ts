import { SeleniumKit } from 'selenium-kit';
import { ConfigEnum } from '../ConfigEnum';
import { Config } from 'bzk/lib/comm/config/Config';
const { By, Key, until } = SeleniumKit.getKit();
import { WebDriver, WebElement } from "selenium-webdriver";


export enum MarketCategory {
    commodities = 'https://www.etoro.com/discover/markets/commodities',
    indices = 'https://www.etoro.com/discover/markets/indices',


}

export class EtoroSpider {
    spiderKit: SeleniumKit = new SeleniumKit();
    get config(): Config{ return Config.provide(); }

    public async init() {
        let we = this.config.get(ConfigEnum.seleniumWebdriver);
        console.log("we:" + we);
        await this.spiderKit.init(we);
        await this.spiderKit.driver.manage().window().setRect({ width: 1680, height: 1000, x: 0, y: 0 });
       
        
    }

    public async fetchMarket(mc: MarketCategory) : Promise<Array<MarketRow>> {
        let u = mc;
        console.log("u:"+u);
        await this.spiderKit.driver.get(u);
        console.log("fetchMarket!!!");
        let to = this.config.get(ConfigEnum.seleniumTimeout);
        let firstResult = await this.spiderKit.driver.wait(until.elementLocated(By.css('div.mode.sprite')), to);
        await firstResult.click();

        let sentimentResult = await this.spiderKit.driver.wait(until.elementLocated(By.css("[automation-id='watchlist-item-list-instrument-sentiment-data-title']")), to);
        console.log("sentimentResult:" + sentimentResult);

        let trs = await this.spiderKit.driver.findElements(By.css('et-instrument-trading-row'));
        let ans = new Array<MarketRow>();
        console.log("trs size:" + trs.length);
        for (let i = 0; i < trs.length; i++) {
            let v = await this.parseRow(trs[i]);
            ans.push(v);
            console.log("v:" + JSON.stringify(v));
        }
        await this.spiderKit.driver.close();
        return ans;
    }

    private async parseRow(e: WebElement): Promise<MarketRow> {
        let s = await e.getText();

        let sa = s.split('\n');
        let rpt = sa[2];
        var NUMERIC_REGEXP = /\d+\.\d{2}/g;
        let rptv = parseFloat(rpt.match(NUMERIC_REGEXP)[0]);



        /*let sentimentDataE = await e.findElement(By.css("[automation-id='watchlist-item-list-instrument-sentiment-data-title']"));
        let sentimenP = await sentimentDataE.findElement(By.css(".percentage"));
        let sentimenPText = await sentimenP.getText();
        console.log("sentimenPText:" + sentimenPText);*/


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
            sentimentBuyPtg : bsv
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

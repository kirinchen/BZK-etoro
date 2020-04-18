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
    config: Config;

    public async init(c: Config) {
        this.config = c;
        let we = c.get(ConfigEnum.seleniumWebdriver);
        console.log("we:" + we);
        await this.spiderKit.init(we);
        await this.spiderKit.driver.manage().window().setRect({ width: 1680, height: 1000, x: 0, y: 0 });
       
        
    }

    public async fetchMarket(mc: MarketCategory) {
        let u = mc;
        console.log("u:"+u);
        await this.spiderKit.driver.get(u);
        console.log("fetchMarket!!!");
        let to = this.config.get(ConfigEnum.seleniumTimeout);
        let firstResult = await this.spiderKit.driver.wait(until.elementLocated(By.css('div.mode.sprite')), to);
        //console.log("firstResult:" + firstResult.getText());
        await firstResult.click();

        let trs = await this.spiderKit.driver.findElements(By.css('et-instrument-trading-row'));
        console.log("trs size:" + trs.length);
        for (let i = 0; i < trs.length; i++) {
            await this.parseRow(trs[i]);
        }
    }

    private async parseRow(e: WebElement) {
        let s = await e.getText();
        console.log("row!!:" + s);
    }



}
import { SeleniumKit } from 'selenium-kit';
import { ConfigEnum } from '../ConfigEnum';
import { Config } from 'bzk/lib/comm/config/Config';
const { By, Key, until } = SeleniumKit.getKit();


export enum MarketCategory {
    commodities = 'https://www.etoro.com/discover/markets/commodities',
    indices = 'https://www.etoro.com/discover/markets/indices',


}

export class EtoroSpider {
    spiderKit: SeleniumKit = new SeleniumKit();

    public async init(c: Config) {
        let we = c.get(ConfigEnum.seleniumWebdriver);
        console.log("we:" + we);
        await this.spiderKit.init(we);
    }

    public async fetchMarket(mc: MarketCategory) {
        let u = mc;
        console.log("u:"+u);
        await this.spiderKit.driver.get(u);
        console.log("fetchMarket!!!");
    }



}
import { SeleniumKit } from 'selenium-kit';
import { Config } from 'bzk/lib/comm/config/Config';
export declare enum MarketCategory {
    commodities = "https://www.etoro.com/discover/markets/commodities",
    indices = "https://www.etoro.com/discover/markets/indices"
}
export declare class EtoroSpider {
    spiderKit: SeleniumKit;
    config: Config;
    init(c: Config): Promise<void>;
    fetchMarket(mc: MarketCategory): Promise<void>;
    private parseRow;
}

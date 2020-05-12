import { SeleniumKit } from 'selenium-kit';
import { Config } from 'bzk/lib/comm/config/Config';
export declare enum MarketCategory {
    commodities = "https://www.etoro.com/discover/markets/commodities",
    indices = "https://www.etoro.com/discover/markets/indices"
}
export declare class EtoroSpider {
    spiderKit: SeleniumKit;
    get config(): Config;
    init(): Promise<void>;
    fetchMarket(mc: MarketCategory): Promise<Array<MarketRow>>;
    private parseRow;
}
export declare class MarketRow {
    name: string;
    riseDay: number;
    risePtg: number;
    buyQuote: number;
    sellQuote: number;
    maxQuoteYear: number;
    minQuoteYear: number;
    sentimentBuyPtg: number;
}

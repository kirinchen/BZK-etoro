import { MarketCategory, EtoroSpider } from "../spider/EtoroSpider";
import { EtoroDao } from "./EtoroDao";

export class EtoroRecordService {

    private static instance : EtoroRecordService;

    private constructor() { }

    public async saveByMarketCategory(mc: MarketCategory) {
        let es = new EtoroSpider();
        await es.init();
        let mrs = await es.fetchMarket(mc);
        mrs.forEach(m => {
            EtoroDao.getInstance().insertMarketRow(m);
        });
    }

    public static getInstance(): EtoroRecordService {
        if (!this.instance) this.instance = new EtoroRecordService();
        return this.instance;
    }

}
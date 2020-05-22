import { MarketCategory } from "../spider/EtoroSpider";
export declare class EtoroRecordService {
    private static instance;
    private constructor();
    saveByMarketCategory(mc: MarketCategory): Promise<void>;
    static getInstance(): EtoroRecordService;
}

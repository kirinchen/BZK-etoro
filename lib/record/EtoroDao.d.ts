import { BaseDao } from 'bzk/lib/record/BaseDao';
import { MarketRow } from '../spider/EtoroSpider';
export declare class EtoroDao extends BaseDao {
    private static instance;
    private constructor();
    insertMarketRow(mr: MarketRow): void;
    static getInstance(): EtoroDao;
}

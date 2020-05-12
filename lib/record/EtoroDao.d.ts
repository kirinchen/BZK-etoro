import { BaseDao } from 'bzk/lib/record/BaseDao';
import { MarketRow } from '../spider/EtoroSpider';
export declare class EtoroDao extends BaseDao {
    insertMarketRow(mr: MarketRow): void;
}

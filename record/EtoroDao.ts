import { BaseDao, Entity, ValueMap } from 'bzk/lib/record/BaseDao';
import { MarketRow } from '../spider/EtoroSpider';

export class EtoroDao extends BaseDao {

    public insertMarketRow(mr: MarketRow) {
        let e: Entity = {
            measurement:mr.name,
            time: new Date(),
            source: "ETORO",
            valueMap: new ValueMap() //TODO
        };
    }

}
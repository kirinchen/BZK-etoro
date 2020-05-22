import { BaseDao, Entity, ValueMap } from 'bzk/lib/record/BaseDao';
import { MarketRow } from '../spider/EtoroSpider';

export class EtoroDao extends BaseDao {

    private static instance : EtoroDao;

    private constructor() {
        super();
    }

    public insertMarketRow(mr: MarketRow) {
        let e: Entity = {
            measurement:mr.name,
            time: new Date(),
            source: "ETORO",
            valueMap: new ValueMap().putAll(mr)
        };
        this.insert(e);
    }

    public static getInstance(): EtoroDao {
        if (!this.instance) this.instance = new EtoroDao();
        return this.instance;
    }

}
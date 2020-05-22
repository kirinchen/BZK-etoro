"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EtoroDao = void 0;
const BaseDao_1 = require("bzk/lib/record/BaseDao");
class EtoroDao extends BaseDao_1.BaseDao {
    constructor() {
        super();
    }
    insertMarketRow(mr) {
        let e = {
            measurement: mr.name,
            time: new Date(),
            source: "ETORO",
            valueMap: new BaseDao_1.ValueMap().putAll(mr)
        };
        this.insert(e);
    }
    static getInstance() {
        if (!this.instance)
            this.instance = new EtoroDao();
        return this.instance;
    }
}
exports.EtoroDao = EtoroDao;
//# sourceMappingURL=EtoroDao.js.map
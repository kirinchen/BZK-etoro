"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDao_1 = require("bzk/lib/record/BaseDao");
class EtoroDao extends BaseDao_1.BaseDao {
    insertMarketRow(mr) {
        let e = {
            measurement: mr.name,
            time: new Date(),
            source: "ETORO",
            valueMap: new BaseDao_1.ValueMap() //TODO
        };
    }
}
exports.EtoroDao = EtoroDao;
//# sourceMappingURL=EtoroDao.js.map
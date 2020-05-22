"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EtoroRecordService = void 0;
const EtoroSpider_1 = require("../spider/EtoroSpider");
const EtoroDao_1 = require("./EtoroDao");
class EtoroRecordService {
    constructor() { }
    saveByMarketCategory(mc) {
        return __awaiter(this, void 0, void 0, function* () {
            let es = new EtoroSpider_1.EtoroSpider();
            yield es.init();
            let mrs = yield es.fetchMarket(mc);
            mrs.forEach(m => {
                EtoroDao_1.EtoroDao.getInstance().insertMarketRow(m);
            });
        });
    }
    static getInstance() {
        if (!this.instance)
            this.instance = new EtoroRecordService();
        return this.instance;
    }
}
exports.EtoroRecordService = EtoroRecordService;
//# sourceMappingURL=EtoroRecordService.js.map
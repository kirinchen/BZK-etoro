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
exports.CronMarketRecorder = void 0;
const cron_1 = require("cron");
const EtoroRecordService_1 = require("../record/EtoroRecordService");
const EtoroSpider_1 = require("../spider/EtoroSpider");
class CronMarketRecorder {
    register() {
        new cron_1.CronJob('* */15 * * * *', () => __awaiter(this, void 0, void 0, function* () {
            console.log('You will see this message every second');
            yield EtoroRecordService_1.EtoroRecordService.getInstance().saveByMarketCategory(EtoroSpider_1.MarketCategory.indices);
        }), null, true);
    }
}
exports.CronMarketRecorder = CronMarketRecorder;
//# sourceMappingURL=CronMarketRecorder.js.map
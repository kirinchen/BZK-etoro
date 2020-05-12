"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cron_1 = require("cron");
class CronMarketRecorder {
    register() {
        new cron_1.CronJob('* * * * * *', () => {
            console.log('You will see this message every second');
        }, null, true, 'America/Los_Angeles');
    }
}
exports.CronMarketRecorder = CronMarketRecorder;
//# sourceMappingURL=CronMarketRecorder.js.map
const schedule = require('node-schedule');
import { EtoroRecordService } from "../record/EtoroRecordService";
import { MarketCategory } from "../spider/EtoroSpider";

export class CronMarketRecorder {

    public register() {

        var j = schedule.scheduleJob('0 */15 * * * *', async function (fireDate) {
            console.log('You will see this message every second' + new Date().toISOString());
            await EtoroRecordService.getInstance().saveByMarketCategory(MarketCategory.indices);
        });

    }

}
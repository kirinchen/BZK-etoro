import { CronJob } from "cron";
import { EtoroRecordService } from "../record/EtoroRecordService";
import { MarketCategory } from "../spider/EtoroSpider";

export class CronMarketRecorder {

    public register() {

        new CronJob('0 */50 * * * *', async () => {
            console.log('You will see this message every second' + new Date().toISOString());
            await EtoroRecordService.getInstance().saveByMarketCategory(MarketCategory.indices);
        }, null, true);

    }

}
import { CronJob } from "cron";
import { EtoroRecordService } from "../record/EtoroRecordService";
import { MarketCategory } from "../spider/EtoroSpider";

export class CronMarketRecorder {

    public register() {

        new CronJob('* */15 * * * *', async () => {
            console.log('You will see this message every second');
            await EtoroRecordService.getInstance().saveByMarketCategory(MarketCategory.indices);
        }, null, true);

    }

}
import { CronJob } from "cron";

export class CronMarketRecorder {

    public register() {

        new CronJob('* * * * * *', () => {
            console.log('You will see this message every second');
        }, null, true, 'America/Los_Angeles');

    }

}
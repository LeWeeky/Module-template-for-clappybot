import { CronJob } from "cron";

// More informations there : https://www.npmjs.com/package/cron

const job = new CronJob("0 8 * * *", function () {
  console.log("Good morning!");
});

export function start() {
  job.start();
}

export function stop() {
  job.stop();
}

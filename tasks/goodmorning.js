const {CronJob} = require('cron')

// More informations there : https://www.npmjs.com/package/cron

const job = new CronJob(
	'0 8 * * *',
	function () {
		console.log('Good morning!');
	}
);

function start()
{
	job.start();
}

function stop()
{
	job.stop();
}
module.exports = {
	start,
	stop
}
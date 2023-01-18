const schedule = require('node-schedule')




// Cron jobs set on 30minutes
const job = schedule.scheduleJob(' 30 * * * *' , function(){
       console.log('The answer to life, the universe, and everything!')
})


var thinkgear = require('node-thinkgear-sockets');
var client = thinkgear.createClient({ enableRawOutput: false });

client.on('data',function(data){
    // magical and wonderful things
    if(data.eSense) {
        console.log('meditation',data.eSense.meditation)
        console.log('attention',data.eSense.attention)
    } else {
    console.log((new Date).toISOString() + ': ' +JSON.stringify(data));
    }
});

client.on('blink_data', function(data) {
    console.log('blinked', data.blinkStrength);
})

client.connect();

const googleTrends = require('google-trends-api');
const HttpsProxyAgent = require('https-proxy-agent');
const https = require('https');


module.exports = function (keywords, success, error) {

    https.get('https://api.getproxylist.com/proxy', (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {

          //  console.log(data);
            let proxy = JSON.parse(data);

            let url = `http${proxy.allowsHttps?"s":""}://` + proxy.ip + ":" + proxy.port;
          //  console.log(url);
            //let proxyAgent = new HttpsProxyAgent(url);
             
            var startDate = new Date();
            startDate.setMonth(startDate.getMonth() - 1);

            let query = {
                keyword: keywords,
            //    agent: proxyAgent
                hl : "de",
                startTime: startDate

            };
             googleTrends.interestOverTime(query).then((res) => success(res, keywords) ).catch(error);
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });

}




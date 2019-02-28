const text2SEO = require('./text2SEO.js');
const fs = require('fs');
const googleTrends = require('google-trends-api');


text2SEO("Bauen Sie Ihre Fähigkeiten auf, schließen Sie sich Teams an, haben Sie Spaß", function (results, keywords) {
    console.log('These proxied results are incredible', JSON.parse(results).default.averages.sort(), keywords);
}, JSON.parse(fs.readFileSync('./stopwords/de_DE.json', 'utf8')));



/*
googleTrends.autoComplete({keyword: "Bauen"})
.then(function(results) {
  console.log(results);
})
.catch(function(err) {
  console.error(err);
})

*/
const text2SEO = require('./text2SEO.js');
const fs = require('fs');

let stopWords =JSON.parse(fs.readFileSync('./stopwords/de_DE.json', 'utf8'));
let text = "Bauen Sie Ihre Fähigkeiten auf, schließen Sie sich Teams an, haben Sie Spaß";

text2SEO(text, function (resultsString, keywords) {
    let results = JSON.parse(resultsString);
    console.log(results.default.averages.sort(), keywords);
}, stopWords);
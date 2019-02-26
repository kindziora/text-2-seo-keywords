const text2SEO = require('./text2SEO.js');
const fs = require('fs');

text2SEO("Bauen Sie Ihre Fähigkeiten auf, schließen Sie sich Teams an, haben Sie Spaß", function (results) {
    console.log('These proxied results are incredible', results);
}, JSON.parse(fs.readFileSync('./stopwords/de_DE.json', 'utf8')));
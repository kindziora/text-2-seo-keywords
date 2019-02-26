const extract = require('./extract.js');
const rank = require('./rank.js');

module.exports = function (text, successCallback, stopwords) {

    let keywordsRaw = extract(text, stopwords);

    for (let i in keywordsRaw) {
        let keyword = keywordsRaw[i];
        rank(keywordsRaw,
            (RESULTS) => successCallback(RESULTS, keyword),
            function (err) {
                console.error('Oh no there was an error, double check your proxy settings', err);
            });
    }
}


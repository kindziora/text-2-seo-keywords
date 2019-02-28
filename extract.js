const rake = require('node-rake');

module.exports = function(text, myStopwords) {

    const opts = {stopwords: myStopwords || []};
    
    let kwds = rake.generate(text, opts);
 
    return kwds.map(e=>e.replace(/[^a-z0-9+äöüÄÖÜß]+/gi, ''));
}




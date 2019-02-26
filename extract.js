const rake = require('node-rake');

module.exports = function(text, myStopwords) {

    const opts = {stopwords: myStopwords || []};
    
    return rake.generate(text, opts);
}




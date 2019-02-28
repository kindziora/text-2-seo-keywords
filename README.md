# text-2-seo-keywords


## What is this?

Provide a text, extract keywords, rank them using google trends and have fun ;)


```javascript

const text2SEO = require('./text2SEO.js');

let stopWords = ["das", "sind", "stopwords"];
let text = "Bauen Sie Ihre Fähigkeiten auf, schließen Sie sich Teams an, haben Sie Spaß";

text2SEO(text, function (resultsString, keywords) {
    let results = JSON.parse(resultsString);
    console.log(results.default.averages.sort(), keywords);
}, stopWords);

```

## Results

```javascript
[ 0, 1, 1, 14, 58 ] [ 'Bauen', 'Fähigkeiten', ', schließen', 'Teams', 'Spaß' ]

```
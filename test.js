const text2SEO = require('./text2SEO.js');
const fs = require('fs');

let stopWords =JSON.parse(fs.readFileSync('./stopwords/de_DE.json', 'utf8'));
let text = "Bauen Sie Ihre Fähigkeiten auf, schließen Sie sich Teams an, haben Sie Spaß Spielen Sie auf mattschach.de auf der ganzen Welt Schach. \n Alles, was Sie brauchen, ist ein Smartphone! Spielen Sie gegen zufällige Spieler, treten Sie einem Spiel bei oder erstellen Sie ein Spiel. Wenn Sie keine Leute mögen, kein Problem. \n Fordern Sie das Schachspiel heraus!";

text2SEO(text, function (resultsString, keywords) {
    let results = JSON.parse(resultsString);

    let map = {};
    for(let i in results.default.averages){
        map[results.default.averages[i]] = keywords[i];
    }
    results.default.averages.sort()
    for(let i in results.default.averages){
        map[results.default.averages[i]] = keywords[i];
    }
    console.log(results.default.averages.sort(), keywords);
}, stopWords);
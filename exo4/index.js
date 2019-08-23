let http = require('http');
let url = require('url');
let queryString = require('query-string');

// LocalStorage pour node
let Storage = require('dom-storage');

// In-file, doesn't call `String(val)` on values (default)
let localStorage = new Storage('./db.json', { strict: false, ws: ' ' });

// Creation du serveur, réception requête et renvoi d'une réponse
let server = http.createServeur(function(req,res){
    
    let page = url.parse(req.url).pathname; // Récupère chemin de l'url
    let params = queryString.parse(url.parse(req.url).query); // Parse (découpe) les paramètres de l'URL

    switch(page){
        case 
    }

})

// // retour json
// res.writeHeader(200 , {"Content-Type" : "application/json"}); //charset UTF-8
//             for(i = 0; i < eleves.length ; i++){
//                 liste.push({'nom':eleves[i]});
//             }
//             res.write(JSON.stringify(liste));


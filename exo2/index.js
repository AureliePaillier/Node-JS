let http = require('http');
let url = require('url');
let querystring = require('querystring');  

let server = http.createServer(function(req, res){ //On cree le serveur et on recoit une requete et on renvoie une reponse
    let page = url.parse(req.url).pathname; //recupere chemin de l'url
    let params = querystring.parse(url.parse(req.url).query); // Decoupage de ts les parametres pour les mettre en tableau
    console.log(params);
    console.log(params['nom']);
    if(params['prenom']){
        console.log('Coucou, je suis '+params['prenom']);
    } else {
        res.writeHead(400, {"Content-type":"text/html"}); //Code status et type de retour
        res.write('Sorry, j ai pas ton parametre')
    }
    
    switch (page) {
        case '/':
            res.writeHead(200, {"Content-type":"text/html"}); //Code status et type de retour
            res.write('<h1> Accueil</h1>');
            break;
        case '/test':
            res.writeHead(200, {"Content-type":"text/html"}); //Code Status et type de retour
            res.write('<h1>autre texte</h1>');
            break;
        default:
            res.writeHead(404, {"Content-type":"text/html"}); //Code Status et type de retour
            res.write('404');
            break;    
        }
        res.end();
})
    server.listen(9090); //port ecoute pr le serveur web)
    

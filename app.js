let http = require('http');
let url = require('url');

let server = http.createServer(function(req, res){ //On cree le serveur et on recoit une requete et on renvoie une reponse
    let page = url.parse(req.url).pathname;
    res.writeHead(200, {"Content-type":"text/html"}); //Code status et type de retour
    
    switch(page){
        case '/':
            res.write('<h1>Ici c est l accueil</h1>');
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
    // res.write('<h1>Coucou mamaaaan</h1></br>');
    // res.end();
    // res.write(`
    // qdqfqff
    // dqfsg
    // dgdgh
    // dyuj
    // fhyj 
    // `)
    // res.end();
})

server.listen(9090); //port ecoute pr le serveur web
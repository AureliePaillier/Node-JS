let http = require('http');
let url = require('url');
let querystring = require('querystring');

//LocalStorage pour node
let Storage = require('dom-storage');
// in-file, doesn't call `String(val)` on values (default)
let localStorage = new Storage('./db.json', { strict: false, ws: '  ' });

let eleves = ['Hugo','Jeanne','Serge'];
if(localStorage.getItem('eleves'))
{
    eleves = localStorage.getItem('eleves');
}


let server = http.createServer(function(req,res){ // On cree le serveur et on recoit une requete et on renvoie une reponse
    let page = url.parse(req.url).pathname; // Recupere le chemin de l'url
    let params = querystring.parse(url.parse(req.url).query); // Parse (découpe) les parametres de l URL

    switch(page){
        case '/list':
            res.writeHeader(200 , {"Content-Type" : "text/html; charset=utf-8"}); //charset UTF-8
            res.write('<ul>');
            for(i = 0; i < eleves.length ; i++){
                res.write('<li>'+eleves[i]+'</li>')
            }
            res.write('</ul>');
            break;
        case '/add':
            if(params['prenom'] && typeof(params['prenom']) === 'string' && params['prenom'] != null && params['prenom'] != ''){
                eleves.push(params['prenom']);
                localStorage.setItem('eleves',eleves);
                res.writeHead(302 , {
                    'Location' : '/list' 
                    });
                res.end();
            }else{
                res.writeHead(400, {"Content-type":"text/plain"}); //Code Status et type de retour
                res.write('Desole j ai pas ton parametre')
            }
            break;
        default:
            res.writeHead(404, {"Content-type":"text/html"}); //Code Status et type de retour
            res.write('404');
            break
    }
    res.end();
})

server.listen(9090); //port ecoute pour le serveur web
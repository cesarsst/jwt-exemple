// Pegando variaveis de ambiente com a secret de discriptografia 

const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser')

module.exports = app => {
    
    app.post("/getToken", bodyParser.json(), function(req, res){
        
        // verificação atraves do login => Esses dados são pegos do banco de dados ou do Qrcode
        const userId = 1;
        
        // Verifica se o dados de usuário estão ok e cria um token de acesso para a aplicação
        if( req.body.userId === userId ) {
            const token = jwt.sign({ userId }, process.env.SECRET);
            const tokenDecoded = jwt.verify(token, process.env.SECRET)
            
            res.json({
                token,
                tokenDecoded
            }).status(200);
        } else {
            res.json({
                msg: "Erro!"
            }).status(401);
        }
        
    });
    
    app.post('/sessao', bodyParser.json(), function(req, res){

        const token = req.headers.token;
        const tokenDecoded = jwt.verify(token, process.env.SECRET)

        res.json({
            tokenDecoded
        }).status(200);
    });


};
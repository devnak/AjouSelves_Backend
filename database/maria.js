const maria = require('mysql2');
const config = require('../config/config');



const DBconnection= maria.createConnection({
        host:config.db_host,
        port:config.db_port,
        user:config.db_user,
        password:config.db_pw,
        database:config.db_name

});
console.log("done");
    



 module.exports= DBconnection;
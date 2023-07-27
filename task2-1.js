var mysql = require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    pass:"",
});
con.query("CREATE DATABASE CreateDatabase;",function(err,CreateDatabase){
    if(err){return console.error(err);}
    else{
        console.log("Connected!");
    }
})


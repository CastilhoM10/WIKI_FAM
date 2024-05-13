import mysql from 'mysql'

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: " ",
    database: "wiki_fam_new",
})

con.connect(function(err) {
    if(err) {
        console.log("Falha na conexão!")
    }
    else{
        console.log("Conectado!")
    }
})



export default con;
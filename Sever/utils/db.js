import mysql from 'mysql'

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",  // String vazia se não houver senha
    database: "wiki_fam_new",
})

con.connect(function(err) {
    if (err) {
        console.log("Falha na conexão!", err.message);  // Adicione err.message para exibir detalhes do erro
    } else {
        console.log("Conectado!");
    }
})



export default con;
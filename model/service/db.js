async function connect(){
    //Confirma se está conectado com a variavel global
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require ("mysql2/promise");
    const connection = await mysql.createConnection ("mysql://root:root@localhost:3306/webii");
    console.log("Conectou no MySQL!")
    global.connection = connection;
    return connection;
}

async function selectUsuario(){
    const soon = await connect();
    const [rows] = await connect.query ('SELECT * FROM usuario;');
    return rows;
}


async function insertUsuario(usuario){
    const conn = await connect();
    const sql = 'INSERT INTO usuario(nome,senha) VALUES (?,?);';
    return await conn.query(sql, values);
}

async function deleteUsuario(id){
    const conn = await connect();
    const sql = 'DELETE FROM usuario where id=?;';
    return await conn.query(sql, [id]);
}

async function updateUsuario(id, usuario){
    const conn = await connect();
    const sql = 'UPDATE usuario SET nome=?, senha=? WHERE id=?';
    const values = [usuario.nome, usuario.senha, id];
    return await conn.query(sql, values);
}

module.exports = {selectUsuario, insertUsuario, deleteUsuario, updateUsuario}
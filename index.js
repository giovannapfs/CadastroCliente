console.log('SELECT * FROM USUARIO');
const usuarios = await db.selectUsuario();
console.log(usuarios);
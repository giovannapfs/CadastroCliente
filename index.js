const express = require("express");

const app = express();

app.get("/", function (req, resp){
    resp.send("Bem-vindo ao meu app");
})

app.get("/teste", function (req,resp){
    resp.send("Página de contato do meu app");
})
app.get("/produto", function (req,resp){
    resp.send("Pagina de produto do meu app");
})

console.log("SELECT * FROM t_usuario");
const usuarios = await db.selectUsuario({nome: "Zé", senha: "12345678"});
console.log(usuarios);

console.log("DELETE * FROM t_usuario");
const result3 = await db.deleteUsuario(2);
console.log(result3);

//Esse app.listen deve ser a ultima linha sempre (Isso é apenas uma boa prática, não é necessariamente obrigatório)
app.listen(8081, () =>{
    console.log("Servidor funcionando na url http://localhost:8081");
});
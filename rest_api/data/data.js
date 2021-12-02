const e = require('express');
const { query } = require('express');
const database = require('../infra/database')

exports.campanhaData = function(){
    return  database.query("select * from campanhas")
}

exports.saveCampanha = function(campanha){
let nome = campanha.nome;
let logo= campanha.logo;
let descricao= campanha.descricao;
let inicio= campanha.inicio;
let fim = campanha.fim;

  console.log(campanha)
return  database.none("insert into campanhas(nome, logo, descricao, inicio, fim) values('" + nome + "', '"+ logo  + "', '" + descricao + "', '" + inicio  + "', '" + fim  + "'")
    
}

exports.getSenha = function(email){

  return  database.query("select usuario.senha from usuario where usuario.email = 'adriele.colossi4@gmail.com'")
  //select usuario.senha from usuario where usuario.email = 'adriele.colossi4@gmail.com'
  //return  database.query("select usuario.senha from usuario where usuario.email = '" + email + "'")
}

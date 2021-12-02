const dao= require('../data/data.js');

exports.getCampanha = function(){
    return dao.campanhaData();
}

exports.saveCampanha = function(campanha){
    return dao.saveCampanha(campanha);
}

exports.getSenha = function(email){

    return dao.getSenha(email);
}
CREATE TABLE campanhas(
    id SERIAL NOT NULL PRIMARY KEY,
    nome VARCHAR(200) NOT NULL,
    logo VARCHAR(400) NOT NULL,
    descricao VARCHAR(400) NOT NULL,
    inicio DATE NOT NULL,
    fim DATE NOT NULL
);

CREATE TABLE faq(
     id SERIAL NOT NULL PRIMARY KEY,
     pergunta VARCHAR(1000) NOT NULL,
     resposta VARCHAR(1000) NOT NULL,
     linkexterno VARCHAR(400) NOT NULL
);

CREATE TABLE parceiros(
    cnpj CHAR(14) NOT NULL PRIMARY KEY,
     nome VARCHAR(200) NOT NULL,
    logo VARCHAR(400) NOT NULL,
    linkexterno VARCHAR(400) NOT NULL,
    inicio DATE NOT NULL --inicio da parceria
);

CREATE TABLE mantenedoras(
    cnpj CHAR(14) NOT NULL PRIMARY KEY,
     nome VARCHAR(200) NOT NULL,
    logo VARCHAR(400) NOT NULL,
    linkexterno VARCHAR(400) NOT NULL,
    inicio DATE NOT NULL --inicio da parceria
);

CREATE TABLE noticia(
    id SERIAL NOT NULL PRIMARY KEY,
    titulo VARCHAR(400) NOT NULL,
    data DATE NOT NULL
);

CREATE TABLE imagens(
    id SERIAL NOT NULL PRIMARY KEY,
    linkexterno VARCHAR(400) NOT NULL,
    noticia INTEGER NOT NULL,
   FOREIGN KEY(noticia) REFERENCES noticia(id)
);

CREATE TABLE usuario(
    CPF CHAR(11) NOT NULL PRIMARY KEY,
    email VARCHAR(400) NOT NULL,
    senha VARCHAR(400) NOT NULL,
    nome VARCHAR(200) NOT NULL,
    tipo VARCHAR(4) NOT NULL, --adm ou user
    cargo VARCHAR(50) NOT NULL
);

CREATE TABLE entrega(
    id SERIAL NOT NULL PRIMARY KEY,
    data DATE NOT NULL,
    usuario CHAR(11) NOT NULL,
    FOREIGN KEY(usuario) REFERENCES usuario(cpf)
);

CREATE TABLE entidade(
    cnpj CHAR(14) NOT NULL PRIMARY KEY,
    nome VARCHAR(400) NOT NULL,
    bairro VARCHAR(1000) NOT NULL,
    status INTEGER NOT NULL, --se coloca assim?
    refeicoes VARCHAR(6) NOT NULL,
    data DATE NOT NULL,
    endereco VARCHAR(600) NOT NULL,
    telefone VARCHAR(10) NOT NULL,
    email VARCHAR(300) NOT NULL,
    entrega VARCHAR(7) NOT NULL, -- interna externa ambos
    usuario CHAR(11) NOT NULL,
    FOREIGN KEY(usuario) REFERENCES usuario(cpf)
);

CREATE TABLE entregaentidade(
    entrega INTEGER NOT NULL,
    entidade CHAR(14) NOT NULL,
   PRIMARY KEY(entrega, entidade)
);

CREATE TABLE bairro(
    id SERIAL NOT NULL PRIMARY KEY,
     nome VARCHAR(400) NOT NULL
);

CREATE TABLE entregabairro(
    id SERIAL NOT NULL PRIMARY KEY,
    entrega INTEGER NOT NULL,
    bairro INTEGER NOT NULL,
    data DATE NOT NULL,
    alimentos INTEGER NOT NULL,
    pessoas INTEGER NOT NULL,
    FOREIGN KEY(entrega) REFERENCES entrega(id),
    FOREIGN KEY(bairro) REFERENCES bairro(id)
);

INSERT INTO bairro(nome) VALUES('Centro')
INSERT INTO usuario(CPF, email, senha, nome, tipo, cargo) VALUES('11667993798', 'adriele.colossi4@gmail.com', '32b282f5b11c718748d60d759216bdd2', 'Adriele', 'adm', '-') 
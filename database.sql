-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS LSMS;

-- Uso do banco de dados
USE LSMS;

-- Tabela para usuários
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    funcao ENUM('admin', 'user') NOT NULL
);

-- Tabela para categorias
CREATE TABLE IF NOT EXISTS categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

-- Tabela para produtos
CREATE TABLE IF NOT EXISTS produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    quantidade INT NOT NULL,
    categoria INT NOT NULL,
    FOREIGN KEY (categoria) REFERENCES categorias(id) ON DELETE CASCADE
);

-- Tabela para vendas
CREATE TABLE IF NOT EXISTS vendas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    id_produto INT,
    quantidade INT NOT NULL,
    valor_total DECIMAL(10,2) NOT NULL,
    data DATE NOT NULL,
    FOREIGN KEY (id_user) REFERENCES usuarios(id) ON DELETE SET NULL,
    FOREIGN KEY (id_produto) REFERENCES produtos(id) ON DELETE CASCADE
);

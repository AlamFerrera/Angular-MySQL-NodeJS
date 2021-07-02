CREATE DATABASE ng_games_db;
USE ng_games_db;

CREATE TABLE games(
    id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(180) NOT NULL,
    descripcion VARCHAR(255),
    imagen TEXT,
    created_at TIMESTAMP DEFAULT current_timestamp NOT NULL
);
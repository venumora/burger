-- Schema
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers 
(
	id INT AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(60) NOT NULL,
    devoured TINYINT NOT NULL,
    createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);

-- Schema
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers 
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(60) NOT NULL,
    devoured TINYINT NOT NULL,
	PRIMARY KEY (id)
);

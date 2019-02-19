-- DROP DATABASE IF EXISTS exampledb;
-- CREATE DATABASE exampledb;

-- DROP DATABASE IF EXISTS testdb;
-- CREATE DATABASE testdb;
CREATE DATABASE deardoctor_db;

USE `deardoctor_db`;

CREATE TABLE `users` (
	id INTEGER AUTO_INCREMENT NOT NULL UNIQUE,
	username TEXT NOT NULL,
	firstname VARCHAR(20) NOT NULL,
	lastname VARCHAR(20) NOT NULL,
	password VARCHAR(255) NOT NULL,
	heal_id INTEGER,
	PRIMARY KEY (user_id),
	FOREIGN KEY (heal_id) REFERENCES patientInfo(heal_id)
);

CREATE TABLE `symptom` (
	id INTEGER AUTO_INCREMENT NOT NULL,
	symptom TEXT NULL,
	severity INTEGER NULL,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	heal_id INTEGER,
	PRIMARY KEY (symptom_id),
	FOREIGN KEY (heal_id) REFERENCES patientInfo(heal_id)
);

CREATE TABLE 'food' (
    id INTEGER AUTO_INCREMENT NOT NULL,
	food TEXT NULL,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	heal_id INTEGER,
	PRIMARY KEY (food_id),
	FOREIGN KEY (heal_id) REFERENCES patientInfo(heal_id)

);

CREATE TABLE 'drink' (
    id INTEGER AUTO_INCREMENT NOT NULL,
	drink TEXT NULL,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	heal_id INTEGER,
	PRIMARY KEY (drink_id),
	FOREIGN KEY (heal_id) REFERENCES patientInfo(heal_id)
);
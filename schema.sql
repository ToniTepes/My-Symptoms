 DROP DATABASE IF EXISTS `deardoctor_db`;
 CREATE DATABASE `deardoctor_db`;

USE `deardoctor_db`;

CREATE TABLE IF NOT EXISTS `diary` 
(
	`id` INTEGER NOT NULL auto_increment , 
    `symptom` JSON DEFAULT NULL, 
    `food` JSON DEFAULT NULL, 
    `drink` JSON DEFAULT NULL, 
    `createdAt` DATETIME NOT NULL, 
    `updatedAt` DATETIME NOT NULL, 
    PRIMARY KEY (`id`)
    ) 
    ENGINE=InnoDB;

    --  CREATE TABLE `users`
--  	(
--  		user_id INTEGER AUTO_INCREMENT UNIQUE,
--  		email VARCHAR(150) UNIQUE,
--  		firstname VARCHAR(50) ,
--  		lastname VARCHAR(50) ,
--  		pass VARCHAR(255) ,
-- 		createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
-- 		updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--  		-- heal_id INTEGER,
--  		PRIMARY KEY(user_id)
--  		-- FOREIGN KEY(heal_id) REFERENCES patientInfo(heal_id)
--  	);
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

CREATE TABLE IF NOT EXISTS `user` 
(
	`id` INTEGER NOT NULL auto_increment ,
	firstname JSON DEFAULT NULL,
	lastname JSON DEFAULT NULL,
	email JSON DEFAULT NULL,
	pass JSON DEFAULT NULL,
    `createdAt` DATETIME NOT NULL, 
    `updatedAt` DATETIME NOT NULL, 
	PRIMARY KEY(id)
    ) 
    ENGINE=InnoDB;
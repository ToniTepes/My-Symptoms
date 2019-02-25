--  DROP DATABASE IF EXISTS `deardoctor_db`;

--  CREATE DATABASE `deardoctor_db`;

--  USE `deardoctor_db`;

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

--  CREATE TABLE `symptoms`
--  	(
--  		id INTEGER AUTO_INCREMENT NOT NULL,
--  		symptom VARCHAR(250),
--  		severity INTEGER,
--  		createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
-- 		updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--  		-- heal_id INTEGER,
--  		PRIMARY KEY(id)
--  		-- FOREIGN KEY(heal_id) REFERENCES patientInfo(heal_id)
--  	);

--  CREATE TABLE `food`
--  	(
--  		id INTEGER AUTO_INCREMENT NOT NULL,
--  		food VARCHAR(250),
--  		createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
-- 		updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--  		-- heal_id INTEGER,
--  		PRIMARY KEY(id)
--  		-- FOREIGN KEY(heal_id) REFERENCES patientInfo(heal_id)

--  	);

--  CREATE TABLE `drinks`
--  	(
--  		id INTEGER AUTO_INCREMENT NOT NULL,
--  		drink VARCHAR(250),
--  		createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
-- 		updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--  		-- heal_id INTEGER,
--  		PRIMARY KEY(id)
--  		-- FOREIGN KEY(heal_id) REFERENCES patientInfo(heal_id)
--  	);
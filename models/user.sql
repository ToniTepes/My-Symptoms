USE `deardoctor_db`;

CREATE TABLE user (
	id INTEGER AUTO_INCREMENT NOT NULL UNIQUE,
	-- username TEXT NOT NULL,
	firstname VARCHAR(20) NOT NULL,
	lastname VARCHAR(20) NOT NULL,
    email VARCHAR(20) NOT NULL,
	password VARCHAR(255) NOT NULL,
	-- heal_id INTEGER,
    created_at datetime NOT NULL,
	updated_at datetime NOT NULL,
	PRIMARY KEY(id)
	-- FOREIGN KEY(heal_id) REFERENCES patientInfo(heal_id)
);

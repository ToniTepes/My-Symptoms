DROP DATABASE IF EXISTS dots_db;
CREATE DATABASE dots_db;

USE dots_db;

CREATE TABLE table_mood (
  id INT NOT NULL AUTO_INCREMENT,
  Created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  Mood VARCHAR(500) NULL,
  CONSTRAINT table_mood_fk_user_id FOREIGN KEY (user_id) REFERENCES users (user_id),
  PRIMARY KEY (id)
);
SELECT * FROM table_mood;

CREATE TABLE table_food (
  id INT NOT NULL AUTO_INCREMENT,
  Created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  Ingested VARCHAR(500) NULL,
  CONSTRAINT table_food_fk_user_id FOREIGN KEY (user_id) REFERENCES users (user_id),
  PRIMARY KEY (id)
);
SELECT * FROM table_food;

CREATE TABLE table_drink (
  id INT NOT NULL AUTO_INCREMENT,
  Created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  Ingested VARCHAR(500) NULL,
  CONSTRAINT table_drink_fk_user_id FOREIGN KEY (user_id) REFERENCES users (user_id),
  PRIMARY KEY (id)
);
SELECT * FROM table_drink;

CREATE TABLE table_symptom (
  id INT NOT NULL AUTO_INCREMENT,
  Created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  Sympotm VARCHAR(1000) NULL,
  CONSTRAINT table_symptom_fk_user_id FOREIGN KEY (user_id) REFERENCES users (user_id),
  PRIMARY KEY (id)
);
SELECT * FROM table_symptom;

CREATE TABLE table_severity (
  id INT NOT NULL AUTO_INCREMENT,
  Created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  Serverity INTEGER(2) NULL,
  CONSTRAINT table_severity_fk_user_id FOREIGN KEY (user_id) REFERENCES users (user_id),
  PRIMARY KEY (id)
);
SELECT * FROM table_severity;


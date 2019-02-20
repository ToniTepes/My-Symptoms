USE dots_db;

CREATE TABLE users (
 id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
 Created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
 user_id VARCHAR(100) COLLATE utf8_unicode_ci NOT NULL ADD FOREIGN KEY,
 first_name VARCHAR(100) COLLATE utf8_unicode_ci NOT NULL,
 last_name VARCHAR(100) COLLATE utf8_unicode_ci NOT NULL,
 email VARCHAR(100) COLLATE utf8_unicode_ci NOT NULL,
 password VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
 PRIMARY KEY (id)
 ADD FOREIGN KEY (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
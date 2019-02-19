USE dots_db;

CREATE TABLE users (
 id int(11) NOT NULL AUTO_INCREMENT,
 user_id varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 first_name varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 last_name varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 email varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 password varchar(255) COLLATE utf8_unicode_ci NOT NULL,
 created datetime NOT NULL,
 modified datetime NOT NULL,
 PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
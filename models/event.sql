DROP DATABASE IF EXISTS event_db;

CREATE DATABASE event_db;

USE event_db;

CREATE TABLE users (
  id INT AUTO_INCREMENT NOT NULL UNIQUE,
  name VARCHAR(60) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  address VARCHAR(60),
  city VARCHAR(60),
  state VARCHAR(20),
  zip VARCHAR(12),
  accept_email BOOLEAN,
  description VARCHAR(200),
  PRIMARY KEY (id)
);


CREATE TABLE events (
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(60) NOT NULL,
  address VARCHAR(60),
  city VARCHAR(60),
  state VARCHAR(20),
  zip VARCHAR(12),
  category_id INT,
  type INT,
  description VARCHAR(200),
  start_date DATE,
  end_date DATE,
  PRIMARY KEY (id)
);

-- CREATE TABLE exhibitor (
--   id INT AUTO_INCREMENT NOT NULL,
--   event_id INT NOT NULL,
--   user_id INT NOT NULL,
--   description VARCHAR(200),
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE visitor (
--   id INT AUTO_INCREMENT NOT NULL,
--   user_id INT NOT NULL,
--   event_id INT NOT NULL,
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE category (
--   id INT AUTO_INCREMENT NOT NULL,
--   name VARCHAR(60) NOT NULL,
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE rating (
--   id INT AUTO_INCREMENT NOT NULL,
--   user_id INT NOT NULL,
--   event_id INT NOT NULL,
--   comment VARCHAR(200),
--   rate INT NOT NULL,
--   PRIMARY KEY (id)
-- );
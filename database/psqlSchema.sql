DROP DATABASE IF EXISTS images;

CREATE DATABASE images;

\c images;

CREATE TABLE images (
  id INTEGER NOT NULL,
  _id SERIAL PRIMARY KEY,
  url VARCHAR(200) NOT NULL
);

CREATE INDEX ON images (id);
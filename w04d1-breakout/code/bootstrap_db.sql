
BEGIN;

  CREATE TABLE movies (
    id BIGSERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    year TEXT NOT NULL
  );


  CREATE TABLE actors (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL
  );


  CREATE TABLE genres (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL
  );


  /* Connect Actors to the movies they are in */
  CREATE TABLE castings (
    id BIGSERIAL PRIMARY KEY,
    movie_id BIGINT REFERENCES movies,
    actor_id BIGINT REFERENCES actors
  );


  /* Allow a movie to have many genres */
  CREATE TABLE movie_genres (
    id BIGSERIAL PRIMARY KEY,
    movie_id BIGINT REFERENCES movies,
    genre_id BIGINT REFERENCES genres
  );

  INSERT INTO movies (title, year) VALUES
    ('Call Me By Your Name', '2018'),
    ('La La Land', '2017'),
    ('Mad Max: Fury Road', '2016'),
    ('Get Out', '2018'),
    ('Dunkirk', '2018'),
    ('Lady Bird', '2018'),
    ('Moonlight', '2017'),
    ('Fences', '2017'),
    ('The Danish Girl', '2016'),
    ('Spotlight', '2016');


  INSERT INTO actors (name) VALUES
    ('Arnie Hammer'),
    ('Emma Stone'),
    ('Tom Hardy'),
    ('Timothee Chalamet'),
    ('Eddie Redmayne'),
    ('Alicia Vikander');

  INSERT INTO genres (name) VALUES
    ('drama'),
    ('musical'),
    ('historical'),
    ('action'),
    ('horror');


  INSERT INTO castings (movie_id, actor_id) VALUES
    (1, 1),
    (2, 2),
    (1, 4),
    (3, 3),
    (9, 5),
    (9, 6);

  INSERT INTO movie_genres (movie_id, genre_id) VALUES
    (1, 1),
    (2, 2),
    (3, 4),
    (4, 5),
    (5, 3),
    (5, 4),
    (6, 1),
    (7, 1),
    (8, 1),
    (9, 3),
    (9, 1),
    (10, 3),
    (10, 1);

COMMIT;

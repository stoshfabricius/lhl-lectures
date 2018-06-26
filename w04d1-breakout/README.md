# W04D1 (Breakout): More SQL

Duration: 1 hour

## Intro

You guys have been introduced to basic SQL, and you have already seen joins, groups and aggregates.
Total we will look at some additional tools in SQL to write more advanced queries.

## Subselects using IN clause

The IN operator allows you to specify multiple values in a WHERE clause.

```sql
SELECT movies.title
FROM movies;
```

```sql
SELECT m.title, g.name, COUNT(g.name)
FROM movies as m
INNER JOIN movie_genres as mg on mg.movie_id = m.id
INNER JOIN genres as g on g.id = mg.genre_id
WHERE g.name IN ('historical','drama', 'action')
GROUP BY m.title, g.name;
```


## GROUP BY and HAVING

If can be difficult to understand the differences between `WHERE` and `HAVING` since it appears that they provide the same functionality.
* A WHERE clause is used is filter records from a result.  The filter occurs before any groupings are made!
* A HAVING clause is used to filter values from a group.


```sql
SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)
HAVING condition
ORDER BY column_name(s);
```


The `WHERE` clause is used to filer rows from a results. For example,
```sql
SELECT *
FROM movies
WHERE year > 2016;
```

The `HAVING` clause is used to filer values that have been grouped. For example,
```sql
SELECT year, COUNT(*)
FROM movies
GROUP BY year
HAVING year > 2015;
```

Another situation the `HAVING` clause can be used over a where clause is when using aggregate functions. The `WHERE` keyword could not be used with aggregate functions.

I want to select all movies that have more than one actor

```sql
SELECT movies.title, COUNT(actors.id)
FROM movies
INNER JOIN castings on castings.movie_id = movies.id
INNER JOIN actors on actors.id = castings.actor_id
GROUP BY movies.title
HAVING COUNT(actors.id) > 1;
```
SELECT movies.title, actors.name
FROM movies
OUTER JOIN castings on castings.movie_id = movies.id
OUTER JOIN actors on actors.id = castings.actor_id;

NOTE: To be valid the having clause can only compare results of aggregated functions or column part of the group by

To summarize the difference between `WHERE` and `HAVING`:
* `WHERE` is used to filter records before any groupings take place.
* `HAVING` is used to filter values after they have  been groups.  Only columns or expression in the group can be included in the HAVING clause’s conditions..

## LIMITS and OFFSET

Also us to limit the amount of data returned

SELECT * FROM movies where name = ' + user_input + ';';

user_input = 'La La Land';
`SELECT * FROM movies where name = ${userInput};`


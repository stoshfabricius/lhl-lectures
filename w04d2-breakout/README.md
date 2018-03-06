# W04D2 (Breakout): Knex

Duration: 1 hour
---

## Intro

Let's first create the database for this breakout

```sql
CREATE DATABASE oscars;
```

## General Notes

## Starting Questions

How is everything going?

You guys have been playing with databases for a little over a week now. How are things going?

Why do we need databases?

SQL vs NoSQL (mongo)

What happens if we need to use different dialects of SQL?

## SQL Standardization

We can use SQL (Structured Query Language) in order to access and manipulate the data stored in a database.

There is an offical SQL Standard the most recent is SQL:2016 or ISO/IEC 9075:2016. Although with most standards most popular RDBMS don't implement it completey or follow it 100%.

There is also a difference between allowing a user to interact with the data in the system through SQL and the underlying inner workings of the database that also influence developers choice in RDMBS.

This means that the general workings of a RDBMS are similar but the code/queries written for one database is usually not portable to another.


For Example using the the Limit clause in MySQL and Postgres.

```sql
/* MySQL
SELECT * from movies LIMIT 5, 10;

/* POSTGRES
SELECT * FROM movies LIMIT 10 OFFSET 5;
```

## Benefits of Query Builders over raw SQL?

* Work across different SQL databases (ex. sqlite in development, postgres in production)
* Avoid SQL injection (Escaping input parameters)
* Incremental Query Building
* Migrations (not all query builders come with this)

## Intro to Knex

[Knex](http://knexjs.org/) is probably the most popular Query Builder for JavaScript.

It allows us to create queries for our database using regular JavaScript code, and then translates that to SQL queries.

A Query Builder is only a piece of a complete ORM. For example a popular ORM for JavaScript is Bookshelf. Bookshelf uses Knex as the Query builder and adds the Object mapping to create a full ORM.


Here is an example of using knex to query a movies table
```javascript
knex('movies').select().asCallback(function(err, rows) {
  if (err) {
    console.error(err)
    return
  }
  console.log(rows)
  return
})
```

## Translation from Knew to RAW SQL

From the above query we can get a pretty good idea about what the SQL would be.
But Knex also contains a method to show us the exact SQL that it would generate

```javascript
knex('movies').select().toString()
```


## Query Chaining
What did you notice above?

We wrote what looked like a query but it didn't actually execute that query on the database.

We can build query's up and chain them together depending on logic in our program

```javascript
var query = knex.select(["name", "email"]).from("users");

var email = process.argv[2];
/ if email was specified, then filter
if(email) {
  query = query.where({"email": email});
}
query.then(function(rows) {
  //...
});
```

### Connection Parameters

We are able to connect to other Database Servers running on remote machines.

## Migrations

```bash
knex migrate:make create_movies
```

You'll notice this will create a migrations folder in your root directory if you don't have one already
It will also create a new migration file with the name we passed into the command

```bash
knex migrate:make create_award_winners
```

Now we can run the migration
```
knex migrate:latest
```

## Seeds
```bash
knex seed:make movie_seed
```
You'll notice this will create a seeds folder in your root directory if you don't have one already

We can then run the seeds with


Teacher Notes

Strongly suggest demoing pre-existing code b/c #3 is a big topic that you should spend a good chunk of time talking about and demoing.

You can/should mention that the mid-term project will require them to use Knex instead of the raw SQL (pg driver) approach they saw in the lecture. It was important to practice with the pg driver directly in order to appreciate how queries are transmitted as strings.

We have not formally covered and they therefore likely don't know about the Promise pattern yet, but Knex offers this pattern as an option. Let the students know to use the callback pattern instead, so that they become more and more comfortable in working with callbacks, closures and nested scope issues.

UPDATE: The migrations piece seems to require using promises instead of callbacks. The migration activity has been updated to sidestep this by suggesting that they use it for now without fully understanding what that means and that we will cover it soon.



# W04D2 (Breakout): Knex

Duration: 1 hour

## Intro

Today we will be talking about Query Builders and Knex a popular JS Query Building Library.

We will also be talking about other common processes involving databases during development such as
* Migrations
* Seeds

## SQL (Structured Query Language)

How is it pronouced?

Either `Sequel` or (es que el). Doesn't really matter. I think the offical way is `Sequel` but both are commonly understood

We can use SQL in order to access and manipulate the data stored in a Relational Database Management System (RDBMS).

There is an offical SQL Standard the most recent is SQL:2016 or ISO/IEC 9075:2016. Although with most standards most popular RDBMS don't implement it completey or follow it 100%.

There is also a difference between allowing a user to interact with the data in the system through SQL and the underlying inner workings of the database that also influence developers choice in RDMBS.

This means that the general workings of a RDBMS are similar but the code/queries written for one database is usually not directly portable to another.

For Example using the the Limit clause in MySQL and Postgres.

```sql
-- MySQL;
SELECT * from movies LIMIT 5, 10;

-- POSTGRES;
SELECT * FROM movies LIMIT 10 OFFSET 5;
```

## Benefits of Query Builders over raw SQL?

* Work across different SQL databases (ex. sqlite in development, postgres in production)
* Avoid SQL injection (Escaping input parameters)
* Incremental Query Building
* Migrations (not all query builders come with this)
* Seeds (not all query builders come with this)

## Intro to Knex

[Knex](http://knexjs.org/) is probably the most popular Query Builder for JavaScript.

It allows us to create queries for our database using regular JavaScript code, and then translates that to SQL queries.

A Query Builder is only a piece of a complete ORM. For example a popular ORM for JavaScript is [Bookshelf](http://bookshelfjs.org/). Bookshelf uses Knex as the Query builder and adds the Object mapping in order to create a full ORM.

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

### Translation from Knex to RAW SQL

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

Therefore we need to tell knex what time of database we are connecting to so it can use the correct adapter, where the database is located and who we want to connect to the database as.

We can pass this information seperatly in an object or some databases support a string connection string that contains the same data

Knex allows us to keep this information in a special file called a `knexfile.js` located at the root of out project

## Migrations

[Migrations](https://en.wikipedia.org/wiki/Schema_migration) are a way for us to keep track of changes to the database schema (the "shape" of the database) over time, in sync with our changes to our applications code.

Once you've committed and pushed a migration, you should not change it! You need to create a new one.

Knex has a CLI program that helps you create migrations and run them forwards and backwards.

We can create the movies table in our database with our first migration

```bash
knex migrate:make create_movies
```

You'll notice this will create a migrations folder in your root directory if you don't have one already
It will also create a new migration file with the name we passed into the command

Now we can run the migration
```bash
knex migrate:latest
```

If we want to reverse the effects of a migration we can run
Now we can run the migration
```bash
knex migrate:rollback
```

Migrations are important when working in a team setting as they capture the changes to your database over time


## Seeds

```bash
knex seed:make movie_seed
```
You'll notice this will create a seeds folder in your root directory if you don't have one already

We can then run the seeds with
```bash
knex seed:run
```

This will run all the files in your `seeds/` folder in alphabetical order

## Going Forward

Most Modern Web App Frameworks now either contain an ORM / Query Builder or a popular libaray has emerged.
|Language|Web Framework | ORM |
|--------|--------------|-----|
| Node   | Express      | Sequelize |
| Ruby   | Rails        | Active Record |
| Python | Django       | Django ORM |
| Java   | Spring       | Hibernate |
| Elixir | Phoenix      | Ecto  |

In your midterm project you will be using Knex as opposed to raw SQL. It was important to start with raw SQL and the pg driver to understand how things are working at a lower level, but day to day you'll probably end up using a library as opposed to raw SQL.

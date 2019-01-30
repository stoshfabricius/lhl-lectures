# W02D1 (Breakout): Accessing APIs with Node

Duration: 1 hour

## Learning Outcomes

1. See how a senior dev approaches building a small Node app that accesses an existing public API through Node and refactors the code into clean functions and modules.

## Intro

What is an API? (Besides being the most commonly used term in development right now.)

API stands for Application Programming Interface. This is a very broad term that can be applied to many different things. For example
  * JavaScript has a nice API for handling strings
      - It provides a simple and clear way to work with string data
  * Stripe is a company that provides an API to allow you to charge a credit card

An API is a series of well defined methods that we can use to create software applications.

We can treat API's as building blocks, and combine large numbers of them to create complex applications which lots of features.

## Working with APIs

When we use

## Accessing Remote APIs

Nowadays it as been extrememly popular to contact api over the internet. This allows us to make HTTP calls to remote machines and have them preform
some task for us. This could be image resizing, charging credit cards, sending emails, etc.

When we access remote API's on another netowkr we need to make a network request, and the common protocol to use is http.

Therefore it is important to understand how http works since it is the way that we make a request to a remote API.

### Data Types

We using http the body of the request is just a big long string.
Therefore we need to agree with the remote service on what the format of that string would be.

A very popular format nowadays is JSON (JavaScript Object Notation)
```
{
  "message": "Hello World",
  "age": 25
}
```

Another common format is XML
```
<xml>
  <MESSAGE>HELLO WORLD</MESSAGE>
  <AGE>25</AGE>
</xml>
```

### Status Codes

It's very important to understand the http status codes and the their values

* 2XX - ok
* 3XX - redirect
* 4XX - User Error
* 5XX - Server Error

### Authentication

As the provider of an API. How can we limit use to the service and make sure we only allow authenticated users to access the service.

There are several ways we can do this

  * Provide a special `token` in the headers of out api request
  * Whitelist the ip's that we allow
  * Ask for a username and password (http basic auth)

  A very popular method is called Bearer Token Authorization
  This means the provider of the API will issue you a special token string.
  By being the bearer of this token you have idenitified your self to us.
  Therefore it is important to keep this tokens secret since if someone else where to have the token, they could impersonate you.


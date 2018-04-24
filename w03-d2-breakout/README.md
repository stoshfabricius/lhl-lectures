# W03D2 (Breakout): A friendly but fast introduction to jQuery

Duration: 1 hour

## Intro

Today we will look at jQuery, it's history, why it exists and how to use it.

Before we talk about what jQuery is, we need to pretend we are back in early 2006 and looking to create a website

We need to create this website to work on all browsers and it has some interactive components that will require the use of client side code (JavaScript) to provide that functionality

John Resig released jQuery on August 26th, 2006 and changed the front-end development landscape forever.

## Why does jQuery Exist

* Cross Browser Compatibility
  - *Problem:* Browsers execute JavaScript in a slightly different ways and provide differing Browser APIs, so we need to make sure that something that works on Chrome as works on IE 8.
  - *Solution*: jQuery handle making our code cross platform since it abstracts away the calls to native Browser Apis
  - *Note*: This is largely a non issue now

* It provides us nice "syntactical sugar"
  - For example making an Ajax request, (you will see this the rest of the week)
  - Using CSS selectors in order to target elements on the DOM

Code that works in all browsers (with jQuery)
```javascript
$.getJSON('/my/url', function(data) {
  console.log(data)
});
```

Code that works in all Browsers (no jQuery)
```javascript
var request = new XMLHttpRequest();
request.open('GET', '/my/url', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var data = JSON.parse(request.responseText);
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();
```

What looks Better

* jQuery become so popular it created it's own ecosystem
    - We teach it becuase it's popular
    - There are tons of plugins that use jQuery
    - Full Fledged UI pre built UI components exist for jQuery

## How Much additional behaviour does jQuery add to the Browser

NONE!

It works within the constraints of what the browser API can do for us, and just provides a corss browser way to access the functionality and a much nicer syntax

## Is jQuery a Library or a Framework

You will hear jQuery called many things, but usually it happens to be either a `library` or a `framework`.
* `I'm building my web app with jQuery`
* `I'm using jQuery in my app`

A Framework provides you all the tools required to build an application.

A Library is a piece of Code that you can add to your code base to include additional functionality.

jQuery is a library. It provides additional functionality to you in an unopionated may. jQuery can be use within a Framework to provide some functionality but it is not a Framework on it's own.

## What is `$` or jQuery() in code

```javascript
jQuery()
$()
```
They are the same thing! $ is an alias to jQuery.

Lets take a peak in DevTools and see it work

## jQuery vs jQueryUI

jQuery is a library that enables us to interact with the DOM and access Browser API's.

We can use jQuery to build larger items in our Application (Components) for Example
  * Dropdowns
  * Accordian Menus

 Someone else has already done this for us.

 [jQueryUI](https://jqueryui.com/), is another library on top of jQuery that provides prebuilt interactive Components

## Why is it important to learn jQuery

jQuery is probably the single most popular library JavaScript library in use today.

There are hundreds of thousands of applications built with jQuery, and they are all still running on the web today
[LibScore](http://libscore.com/#jQuery)

Next site you go to, type `$` in devTools and see if it resolves to something

Let's play with some jQuery

## Alternative to jQuery
  * [Plain JavaScript](http://youmightnotneedjquery.com/)
  * Zepto
  * jqLite

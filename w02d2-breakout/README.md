# W02D2 (Breakout): ES6

Duration: 1 hour

## Intro

Brendan Eich wrote JavaScript in 10 days, in May 1995. This was a result of the necessity of an interpreted language for the ever growing web. Netscape Navigator shipped with the first implementation of LiveScript in September which was later remnamed to JavaScript for the December release.

In November 1996, Netscape submitted JavaScript to ECMA International (European Computer Manufacturers Association) to carve out a standard specification, which other browser vendors could then implement. This led to the official release of the language specification ECMAScript in June 1997. At the time JavaScript was the most well known implementation, ActionScript (Adobe) and JScript (Microsoft) where other well-known implementations of ECMAScript at the time.

The choice of the name JavaScript has caused confusion, giving the impression that the language was a spin-off of the Java programming language, and the choice has been characterized as a marketing ploy by Netscape to capitalize on the popularity of Java at the time.

Between 1997 and 2005 JavaScript existed and continued to improve. New versions were released (ES3 in December 1999 being a major one), browsers were implementing some of the features, but there was some drama between key figures in the commmunity around the direction of standardization. Some groups where advocating for new features to the languge that would not be backwards compatible. Others saw this as something that would `break the web` and fought against it.

In 2005 the open source community defined Ajax which lead to the development of jQuery. This was a huge milestone in the advancement of the web as a platform for applications. Four years later, at the end of 2009 a compromise about the direction of the language was reached and ECMAScript 5 (ES5) was released.

Most browsers now implement all features of ES5 so it is the common assumed version of the language and the target for most compile to JS code in order to run across a majority of browsers.

The 6th edition, ES6, officially known as ECMAScript 2015, was finalized in June 2015. This was a large update that added many of the new features orignally proposed between 1997 and 2005. It contains may powerful features that have lead to increased popularity. However browser support for ES2015 is still incomplete so most Code written today in ES6 is converted back into ES5 code through a process called transpiling in order to ensure it will run in most browsers.

Since ECMAScript is a specification and not a languge each maker Browser Developer has implemented the spec in their own way leading to multiple JavaScript Engines. This means that our code may run slightly differently depending on which browser our client side JavaScript is run in.

| Corporation | Browser | JavaScript Engine |
|-------------|---------|-------------------|
| Mozilla     | Firefox | SpiderMonkey      |
| Google      | Chrome  | V8                |
| Microsoft   | Edge    | Chakra            |
| Apple       | Safari  | JavaScriptCore    |

It is important to note that V8 is the same JavaScript engine that we find in NodeJS.

Here is a link showing what features of ES6 are implemented in which browser https://kangax.github.io/compat-table/es6/.

## New Versions of ECMAScript

* The Seventh Edition, ES7, offically known as ECMAScript 2016 was finalized in June 2016. It was a much smaller update then ES6.

* The Eighth edition, ES8, officially known as ECMAScript 2017, was finalized in June 2017, A new major feature in this edition is `async/await` which you guys will see in an advanced lecture in weeks 9/10.

* You may also see the term `ES.Next` this is used to refer to whatever the next version is at time of writing. This mostly contains proposals of new features to be included in future ECMAScript specs.

## Transpiling and Polyfills

So now that everyone is confused about what version of JavaScript is what, what if I said it doesn't really matter anymore.

We want to write code that follows a standard and acts predictably no matter the browser that it is run in.

There are a few solutions currently in use today to make up for the lack of language/feature support in browsers.
  * We can write ES6 code and then **transpile** it to ES5 which is supported by modern browsers.
  * A library that provides support for a feature that isn't supported by the browser yet is called a polyfill. A polyfill will check to see if the browser supports the feature it is meant to fill in for. If the browser doesn't support the feature then the polyfill will fill in to provide support.

A very common tool used to transpile newer JavaScript back to ES5 is [Babel](https://babeljs.io/)

## Features of ES5
---

### 'use strict'; (Strict Mode)
The 'use strict'; directive is a feature that has existed since ES5. It is important enough to make specific mention of before we move on to ES6. When defined at the top of a .js file the interpreter will handle the execution of the code contained in that file in a strict way.

For example:
  * Can no longer do variable assignment if the variable hasn't been defined with var. Without strict the variable would be created on the global scope.
  * Usage of eval is restricted.
  * The with(){} statement is no longer usable. (A feature so poorly designed they have outlawed it)

You can start a specific function with 'use strict'; and only exection within the function scope will be handled in a strict way.

It is up to you if you want to use this (not a bad idea in my opinion). If you come across it, it is important to understand why it is there.

## Key Features of ES6
---

Now that we have the history of JavaScript out of the way and everyone is sufficienlty confused about what version of the langugae we are using we can talk about some of the new features in ES6 (offically ES2015).

ES6 has been well received by the development commmunity and most project starting today will incorporate some features of ES6 in their JavaScript code base if not writing all code in ES6.

### let, const, var

Up until ES6 we only had the function scoped `var`. With ES6 come two new ways to declare variables. If we would like to be more specific with our scoping of a variable we can use `let`. The `let` keyword declares a variable to be in scope only within the block it is declared.

Examples of a block:

```javascript
for(let i = 0; i < 10; i += 1) {
  // i is only available within for-loop
}

if(true) {
  let i = 0;
  // i is only available within if statement
}

let i = 0;
{
  let i = 1;
  // i is 1 inside this block statement
  // used very rarely
}
```

We can use `const` to specify that we want to prevent re-assignment of a variable. We can still modify the values inside an object or array, we simply cannot assign to the variable a different value. Variables declared with `const` are block scoped.

```javascript
const obj = {
  changeable: 'unchanged'
}

console.log(obj);

obj = 'unchangeable'; // produces a TypeError

obj.changeable = 'changed';

console.log(obj);
```

The `var` keyword will live on, but you should be able to write new code using `let` and `const` primarily.

- [let - MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [const - MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [var - MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)

### for...of or for...in

The `for...of` statement is used to **interate** over **iterable** objects. The most common iterable objects would be `Array, String, Set and Map`. You can also create your own objects that are iterable. 

```javascript
const list = [1, 2, 3, 4];

for(const item of list) {
  console.log(item);
}
for(let item of list) {
  item += 1;
  console.log(item);
}
```

- [for...of - MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

It is easy to confuse this with `for...in` which is used to interate through the properties of an object. The two will behave quite differently, for example you cannot call `for...of` on an object.

### Template Literals

With normal strings you tend to concatenate a lot of variables.

```javascript
const date = {
  dow: 'Tuesday',
  day: 14,
  month: 'February',
  year: 2017
};

console.log('The date today is ' + date.dow + ' ' + date.month + ' ' + date.day + ', ' + date.year);
```


If you use a template literal then the code becomes a bit more clear.

```javascript
console.log(`The date today is ${date.dow} ${date.month} ${date.day}, ${date.year}`);
```

You could include any JavaScript expression you want inside the braces.

```javascript
console.log(`100 * 200 = ${100 * 200}`);
```

- [Template Literals - MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

### Arrow Functions

Two factors influenced the introduction of arrow functions: shorter functions and non-binding of this.

Standard anonymous function passed as an argument to the Array.prototype.map function.

```javascript
[1, 2, 3, 4].map(function(value) {
  return value * value;
});
```

We could use the short-hand arrow function instead.

```javascript
// in this case we remove the function keyword and add the arrow
[1, 2, 3, 4].map((value) => {
  return value * value;
});

// if there is a single parameter and a single expression within the function, we can omit the parenthesis and return keyword
[1, 2, 3, 4].map(value => value * value);
```

Other than syntactic sugar the major difference between regular function declarations and arrow functions is how they handle `this` context. Unlike a regular function declaration, an arrow function inherits `this` from the scope it is declared in. See the comments in the code examples for more details

Oh, and don't forget. Arrow functions are **always** anonymous.

- [Arrow Functions - MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## More ES6

We were only able to cover a few of the useful features of ES6. There are plenty more. A good place to check out a list is http://es6-features.org/
  * Class Syntax
  * Generators
  * Promises
  * Destructuring Assignment
  * Modules
  * Enhanced Object Properties


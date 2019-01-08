# W01D2 (Breakout): Scope

Duration: 1 hour

## Intro

You guys have started to write some small programs in JavaScript and now you are ready to learn about some new important concepts
* Functions as values
* Reading Code
* Scope, in general and in JavaScript

## Functions as Values

In JavaScript functions are first class objects (also sometimes referred to as first class citizens).
That means that they can be saved to variables and passed around like other primitive data types (ex. number, string).
We'll go over how and why this is important in code examples

## Reading Code

Reading code is a very important skill. It requires a different skills compared to writting code, but is equally important.

Code is read 10x more often then it is written!
  * Code Reviews
  * Evaluating code
    - 3rd Party Libraries
    - Security Reviews
  * Fixing Bugs
  * Learning new things

### How does one read code?

  When reading code it's not as simple as reading from the top of a file to the bottom

  Code flow can be a little convoluted. Control flow mechanisms like `if-else`, and `for` change the control flow, skipping over some code and repeating other code.

  There could be a function call in on file, using a function defined in another file

  We could import some code from another file into the current file.

  We could be dealing with an asyncronous language like JavaScript which means that just one line on code is below another in a file doesn't mean that they will be executed in that order.

### Reading Code like a Computer

  It's important to understand how computer read and interpret code since they are the ones that will be executing our programs

  How do computers read code.

  It all depends on the language, and the corresponding compiler / interpreter.

  For JavaScript

  The computer takes a quick run over the file to see what exists
    * Functions declared using function declaration
    * Variables defined with var are hoisted in their current scope (more on this to come)

  It will then start at the top of the program and work it's way down a file following the flow of the code not line by line!.

  Just beacuse you can write does not mean that you can read it, IT TAKES PRACTICE!


## Scope

### What is Scope?

Anyone who has previous programming experience, scope in JavaScript may differe from what you understand scope to be as scope differs from language to language

Scope controls the visability and lifetimes of variables and parameters.
Put more simply **Scope** is the area where a variable is available

This is important when programming as it reduces name collisions and provides automatic memory management.

The Scope of where a variable is defined differs depending on the language you are working and it can even differ within the language depending on how the variable is declared.

There are a couple different types of common Scope implementations.

### Block Scoped

Everytime we see a new block of code, denoted with the {}, it creates a new scope
This is true for languages such as C and Java

Here is some example C code
```c
#include <stdio.h>

int main(void)
{
  /* This is the highest scope inside main */
  int x = 0;
  {
    /* This is a new scope */

    /* This variable x shadows the outer x variable */
    int x = 1;

    printf("This is value of x: %i within the block\n", x);
  }
  printf("This is value of x: %i after the new block is done\n", x);
}

/* This is value of x: 1 within the block */
/* This is value of x: 0 after the new block is done */
```

JavaScript can be block scoped when declaring variables using `let` and `const` which you will see in the coming weeks.
Don't worry about it now.

### Lexically Scoped

When using `var` javascript scopes variables lexically

Lexical Scope: A new scope is created for each function and we have access to the Scope Chain

"functions are executed using the scope chain that was in effect when they were defined"

**Lexical Scoping**: defines how variable names are resolved in nested functions: inner functions contain the scope of parent functions even if the parent function has returned.

## Scope Chain

Scopes enclose each other, if a scope is enclosed by a another scope, the enclosed scope will have access to the parents scope

Again this is becuase of `var`

## The power of Scope

Within a function try to declare all of your variable at the start of the function since no matter what they will all be available in the function no matter where they are defined

Scope allows an inner function to get access to the parameters and the variables of the function it was defined within. This is a very powerful feature of JavaScript
An innner function has access to the context in which it wa created

This is refered to as **Closure** and you will see more of it in the coming weeks.

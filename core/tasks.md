1. Explain Node and V8 in your own words ? 
// Answer here...
node is a javascript platform to run javascript out of the browser and its build using the google chrome powerful v8 engine which is used for core js computation.

2. Explain steps in REPL(here) and command to start REPL ?
// Answer here...you have type node in terminal to start REPL


3. Run `index.js` in the same directory as script writer using `node FILE_NAME.js` and output result of console here.

output: hello world

4. Require fs module and read `theory.md` using fs.readFile method in index.js file.

5. Explain Buffer and different methods to create a buffer ?

Buffer is a class used to handle raw binary data, each buffer corresponds to raw memeory allocated outside v8 .

methods to create buffer:

var buff = new Buffer("buffer creation");//creating new buffer

var buf = new Buffer(20);//defining length of buffer in characters

buf.toString()  //reading content from buffer

6. What is blocking code ? How is it different from non-blocking/async codes ? Correct blocking code in index.js to run asynchronously ?

// Answer here ...blocking code is the code that block execution of call stack in js until the current block of execution ends.

7. Request from browser `https://altcampus.io` and copy request, response and general headers into answer.js.

8. Parse the URL `http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4` using `url` module's parse method and write output in answer.js

9. parse the query object as well from above url using `url.parse(url, true)` and output result in answer.js

10. create a file `math.js`
  1. Export variables and functions
    - define a const pie = 3.14
    - define functions to add and multiply 2 numbers
    - export it from math.js
    - require in index.js and console the output by executing it there.
```js
// math.js
const pie = 3.14;
function sum() {}
function multiply() {}
// export it from math.js
```

  2. Define above const and functions as properties and methods on module.exports object.
    - require in index.js and execute it.

```js
  module.exports = {
    pie: 3.14,
    add: () => {}
  }
```
  3. Define above using exports 

```js
exports.sum = () => {}
```

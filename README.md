# <aio-calc>
<This is a npm package. which we can install in nodejs environment by executing "npm install aio-calc" command. This package is under development. Basically this package will contains all the methods for calculating mathematical problems like addition, subtraction, multiplication, division and so on.

All availables methods list:
   - add
   - sub
   - multi
   - div
   - abs
   - isNullOrEmpty
   - mod


adding more methods>

## Usage
Install the package using npm :
 npm install aio-calc --save

Then, require the package and use it:
 [Comment: To check if this usage is proper]
 var math = require('Math');
 console.log(math.isNullOrEmpty("")); // true
 console.log(math.isNullOrEmpty("Hello World")); // false

 console.log(math.add(2,2)); // 4
 console.log(math.add(2,2,2,5)); // 11

 console.log(math.sub(2,1)); //1
 console.log(math.abs(-20)); // 20
 console.log(math.abs(20)); //20
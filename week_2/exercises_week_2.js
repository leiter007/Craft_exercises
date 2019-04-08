//JAVASCRIPT: EXERCISE #1

//1) Array with three numbers
let myArray = [1 ,2, 3]

//2) How to return second number
myArray[1]

//3) What data type is 123/12? "Things in quotes!"? undefined?
typeof(123/12) //number
typeof("things in quotes") //string
typeof(undefined) //undefined

//4) Simple if function
function testName(name) {
    if (name == "Felix") {
        return "correct";
    } else {
        return "not-correct";
    }
}
testName("Felix")
  //Will return "Correct"

//5) Putting array values into a new array
let myArray = ['Thomas', 'Amber', 'Raoul']
let emptyArray = []

for (let n = 0; n < myArray.length; n++){
  emptyArray[n] = myArray[n];
}


//JAVASCRIPT: EXERCISE 2
//OLD ES5 METHOD
function Person(first, last) { 
    // create "constructor"
    this.first = first;        
    // public variables -- reference current object
    this.last = last;

    this.setName = function(first, last){ 
        // public function
        this.first = first;
        this.last = last;
    }
}

Person.prototype.fullName = function() { 
    // extend prototype
    return this.first + ' ' + this.last; 
    // even at runtime!
}

var bob = new Person("Thomas", "Ochman"); 
// "new" creates an object
bob.fullName();               
// "Thomas Ochman"

//NEW ES6 METHOD - Using constructor method
class Person1 { 
  constructor(first, last) {
    this.first = first
    this.last = last
    }

  fullName () {
    console.log(`${this.first} ${this.last}`)
  }
}

thomas = new Person1("Thomas", "Ochman")
thomas.fullName() 
//Should also return "Thomas Ochman"
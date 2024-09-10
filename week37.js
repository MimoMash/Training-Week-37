/*
    Hi.
    This is a set of exercises
    The idea is to practice a few things at a time.
    You do this by entering your answer after a task is given (see the example)

    DO NOT change any provided code unless the task specifically tells you to.
*/

/*
    Task: Example
    Write code to print all the names in the list, one name per line
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"]

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}


/*
    Task: A
    Write code that prints the sentence "Debugging is like being a detective in a crime drama where you are also the murderer" 
    100 times. 
    Remember we use console.log() to print things out.
*/
console.log("Task: A");
const sentence = "Debugging is like being a detective in a crime drama where you are also the murderer";
for (let i = 0; i <= 100; i++) {
    console.log(sentence);
}


/*
    Task: B
    The following code is incorrect, can you fix the errors?
    This one isn't that simple, there are syntax errors and logical errors.
    Try to think about what we are trying to achieve.
*/
console.log("Task: B");

const max = 99;
for (let index = max; index > 0; index--) {
    console.log(index + " bottles of soda on the shelf");
    console.log(index + " bottles of soda on the shelf");

    console.log(
        "Take one down, pass it around." + " " + (index - 1) + " bottles of soda on the shelf"
    );
    console.log("");
}

console.log("No more bottles of soda on the shelf");


/*
    Task: C
    Declare a variable for gravity, a variable for pi, and a variable for the number of people in a room. 
*/
console.log("Task: C");
let g;
let pi;
let peopleInRoom;



/*
    Task: D
    Create a function that adds two numbers, the function should be named add
*/
console.log("Task: D");

function add(a, b){
     const sum = a + b
     return sum
}

console.log("3 + 6 = " + add(3, 6));
console.log("5673 + 234 = " + add(5673, 234));

 /* 
 Comments & Questions:
 one thing im curious about is the having sum vs having no sum inside the function. As in if you only say return a + b, the function still works, but intuitively i want to
 put sum in there to give clarification for the value we are returning. Is there a benefit of doing it the way i did it, or could you just exclude initializing sum in the function?
 */



/*
    Task: E
    Use the variable people from the example and print the names in reverse order (using a loop)
    NB: You should not change people, just use its contents.
*/
console.log("Task: E");

for (index = people.length - 1; index >= 0; index--) {
    let person = people[index];
    console.log(person);
}


/*
    Task: F
    Declare a variable for a list of phone numbers. Your list should have at least 3 numbers. 
*/
console.log("Task: F");

let phoneNumbers = [11223344, 11332266, 88997722];


/*
Comments & Questions:
Maybe its a trick question or i'm missing something, but when we declare a variable, we haven't assigned any value(s) to it yet. 
But when we specify there should be room for 3 items in the list what's the line on declaring and initializing. In my mind, declaring the list would be something like
let phoneNumbers = [,,,]; or something like this. I did do it like this first, but the next task requires values so i thought i might be crazy?

/*
    Task: G
    Print only the last phone number in your list from Task F
*/
console.log("Task: G");

console.log(phoneNumbers[phoneNumbers.length - 1]);


/*
    Task: H
    Print only the last names of the people in the list, using a loop.
*/
console.log("Task: H");

let peopleNames = [["Christian", "Simonsen"],["Tony", "Bergholtz"]];

    for (i = 0; i < peopleNames.length; i++) {
        let lastName = peopleNames[i][peopleNames[i].length - 1];
        console.log(lastName);
    }

/* 
Comments & Questions:
Felt really good solving this one, things actually made sense in my head on what I wanted to achieve.
*/
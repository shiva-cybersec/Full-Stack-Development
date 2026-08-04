// *****************************************************
// ******** Object Oriented Programming (OOP) **********
// *****************************************************


// 1) Introduction to OOP (Why OOP?)
// OOP = Object Oriented Programming.
// Used to organize big projects into smaller, easier-to-manage parts.

// Benefits:
// a) Modular = break a large project into small classes/files.
// b) Easier to manage = easier to find, fix, update, or add new features.
// c) Scalable = project can grow without making the code messy.
// d) Code Reusability = write code once and use it again and again.
// e) Better organization = related data and functions stay together.
// *****************************************************





// 2) Objects, Classes, new, constructor and prototype
// Object: ********
// Used to store information about one particular person, place, thing, etc.

// Example:
// const person = {
//     name: "Shiva",
//     age: 27
// }


// Class: ********
// A class is a blueprint or factory for creating similar objects.
// One class can create many objects of the same type.
// By convention, the first letter of a class name is capital.
// Class names do not use ().
// () is only used when creating an object with new.


// new ClassName(): ********
// new = creates a new empty object from the class.


// Constructor: ********
// constructor() is a special method.
// It runs automatically whenever a new object is created using new.
// Used to give initial values to the object.
// Constructor is optional, but using it is a good practice.


// Prototype: ********
// Prototype = a shared place to store common properties and methods.
// Every new object created from the class can use them.
// All objects share the same prototype, so only one copy is stored in memory.
// *****************************************************





// Example 1: Factory that creates Pepsi bottles
class PepsiMaker {
    constructor() {
        this.liquid = "black";
        this.bottle = "plastic";
    }
    pack() {
        console.log("One bottle of Pepsi created");
    }

}

let bottle1 = new PepsiMaker();
// new creates a new object.
// constructor() runs automatically.
// bottle1 stores the new object.







// Example 2: Factory that creates Burgers
class Burger {

    constructor() {
        this.bread = "brown";
        this.meat = "chicken";
        this.vegetables = ["onion", "tomato", "chilli", "spinach", "cucumber"];
        this.butter = true;
        this.noOfBread = 2;
    }

    createBread() {
        console.log("Cooked and prepared your burger");
    }
    pack() {
        console.log("Your order is packed");
    }
    deliver() {
        console.log("Order is sent to your address");
    }

}

let order1 = new Burger();







// Example 3: Factory that creates Books
class Book {
    constructor(bookName, pages, author, reference, tableOfContents, price, quantity) {
        this.bookName = bookName;
        this.pages = pages;
        this.author = author;
        this.reference = reference;
        this.tableOfContents = tableOfContents;
        this.price = price;
        this.quantity = quantity;
    }

    create() {
        console.log("Created a book");
    }

    pack() {
        console.log("Packed your order");
    }

    deliver() {
        console.log("Delivered the product");
    }

}

let ord1 = new Book(
    "Science",
    1000,
    "Shiva Pradhan",
    "Google",
    ["a for apple", "b for ball", "c for cat"],
    2500,
    100
);







// Example 4: Factory that creates Phones
class PhoneMaker {
    constructor(brand, model, color, storage, price) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.storage = storage;
        this.price = price;
    }

}

// Shared prototype property
PhoneMaker.prototype.camera = true;

// Shared prototype method
PhoneMaker.prototype.call = function () {
    console.log("Yes, calling works.");
};

let newphone1 = new PhoneMaker(
    "iPhone",
    "14 Pro Max",
    "Black",
    "256GB",
    "200000"
);

// Calling the shared prototype method
newphone1.call();

// Accessing the shared prototype property
console.log(newphone1.camera);
// *****************************************************
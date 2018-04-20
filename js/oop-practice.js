/*eslint-env browser*/

/*//STEP 1
function Cat() {
    "use strict";
}

var Dog = function () {"use strict"; };

//STEP 2

var cat1 = new Cat();
var dog1 = new Dog();

//STEP 3

function Animal() {
    "use strict";
    window.console.log("The Animal has been created");
}

//STEP 4

function Animal1(animal) {
    "use strict";
    this.animal = animal;
    window.console.log("The " + this.animal + " has been created");
}

var myAnimal = new Animal("Dog");*/

//STEP 5

/*function Animal(type, breed, color, height, length) {
    "use strict";
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
   
    //step 6
    var x;
    for (x in this) {
        window.console.log(this[x]);
    }
}

//step 7
Animal.prototype.speak = function () {
    "use strict";
    if (this.type === "dog" || this.type === "Dog") {
        window.console.log("The " + this.color + " dog is barking!");
    } else if (this.type === "cat" || this.type === "Cat") {
        window.console.log("The " + this.color + " cat is meowing!");
    }
};

var myAnimal = new Animal("Dog", "Golden Retriver", "golden", "20 in", "45 in");
myAnimal.speak();*/

/*//step 8

function Animal(type, breed, color, height, length) {
    "use strict";
    var type = type;
    var breed = breed;
    var color = color;
    var height = height;
    var length = length;
   
    var checkType = function () {
        if (type === "dog" || type === "Dog") {
            return "dog";
        } else if (type === "cat" || type === "Cat") {
            return "cat";
        }
        
    };
        
    this.speak = function () {
        var animal = checkType();
        window.console.log("The " + animal + " has made a noise!");
    };
}

var myAnimal = new Animal("Dog", "Golden Retriver", "golden", "20 in", "45 in");
myAnimal.speak();


//step 9

var findWords = function (text, word) {
    "use strict";
    this.text = text;
    this.word = word;
    
}

findWord.prototype.findWord = new String(text, word) {
    "use strict";
    var str = text.match(/word/g);
    var number = str.split().length;
    window.alert("The " + word + "was " + number + " times")
    
};


var findWord = new String();




String.prototype.distance = function (char) {
    var index = this.indexOf(char);

    if (index === -1) {
        alert(char + " does not appear in " + this);
    } else {
        alert(char + " is " + (this.length - index) + " characters from the end of the string!");
    }
};

"Hello".distance("H");*/



String.prototype.findWords = function (word) {
    "use strict";
    var strtext = this;
    //window.console.log(strtext);
    //window.console.log(word);
    var times = 0, pos = 0;
    var l = strtext.length;
    do {
        pos = strtext.indexOf(word);
        if (pos !== -1) {
                times = times + 1;  
                strtext = strtext.slice(pos + 1, l)
            }         
    } while (pos !== -1);

    //var str = strtext.match(/word/g);

    window.alert("The " + word + " was " + times + " times");
};

"San Diego is in California. California is in USA".findWords("California");















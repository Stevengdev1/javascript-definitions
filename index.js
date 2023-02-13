/*
//TITLE: FUNCTIONS

//FUNCTION DECLARATIONS
function calcAge(birthYear) {
  return 2037 - birthYear;
}

//FUNCTION EXPRESSION
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

//ARROW FUNCTION remove the need to type out the keyword function every time you need to create a function. Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function body surrounded in { }

  const calcAge = birthYear => 2037 - birthYear;

---------------------------------------------------------------------------------------------------------------
//EXAMPLE: IN AN OFFICE ARRANGED OF SHAPED LIKE A GRID, WE CAN USE A FUNCTION TO CALCULATE THE NUMBER OF MONITORS NEEDED.
function monitorCount(rows, columns)  {
  
  return rows * columns; //The return keyword is powerful because it allows functions to produce an output. We can then save the output to a variable for later use.
}
  const numOfMonitors = monitorCount(5, 4);
 console.log(numOfMonitors)
 
 //TITLE: HELPER FUNCTIONS
 //EXAMPLE 1
 
 function monitorCount(rows, columns) {
   return rows * columns;
  }
  function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200;
  }
  const totalCost = costOfMonitors(5, 4)
  console.log(totalCost);
  
  //EXAMPLE 2 
  
  function multiplyByNineFifths(number) {
    return number * (9/5);
  };
  function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
  };
  multiplyByNineFifths(1)
  const totalTemp = getFahrenheit(15);
  console.log(totalTemp)
  
  //EXAMPLE 3
  
  function descendingOrder(number) {
    if (number === 0)
    return 
    console.log(number);
    descendingOrder(number - 1);
    
  }
  descendingOrder(5)
  
  -------------------------------------------------------------------------------------------------------------
//ARROW FUNCTIONS USING AN ARRAY

  const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}                                                                                      //arrow function
const bills = [125, 555, 44];                                                         //1st array
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];               //2nd array

console.log(bills, tips)


const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];        //3rd array
console.log(totals)


  -------------------------------------------------------------------------------------------------------------
  //TITLE: ARRAY METHODS: .push() .pop() .join() .slice() .splice() .shift() .unshift() 
  const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
  
  groceryList.shift();
  
  console.log(groceryList);
  
  groceryList.unshift('popcorn');
  
  console.log(groceryList);
  
  console.log(groceryList.slice(1, 4));
  
  console.log(groceryList);
  
  const pastaIndex = groceryList.indexOf('pasta');
  
  console.log(pastaIndex);
  
   
//EXAMPLE:  This array of strings transforms into a secret message by putting array methods in practice.  
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '2023,', 'Steven', 'Garcia,', 'Learn', 'JavaScript'];

// console.log(secretMessage.length)      //used to check the length of the array.
secretMessage.pop();                      //used to remove the last string.
// console.log(secretMessage.length)      //used to compare the length of the array to what it originally was. 
secretMessage.push('to', 'Program')       //used to add 2 separate stings.
secretMessage [7] = "right";              //used to change the word 'easily' to 'right'
//console.log(secretMessage)
secretMessage.shift()                     //used to remove the first string of the array.
// console.log(secretMessage)
secretMessage.unshift('Programing')       //used to add the string 'Programming' to the beginning of the array.
// console.log(secretMessage)
secretMessage.splice(6, 5, "know")        //used to remove strings: get,right,the,first,time & replace w/ know.
// console.log(secretMessage)
console.log(secretMessage.join(' '))      //used to print the secret message as a whole sentence.
  

--------------------------------------------------------------------------------------------------------------
//NESTED LOOPS 
const bobsFollowers = ['Jim', 'Bob', 'Charly', 'Tom'];
const tinasFollowers = ['Jim', 'Bob', 'Amanda'];
const mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i])
    }
  }
}
--------------------------------------------------------------------------------------------------------------
//ITERATION METHODS (ITERATORS)
//-------.forEach() Method-------//
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(function(eachFruit) {
  console.log('I want to eat a '+ eachFruit);
});


//-------.map() Method-------//
const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animalList => {
  return animalList[0];
})

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(newDigits => {
  return (newDigits / 100);
})


//-------.filter() Method-------//
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers = randomNumbers.filter(number => {
  return number < 250;
})

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter(
  word => {
    return word.length > 7;
  })


  //-------.filter() Method-------//
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(number => {
  return number < 250;
})

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(
  word => {
    return word.length > 7;
  })


    //-------.findIndex() Method-------//
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(someAnimal => {
  return someAnimal === 'elephant';
});

const startsWithS = animals.findIndex(theAnimal => {
  return theAnimal[0] === 's' ? true : false;
});


    //-------.reduce() Method-------//
const newNumbers = [1, 3, 5, 7,];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue);
return  accumulator + currentValue
}, 10)
console.log(newSum())
--------------------------------------------------------------------------------------------------------------
//HIGHER-ORDER FUNCTIONS

(FUNCTIONS AS DATA)

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

// Write your code below
const isTwoPlusTwo = 
checkThatTwoPlusTwoEqualsFourAMillionTimes;

isTwoPlusTwo()

console.log(isTwoPlusTwo.name);


(FUNCTIONS AS PARAMETERS)

const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
  let checkA = val + 2;
  let checkB = func(val);
  return checkA === checkB ? func(val) : 'inconsistent results';  
}

console.log(checkConsistentOutput(addTwo, 10));
--------------------------------------------------------------------------------------------------------------
//OBJECTS 
//PROPERTY ASSIGNMENT

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below

spaceship.color = 'glorious gold';

spaceship.numEngines = 9;

delete spaceship['Secret Mission'];
--------------------------------------------------------------------------------------------------------------
//METHODS

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
let alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
   takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!');
  }  
}
console.log(alienShip.retreat(), alienShip.takeOff())
--------------------------------------------------------------------------------------------------------------
//NESTED OBJECTS

let spaceship = {
  passengers: [{name: 'Space Dog'}], 
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

let capFave = spaceship.crew.captain['favorite foods'][0];

let firstPassenger = spaceship.passengers[0];
--------------------------------------------------------------------------------------------------------------
//PASS BY REFERENCE

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below

let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil';
}

let remotelyDisable = obj => {
  obj.disabled = true;
}

greenEnergy(spaceship);

remotelyDisable(spaceship);

console.log(spaceship)
--------------------------------------------------------------------------------------------------------------
//LOOPING THROUGH OBJECTS 
//FOR...IN

let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// Write your code below

for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
};

for (let crewMember in spaceship.crew) {
  console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
};
--------------------------------------------------------------------------------------------------------------
//The "this" KEYWORD

const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};

console.log(robot.provideInfo());
--------------------------------------------------------------------------------------------------------------
//PRIVACY

const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robot._energyLevel = 'high';

robot.recharge()
---------------------------------------------------------------------------------------------------------------
//GETTERS METHODS

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel(){
    if(typeof this._energyLevel === 'number') {
      return 'My current energy level is ' + this._energyLevel
    } else {
      return "System malfunction: cannot retrieve energy level"
    }
  }
};

console.log(robot.energyLevel);
--------------------------------------------------------------------------------------------------------------
//SETTER METHODS

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0){
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0')
    }   
  } 
};

robot.numOfSensors = 100;
console.log(robot.numOfSensors);
--------------------------------------------------------------------------------------------------------------
FACTORY FUNCTIONS

const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}
const tinCan = robotFactory('P-500', true);

tinCan.beep();
--------------------------------------------------------------------------------------------------------------
SHORTHAND VERSION OF FACTORY 
 
const robotFactory = (model, mobile) => {
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}
--------------------------------------------------------------------------------------------------------------












*/
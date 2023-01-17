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

-------------------------------------------------------------------------------------------------------------------

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
  
  
  
  */
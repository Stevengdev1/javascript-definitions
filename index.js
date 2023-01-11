/*
//TITLE: FUNCTIONS
//EXAMPLE: IN AN OFFICE ARRANGED OF SHAPED LIKE A GRID, WE CAN USE A FUNCTION TO CALCULATE THE NUMBER OF MONITORS NEEDED.
function monitorCount(rows, columns)  {
  
  return rows * columns; //The return keyword is powerful because it allows functions to produce an output. We can then save the output to a variable for later use.
}
  const numOfMonitors = monitorCount(5, 4);
 console.log(numOfMonitors)
*/

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
